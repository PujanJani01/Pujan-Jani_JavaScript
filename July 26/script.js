let inputbox = document.querySelector('input');
let addbtn = document.querySelector('button');
let list = document.querySelector('.todolist')
let count = 0;

addbtn.addEventListener('click', () =>{
    if(inputbox.value.trim().length >=3){
        if(confirm('Do you want to add this task to your to do list?')){
            var task = document.createElement('div');
            // task.innerHTML = `<input type='checkbox' id='check'></input><label for='check'>${inputbox.value}</label>`;
            var checktask = document.createElement('input');
            checktask.type = 'checkbox';
            count += 1;
            checktask.id = 'check';
            var label = document.createElement('label');
            label.innerText = inputbox.value;
            label.htmlFor = 'check';
            task.append(checktask, label);
            list.appendChild(task);
            console.log(label.getAttribute('for'));
        }
    }
     checktask.addEventListener('click' ,() =>{
        if(label.style.textDecoration == 'line-through'){
            label.style.textDecoration = 'none';
            list.insertAdjacentElement("afterbegin",task);
        }
        else{
            label.style.textDecoration = 'line-through';
            list.insertAdjacentElement("beforeend",task);
        }
         
        
     })
})

