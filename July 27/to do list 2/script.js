const tasks = [];
let inputbox = document.querySelector('#input');
let form = document.getElementsByTagName('form')[0];
let list = document.querySelector('ul');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputbox.value.length > 3) {
    if (confirm('Do you want to add this task in your to do list?')) {
      tasks.push(inputbox.value);
      let item = document.createElement('li');
      item.innerHTML = `<span>${tasks.pop()}</span>`;
      // item.innerHTML = `<span>${tasks.pop()}</span><button id='closebtn'>x</button>`;
      list.appendChild(item);
      inputbox.value = '';
    }
  }
})












