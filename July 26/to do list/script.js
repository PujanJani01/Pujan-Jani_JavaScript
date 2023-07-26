let inputbox = document.querySelector('input');
let pending= document.querySelector('.pendinglist');
let completed = document.querySelector('.completedlist');
let form = document.querySelector('form')
let count = 0;

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(inputbox.value.trim().length >= 3){
        if(confirm('Do you want to add this task to your to do list?')){
            var task = document.createElement('li');
            // task.innerHTML = `<input type='checkbox' id='check'></input><label for='check'>${inputbox.value}</label>`;
            var checktask = document.createElement('input');
            checktask.type = 'checkbox';
            count += 1;
            checktask.id = `check${count}`;
            var label = document.createElement('label');
            label.innerText = inputbox.value;
            label.htmlFor = checktask.id;
            let div = document.createElement('div');
            div.append(checktask, label)
            var delbtn = document.createElement('button');
            delbtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            task.append(div,delbtn);
            pending.appendChild(task);
        }
    }
    //  checktask.addEventListener('click' ,() =>{
    //     if(label.style.textDecoration == 'line-through'){
    //         label.style.textDecoration = 'none';
    //         list.insertAdjacentElement("afterbegin",task);
    //         task.style.opacity = 1;
    //     }
    //     else{
    //         label.style.textDecoration = 'line-through';
    //         list.insertAdjacentElement("beforeend",task);
    //         task.style.opacity = 0.5;
    //     }
    //  })
    checktask.addEventListener('click' ,() =>{
        if(label.style.textDecoration == 'line-through'){
            label.style.textDecoration = 'none';
            pending.appendChild(task);
            task.style.opacity = 1;
        }
        else{
            label.style.textDecoration = 'line-through';
            completed.appendChild(task);
            task.style.opacity = 0.5;
        }
     })
     inputbox.value = '';
     delbtn.addEventListener('click', () =>{
        pending.removeChild(task);
     })
})



// let mode = document.querySelector('#mode');
// let body = document.querySelector('body')

// mode.addEventListener('click',() =>{
//     if(body.style.backgroundColor == 'white'){
//         body.style.backgroundColor = 'black';
//         mode.innerText = 'Light Mode';
//     }   
//     else{
//         body.style.backgroundColor = 'white';
//         mode.innerText = 'Dark Mode';
//     }  
// })




