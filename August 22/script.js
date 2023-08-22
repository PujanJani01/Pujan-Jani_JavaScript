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
let cityname;

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
})


