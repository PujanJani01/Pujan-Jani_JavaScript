/* let str = 'https://reqres.in/api/users';   
document.getElementById('myForm').addEventListener('submit', function(e){
    e.preventDefault();
    getData(str,e);
});

function getData(url,e) {
    let fd = new FormData();
    fd.append('email', e.target.email.value);
    fd.append('password', e.target.password.value);
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: fd
    });
    

    fetch(request)                              
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error'));
}
 */

//----------------------------------------------------------------------------------------------

/* let str = 'https://reqres.in/api/users';   
document.getElementById('myForm').addEventListener('submit', function(e){
    e.preventDefault();
    getData(str,e);
});

function getData(url,e) {
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value
        }),
    });
    fetch(request)                              
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error'));
} */

//----------------------------------------------------------------------------------------------

/* let imgstr = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

function getData(url){
    fetch(url)
        .then(response =>{
            console.log('External IMG Mode : cors');
            console.log(response.status);
        })
        .catch(error => console.log('Error'));
        
    fetch(url, {mode: 'no-cors'})
        .then(response =>{
            console.log('External IMG Mode : no-cors');
            console.log(response.status);
        })
        .catch(error => console.log('Error'));
}
getData(imgstr); */

//----------------------------------------------------------------------------------------------

/* let localstr = 'http://127.0.0.1:5500';

function getData(url){
    fetch(url)
        .then(response =>{
            console.log('Local JSON Mode : cors');
            console.log(response.status);
        })
        .catch(error => console.log('Error'));
        
    fetch(url, {mode: 'no-cors'})
        .then(response =>{
            console.log('Local JSON Mode : no-cors');
            console.log(response.status);
        })
        .catch(error => console.log('Error'));
}
getData(localstr); */

//----------------------------------------------------------------------------------------------

/* let localstr = 'http://127.0.0.1:5500';

function getData(url) {
    fetch(url)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.log('Error'));
}
getData(localstr); */

//----------------------------------------------------------------------------------------------

/* let str = 'https://reqres.in/api/users';   
function getData(url) {
    fetch(url, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name : 'pujan',
            age : 18
        }),
        mode: 'no-cors'
        // if mode is no-cors then response will be null and it will throw error
    })                   
    .then(response => response.json())  
    .then(data => console.log(data))
    .catch(error => console.log('Error'));
}
getData(str); */

//----------------------------------------------------------------------------------------------

/* let jsonstr = 'https://jsonplaceholder.typicode.com/posts';
let imgstr =  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

function   getData() {
    let imageResponse;
    let jsonResponse;
    fetch(imgstr)
    .then(response =>{
       imageResponse = response.blob();
       return fetch(jsonstr);
    })  
    .then(response =>{
        jsonResponse = response.json();
        return Promise.all([imageResponse, jsonResponse]);
    })
    .then(([imageResponse, jsonResponse]) => console.log(imageResponse, jsonResponse))
    .catch(error => console.log('Error'));
}
getData();
 */
//----------------------------------------------------------------------------------------------

/* let jsonstr = 'https://jsonplaceholder.typicode.com/posts';
let imgstr =  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

function   getData() {
    let imageResponse;
    let jsonResponse;
    fetch(imgstr)
    .then(response =>{
       imageResponse = response.blob();
       return fetch(jsonstr);
    })  
    .then(response =>{
        jsonResponse = response.json();
        return Promise.all([imageResponse, jsonResponse]);
    })
    .then(([imageResponse, jsonResponse]) =>{
        console.log(imageResponse, jsonResponse);
        let img = document.createElement('img');
        img.src = URL.createObjectURL(imageResponse);
        document.body.appendChild(img);
    })
    .catch(error => console.log('Error'));
}
getData(); */

//----------------------------------------------------------------------------------------------

/* let jsonstr = 'https://jsonplaceholder.typicode.com/posts';
let imgstr =  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

function   getData() {
   Promise.all([fetch(imgstr), fetch(jsonstr)])
   .then(([imageResponse, jsonResponse]) => {
       return Promise.all([imageResponse.blob(), jsonResponse.json()])
   })
    .then(([blob, jsonData]) =>{
        console.log(blob, jsonData);
        let img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        document.body.appendChild(img);
    })
}
getData(); */

//----------------------------------------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts' ,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name : 'pujan',
        age : 18
    })
})
.then(response => fetch('https://jsonplaceholder.typicode.com/posts'))
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error'));
