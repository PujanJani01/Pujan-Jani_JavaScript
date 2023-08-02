// let arr = ['pujan','jeel','vansh','prakhar'];
// let arr2 = arr.map((value) => value[0]);
// console.log(arr2);


// let arr = [1,2,3,4,5];
// let arr2 = arr.splice(0);
// console.log(arr);   // []
// console.log(arr2);  // [1,2,3,4,5]

// let arr = [1,2,3,4,5];
// let arr2 = arr.splice();
// console.log(arr);  // [1,2,3,4,5]
// console.log(arr2);  // []

// let arr = [1,2,3,4,5];
// let arr2 = arr.splice(0,1);
// console.log(arr);  // [2,3,4,5]
// console.log(arr2); // [1]

// let arr = [1,2,3,4,5];
// let arr2 = arr.splice(0,-1);
// console.log(arr);  // [1,2,3,4,5]
// console.log(arr2); // []

// let arr = [1,2,3,4,5];
// let arr2 = arr.splice(-1);
// console.log(arr);  // [1,2,3,4]
// console.log(arr2); // [5]

// let arr = [1,2,3,4,5];
// let arr2 = arr.splice(-3,2);
// console.log(arr);  // [1,2,5]
// console.log(arr2); // [3,4]

// let arr = [1,2,3,4,5];
// let arr2 = arr.splice(null);
// console.log(arr);  // []
// console.log(arr2); // [1,2,3,4,5]


const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
    { name: "Product 8", price: 90, category: "Furniture" },
    { name: "Product 8", price: 90, category: "Furniture" },
  ];

function count(array){
    let category = array.map(el => el.category);
    let group = category.reduce((a,c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
    },{});
    return group;
};
console.log(count(products));