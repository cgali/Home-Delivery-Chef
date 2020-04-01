function total(price) {
	price = 0;
	for (let i = 0; i < price.length; i++) {
		price += price[i];

	}
	return price;
}
