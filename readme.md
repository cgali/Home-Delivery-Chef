# README Modulo2

# Home Delivery Chef  (HDC)

## Description
Our app is about home cooks. On this page, the chef will publish his profile and his dishes and the user can register and buy the dishes that he wants with a minimum purchase. And then the chef will come to the user's house and cook all the dishes.

## User Stories
***404* -** Make a “404” page for when I go to a page that doesn’t exist, so that I know it’s my fault. As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

***500* -** Make a “500” page for when the error isn’t my fault.

***Homepage* -** Make a “Homepage” that  you can see the presentation and what you can find inside the page. At the up-left corner you can see the a “Profile” button that goes to the login page. 

***Sign up* -** Make a “Sign up” page to sign up on the webpage so that the user can buy all the dishes and bowls.

***Login* -** Make a “login” page to log in on the webpage so that the user can get back to my account

***Logout* -** Make a “Logout” button to be able to log out from the webpage so that the user can make sure no one will access my account

***Dish list* -** Make a “plate list” to see what types of plates are and choose what the user want.

***Chefs list* -** Make a ”chefs list” to see what types of cookers are and choose what the user want and then go to “chef page”.

***Chef page* -** Make a “chef” page”  to see how many types of plates have the cooker and then the users could choose what he want.

***Dish page* -** Make a “dish” page to see the details of the plate.

***Create dishes* -** Make a “create dishes” page, so chef can create new dish.

***Update|Delete dishes* -** Make a “update/delete dishes” page, so chef can update or delete an exist dish.

***Attend event* -** As a user I want to be able to attend to event so that the organizers can count me in

## Backlog
Make a shop page where the user will pay the dishes.

Put an option before pay the dishes to mark if you want to learn with chef to do the food (with an extra cost).

Chef profile: make an update page for chef to ability the possibility of change some specs of the profile.

Geo Location: - add geolocation of the users to know the location of the house or the location that wants to meet with the chef.

Homepage: - …

## ROUTES:
| Method | Endpoint   | Description                      |
| ------ | :--------- | -------------------------------- |
| GET    | /          | HomePage                         |
| GET    | /login     | Login page                       |
| POST   | /login     | Send user info and logged in     |
| GET    | /singup    | Signup page                      |
| POST   | /signup    | Register new normal user or chef |
| GET    | /menus     | Menus page                       |
| GET    | /menus/:id | Each menu page                   |
| GET    | /chefs     | Chefs page                       |
| GET    | /chefs/:id | Each chef page                   |

| Method | Endpoint      | Description                          |
| ------ | :------------ | ------------------------------------ |
| GET    | /cart         | Cart page                            |
| POST   | /cart         | Confirm menu and options             |
| GET    | /payment      | Payment and delivery page            |
| POST   | /payment      | Pay and ready                        |
| GET    | /how-it-works | Explanation on how the service works |
|        |               |                                      |
|        |               |                                      |
|        |               |                                      |
|        |               |                                      |

## 

## Models

User model

```
{
	username: String
	password: String
}
```

Chef model

```
{
	username: String
	password: String
	typeOfFood: Array
	yearsOfExperience: String
}
```


Dish model

```
{ 
	owner: ObjectId<Chef>
	name: String
	typeOfFood: Array
	description: String
	price: Number
}
```

## Links

### Trello
[Trello](https://trello.com/b/ljDKitLE/traditional-delivery-food-app)

### Git
The url to your repository and to your deployed project


### Slides