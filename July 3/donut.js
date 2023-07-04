const array =[
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut2",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut3",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0004",
		"type": "donut1",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
    {
		"id": "0005",
		"type": "donut5",
		"name": "Old Fashioned",
		"ppu": 0.49,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "hello" },
				{ "id": "5004", "type": "Maple" }
			]
	},
    {
		"id": "0006",
		"type": "donut6",
		"name": "Old Fashioned",
		"ppu": 0.49,
		"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" }
				]
		},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]


// Using filter

// function toppingChocolate(arr){
//     let arr2 = arr.filter(value => value.topping.filter(topping => topping.type === 'Chocolate').length)
//     return arr2;
// }
// console.log(toppingChocolate(array)); 

// function toppingChocolateAndBatterRegular(arr){
//     let arr2 = arr.filter(value => value.batters.batter.filter(batter => batter.type === 'Regular').length && value.topping.filter(topping => topping.type === 'Chocolate').length)
//     return arr2;
// }
// console.log(toppingChocolateAndBatterRegular(array));   


// function toppingChocolateAndSugar(arr){
//     let arr2 = arr.filter(value => value.topping.some(topping => topping.type === 'Chocolate') && value.topping.some(topping => topping.type === 'Sugar'));
//     return arr2;
// }
// console.log(toppingChocolateAndSugar(array)); 


// function ppu(arr){
//     let ans = arr.filter((value) => value.ppu > 0.5);
//     return ans;
// }
// console.log(ppu(array));


// function batters(arr){
//     let arr3 = arr.map((value) => value.batters);
//     return arr3;
// }
// console.log(batters(array));

// function batters(arr){
//     let arr3 = arr.filter((value) => value.batters.batter.length >=2 );
//     return arr3;
// }
// console.log(batters(array));

//----------------------------------------------------------------------------------------------------------

// Using find

// function toppingChocolate(arr){
//     let arr2 = arr.filter(value => value.topping.find(topping => topping.type == 'Chocolate'))
//     return arr2;
// }
// console.log(toppingChocolate(array)); 

// function toppingChocolateAndBatterRegular(arr){
//     let arr2 = arr.filter(value => value.topping.find(topping => topping.type == 'Chocolate') && value.batters.batter.find(batter => batter.type == 'Regular'))
//     return arr2;
// }
// console.log(toppingChocolateAndBatterRegular(array)); 

// function toppingChocolateAndSugar(arr){
//     let arr2 = arr.filter(value => value.topping.find(topping => topping.type == 'Chocolate') && value.topping.find(topping => topping.type == 'Sugar'))
//     return arr2;
// }
// console.log(toppingChocolateAndSugar(array)); 

//----------------------------------------------------------------------------------------------------------

// Using findIndex

// function toppingChocolate(arr){
//     let arr2 = arr.filter(value => value.topping.findIndex(topping => topping.type == 'Chocolate') !== -1)
//     return arr2;
// }
// console.log(toppingChocolate(array)); 

// function toppingChocolateAndBatterRegular(arr){
//     let arr2 = arr.filter(value => value.topping.findIndex(topping => topping.type == 'Chocolate') !== -1 && value.batters.batter.findIndex(batter => batter.type == 'Regular') !== -1)
//     return arr2;
// }
// console.log(toppingChocolateAndBatterRegular(array)); 

// function toppingChocolateAndSugar(arr){
//     let arr2 = arr.filter(value => value.topping.findIndex(topping => topping.type == 'Chocolate') !== -1 && value.topping.find(topping => topping.type == 'Sugar') !== -1)
//     return arr2;
// }
// console.log(toppingChocolateAndSugar(array)); 
