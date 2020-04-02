function total(price) {
	const totalCartPrice = document.getElementById("price-id");
	let totalPrice = 0;
	for (let i = 0; i < price.length; i++) {
	totalPrice = totalPrice + price[i];
	}
	return totalCartPrice.innerText = totalPrice;
}