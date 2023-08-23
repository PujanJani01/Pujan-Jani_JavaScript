
/* fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log('Error')); */

//----------------------------------------------------------------------------------------------

/* fetch("https://jsonplaceholder.typicode.com/posts?id=30")
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log('Error')); */

//----------------------------------------------------------------------------------------------

/* fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log('Error')); */

//----------------------------------------------------------------------------------------------

/* fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log('Error')); */

//----------------------------------------------------------------------------------------------

console.log("Start");

setTimeout(function cbT(){
    console.log("CB setTimeout");
},5000);

fetch('https://api.github.com/users')
.then(function cbF(){
    console.log('CB Netflix');
});

console.log('End');


