require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app = express();

const indexRouter = require('./routes/index');
const chefs = require('./routes/chefs');
const menus = require('./routes/menus');
const howItWorks = require('./routes/how-it-works');
const aboutUs = require('./routes/about-us');
const cart = require('./routes/cart');

// Example to insert seeds:
// const Menus = require('./models/menu');
// const seeds = require('./seeds/seedsmenus');

//Connect to DB
mongoose
	.connect(`${process.env.DBURL}`, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
		//return Menus.insertMany(seeds);
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerHelper('if_equal', function(a, b, opts) {
  if(a == b) 
      return opts.fn(this);
  else
      return opts.inverse(this);
});

app.use(
	session({
		store: new MongoStore({
			mongooseConnection: mongoose.connection,
			ttl: 24 * 60 * 60, // 1 day
		}),
		secret: 'HomeDeliveryChef',
		resave: true,
		saveUninitialized: true,
		name: 'HomeDeliveryChef',
		cookie: {
			maxAge: 24 * 60 * 60 * 1000,
		},
	})
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

app.use('/', indexRouter);
app.use('/chefs', chefs);
app.use('/menus', menus);
app.use('/how-it-works', howItWorks);
app.use('/about-us', aboutUs);
app.use('/cart', cart);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
