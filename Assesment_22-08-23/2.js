let friends =[
    {
        name: 'Anna',
        books: ['Bible','Harry Potter'],
        age: 21
    },
    {
        name: 'Bob',
        books: ['War and peace','Romeo and Juliet'],
        age: 21
    },  
    {
        name: 'Alice',
        books: ['The Lord of the Rings','The Shining'],
        age: 21
    }
]

function collectionOfBooks(arr){
   let res = arr.map(el => el.books).flat();
   return res;
}
console.log(collectionOfBooks(friends));