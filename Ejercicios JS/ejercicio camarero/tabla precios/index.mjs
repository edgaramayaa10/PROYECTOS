import food from './foods.mjs';

const getAllCategories =  [...new Set (food.map(food => food.category))];

const checkItExistsCategory = (category) => getAllCategories.includes(category);
console.log(checkItExistsCategory('Italian'));
console.log(checkItExistsCategory('Spanish'));

const findCategory = (category) => food.filter((food) => (food.category === category));
console.log(findCategory('Fast Food'));


console.log(getAllCategories);


const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];


const calculateTotalTicket = (ticket, foods) =>
	ticket
		
		.map((item) => food.find((food) => food.icon === item)) 
		
		.filter(Boolean) 
		
		.reduce((total, food) => total + food.price, 0); 


const totalTicket = calculateTotalTicket(ticket, food);
console.log(
	`Total of the ticket: ${JSON.stringify(ticket)} is $${totalTicket.toFixed(2)}`
);