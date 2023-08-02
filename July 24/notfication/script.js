let buttons = document.querySelector('button');
let messeges = ['Hello Guys!', 'It\'s me Pujan', 'How are you?', 'How you doin!']
let notifications = document.getElementsByClassName('notifications')[0];

buttons.addEventListener('click', () =>{
     let notification = document.createElement('div');
     let messege = document.createTextNode(messeges[Math.floor(Math.random()*messeges.length)]);
     notification.appendChild(messege);
     notifications.appendChild(notification);
     setTimeout(() =>{
     notifications.removeChild(notification);
     },4000)
})
