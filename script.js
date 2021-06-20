const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};

const randomElement = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

// listen for a form submit
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	// Once form submits, grab values from selected radio inputs
	const sizeSelected = document.querySelector('input[name=size]:checked').value;
	const priceSelected = document.querySelector('input[name=price]:checked').value;
	
	console.log(sizeSelected, priceSelected)
	// use radio input values, to look through pizza object.
	const sizePizzaList = pizza[sizeSelected]

	const withinPricePizzaList = sizePizzaList.filter((pizzaPlace) => {
		if(pizzaPlace.price === priceSelected){
			return true;
		} else {
			return false;
		}
	});
	const finalPizzaPlace = randomElement(withinPricePizzaList);
	console.log("final: ", finalPizzaPlace)

})

// display the matching pizza joint to user.

