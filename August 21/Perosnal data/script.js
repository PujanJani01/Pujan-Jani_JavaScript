/* const promise1 = fetch('https://randomuser.me/api/');
const promise2 = fetch('https://randomuser.me/api/');
const promise3 = fetch('https://randomuser.me/api/');

Promise.all([promise1, promise2, promise3])
  .then(responses => {
    const data = responses.map(response => response.json());
    return data;
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error('Error:', error);
  }); */

//----------------------------------------------------------------------------------------------------

let addbtn = document.getElementById('addbtn');
let pic = document.getElementById('pic');

let personalData = [];

addbtn.addEventListener('click', apiCall)

function apiCall(){
  async function fetchAPI(){
    const response = await  fetch('https://randomuser.me/api/');
    const data = response.json();
    return data;
  }
  fetchAPI().then(data => getData(data))
    .catch(error => console.log("ERROR: something went wrong"))
}


function getData(data){
  let person = {};
  person.pic = data.results[0].picture.large;
  person.fullname = data.results[0].name.first + " " + data.results[0].name.last;
  person.DOB = data.results[0].dob.date.slice(0,10);
  person.email = data.results[0].email;
  person.phone = data.results[0].phone;
  personalData.push(person);
  addData();
}

function addData(){
   document.getElementById('table').innerHTML = personalData.map(person => `<tr>
     <td><img src=${person.pic}></td>
     <td>${person.fullname}</td>
     <td>${person.DOB}</td>
     <td>${person.email}</td>
     <td>${person.phone}</td>
   </tr>`).join("");
}

