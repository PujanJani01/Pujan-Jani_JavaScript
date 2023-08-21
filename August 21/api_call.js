
/* const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/users');

xhr.onload = function(){
    if(xhr.status == 200){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    else{
        console.log(`Error: ${xhr.status}`);
    }
};

xhr.onerror = function(){
    console.error('Request error');
}

xhr.send(); */

//--------------------------------------------------------------------------------------------------------

/* fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Request error')) */

//--------------------------------------------------------------------------------------------------------

/* async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}
getData()
.then(data => console.log(data))
.catch(error => console.error('Request error')); */

//--------------------------------------------------------------------------------------------------------

/* const controller = new AbortController();
const signal = controller.signal;

const url = "https://jsonplaceholder.typicode.com/users";

const downloadBtn = document.querySelector("#download");
const abortBtn = document.querySelector("#abort");

downloadBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(url, { signal });
    console.log("Download complete", response);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
});

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
}); */

//--------------------------------------------------------------------------------------------------------

// giving errors

/* async function upload(formData) {
    try {
      const response = await fetch("https://example.com/profile/avatar", {
        method: "PUT",
        body: formData,
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');
  
  formData.append("username", "abc123");
  formData.append("avatar", fileField.files[0]);
  
  upload(formData); */
  
//--------------------------------------------------------------------------------------------------------

async function getData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  document.getElementById('userdata').innerHTML = data.map(user => `<tr>
  <td>${user.name}</td>
  <td>${user.username}</td>
  <td>${user.website}</td>
  <td>${user.email}</td>
  <td>${user.phone}</td>
  </tr>`).join(" ");
}
document.getElementById("getdatabtn").addEventListener('click', getData);

