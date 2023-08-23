/* const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fd7376fb5cmsh837f588ce1c5dc7p12e9fajsneadbcff72b51',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

async function getData(){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getData(); */

//----------------------------------------------------------------------------------------------------------

/* let cityname;

document.getElementById('getweatherbtn').addEventListener('click', () => {
    cityname = document.getElementById("cityname").value.trim().toLowerCase();
    const url = `https://open-weather13.p.rapidapi.com/city/${cityname}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fd7376fb5cmsh837f588ce1c5dc7p12e9fajsneadbcff72b51',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    async function getData() {
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    
    getData();
}) */

//-------------------------------------------------------------------------------------------------

/* fetch('https://jsonplaceholder.typicode.com/users?id=5')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error'))

fetch('https://jsonplaceholder.typicode.com/users?id=5&id=9')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error'))

fetch('https://jsonplaceholder.typicode.com/users?name=Mrs.+Dennis+Schulist&name=Chelsey+Dietrich')
.then(response => response.json())
.then(data => console.log(data)) 
.catch(error => console.log('Error')) */

//-------------------------------------------------------------------------------------------------

/* fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'POST',
    headers: {
        'Content-type': 'Application/json'
    },
    body: JSON.stringify({
        // id: 5,
        name: 'pujan',
        username: 'pujanjani'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error')) */


//-------------------------------------------------------------------------------------------------

/* fetch('https://jsonplaceholder.typicode.com/users/6',{
    method: 'put',
    headers: {
        'Content-type': 'Application/json'
    },
    body: JSON.stringify({
        id: 6,
        name: 'pujan',
        username: 'pujanjani',
        age: 18
    })
})
.then(response => response.json())
.then(data => console.log(data)) 
.catch(error => console.log('Error')) */

//-------------------------------------------------------------------------------------------------

/* fetch('https://jsonplaceholder.typicode.com/users/8',{
    method: 'delete',
})
.then(response => response.json())
.then(data => console.log(data)) 
.catch(error => console.log('Error')) */

//-------------------------------------------------------------------------------------------------

