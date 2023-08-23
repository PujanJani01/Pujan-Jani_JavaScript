
/* fetch("https://jsonplaceholder.typicode.com/posts")
.then(response =>{
    console.log(response.status);       // 200
    return response.json()
})
.then(json => console.log(json))
.catch(error => console.log('Error')); */

//----------------------------------------------------------------------------------------------

/* fetch("https://jsonplaceholder.typicode.com/posts?id=30")
.then(response =>{
    console.log(response.status);       // 200
    return response.json()
})
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
        "Content-type": "application/json"
    }
})
.then(response =>{
    console.log(response.status);       // 201
    return response.json()
})
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
        "Content-type": "application/json"
    }
})
.then(response =>{
    console.log(response.status);       // 200
    return response.json()
})
.then(json => console.log(json))
.catch(error => console.log('Error')); */

//----------------------------------------------------------------------------------------------

/* fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" })
.then(response =>{
    console.log(response.status);       // 200
    return response.json()
})
.then(json => console.log(json))
.catch(error => console.log('Error')); */

//----------------------------------------------------------------------------------------------

/* console.log("Start");

setTimeout(function cbT(){
    console.log("CB setTimeout");
},5000);

fetch('https://api.github.com/users')
.then(function cbF(){
    console.log('CB Netflix');
});

console.log('End'); */


//----------------------------------------------------------------------------------------------

/* let str = 'https://jsonplaceholder.typicode.com/posts';
// let str = 'https://jsonplaceholder.typicode.com/posts?id=30';
// let str = 'https://127.0.0.1:5500/local-sample.json?attempt=123&other=hello';

function getData() {
    const url = new URL(str);

    console.log('href - ', url.href);
    console.log('origin - ', url.origin);
    console.log('host - ', url.host);
    console.log('hostname - ', url.hostname);
    console.log('protocol - ', url.protocol);
    console.log('port - ', url.port);
    console.log('pathname - ', url.pathname);
    console.log('search - ', url.search);
    console.log('searchParams - ', url.searchParams);
 
    const request = new Request(url, {
        // headers: { 'x-pujan': 'starts with x for a custom header name'},
        method: 'GET',
        // cache: 'no-store'
    });

    fetch(request)                                 // url stinrg or URL object or Request object
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log('Error'));
}
getData(); */

//----------------------------------------------------------------------------------------------

/* let  obj = {
    id: crypto.randomUUID(),
    name: 'Vijay',
    age: 18
}

function getData() {
    console.log(JSON.stringify(obj));
    const file = new Response(JSON.stringify(obj));

    let response = new Response(file, {
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': file.size,
            'X-pujan': 'starts with x for a custom header name'
        },
        status: 200,
        statusText: 'Pujan! It\'s successfull'
    });

    console.log(response.headers.get('Content-Type'));
    console.log(response.headers.get('Content-Length'));
    console.log(response.headers.get('X-pujan'));
}
getData(); */

//----------------------------------------------------------------------------------------------

// blob() - binary large object, used to get image, audio, video, etc
// blob() - returns a promise which resolves to a blob which can be used to create an object URL
//          which can be used to create an image or audio or video or etc

/* let imgstr = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

function getData(){
    const url = new URL(imgstr);
    fetch(url)
        .then(response =>{
           return response.blob();
        })
        .then(blob => {
            console.log(blob);
            let img = document.createElement('img');
            img.src = URL.createObjectURL(blob);
            document.body.appendChild(img);
        })
        .catch(error => console.log('Error'));
}
getData(); */

//----------------------------------------------------------------------------------------------

// text() - used to get text file
// text() - returns a promise which resolves to a string which can be used to create a text node  

/* const textstring = 'https://www.w3.org/TR/2003/REC-PNG-20031110/iso_8859-1.txt';

function getData(){
    const url = new URL(textstring);
    fetch(url)
        .then(response =>{
           return response.text();
        })
        .then(text => {
            console.log(text);
            let p = document.createElement('p');
            p.innerText = text;
            document.body.appendChild(p);
        })
        .catch(error => console.log('Error'));
}
getData(); */

//----------------------------------------------------------------------------------------------

/* function getData(str,idNumber) {
    let url = new URL(str);

    // let searchParams = new URLSearchParams({
    //     id: idNumber
    // });  
    // url.search = searchParams;
    
    let searchParams = url.searchParams;

    searchParams.append('id', idNumber);   // // if id is already present then it will append the value
    // searchParams.set('id', idNumber);      // // if id is already present then it will replace the value
    // searchParams.delete('id', idNumber);   // // if id is already present then it will delete the value
    
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error'));
}

// getData('https://jsonplaceholder.typicode.com/posts', 10);
getData('https://jsonplaceholder.typicode.com/posts/?id=50', 10); */

//----------------------------------------------------------------------------------------------

