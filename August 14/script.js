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

addbtn.addEventListener('click', () => {
   fetchAPI("https://randomuser.me/api/");
})

function fetchAPI(apilink){
  const api = fetch(apilink);
  api.then(response => response.json())
  .then(data =>  getData(data))
    .catch(error => console.log("ERROR: something went wrong"))
}

function getData(data){
  let person = {};
  person.pic = data.results[0].picture.large;
  person.fullname = data.results[0].name.first +  data.results[0].name.last;
  person.DOB = data.results[0].dob;
  console.log(data);
}
