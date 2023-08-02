const usersData = [
    {
      id: 432,
      first_name: "Asd",
      last_name: "paerl",
      email: "abc@gmail.com",
      phone: "+919394099203"
    },
    {
      id: 342,
      first_name: "dsf",
      last_name: "paerl",
      email: "sdf@gmail.com",
      phone: "+919394099089"
    },
    {
      id: 765,
      first_name: "dfgf",
      last_name: "dfg",
      email: "muyjgh@gmail.com",
      phone: "+919394054345"
    },
    {
      id: 123,
      first_name: "sdxfg",
      last_name: "gdfd",
      email: "werrew@gmail.com",
      phone: "+915464569203"
    },
]
let table = document.querySelector('table');

let thead = document.createElement('thead');
for(let key in usersData[0]){
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(key));
    thead.appendChild(th);
} 
table.appendChild(thead);

usersData.forEach(data => {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${data.id}</td>
    <td>${data.first_name}</td>
    <td>${data.last_name}</td>
    <td>${data.email}</td>
    <td>${data.phone}</td>`
    
    table.appendChild(tr);
})




