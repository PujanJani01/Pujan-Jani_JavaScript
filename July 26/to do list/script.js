let inputbox = document.querySelector('input');
let pending= document.querySelector('.pendinglist');
let completed = document.querySelector('.completedlist');
let form = document.querySelector('form')
let count = 0;

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(inputbox.value.trim().length >= 3){
        if(confirm('Do you want to add this task to your to do list?')){
            createTask();
        }
    }

    /*  checktask.addEventListener('click' ,() =>{
        if(label.style.textDecoration == 'line-through'){
            label.style.textDecoration = 'none';
            list.insertAdjacentElement("afterbegin",task);
            task.style.opacity = 1;
        }
        else{
            label.style.textDecoration = 'line-through';
            list.insertAdjacentElement("beforeend",task);
            task.style.opacity = 0.5;
        }
     }) */

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
            delbtn.addEventListener('click', () =>{
                completed.removeChild(task);
             })
        }
     })
     inputbox.value = '';
     delbtn.addEventListener('click', () =>{
        pending.removeChild(task);
     })

    // edit task using prompt

    /*  editbtn.addEventListener('click', () =>{
        let newvalue = prompt('Edit your task');
        label.innerText = newvalue;
     }) */
     
    editbtn.addEventListener('click', () =>{
        div.removeChild(label);
         var editinput = document.createElement('input');
         editinput.type = 'text';
         editinput.id = 'editinput';
         editinput.value = label.innerText;

         var donebtn = document.createElement('button');
         donebtn.id = 'donebtn';
         donebtn.innerText = "Done";

         div.append(editinput,donebtn);

         donebtn.addEventListener('click', () =>{
            label.innerText = editinput.value;
            div.removeChild(editinput);
            div.removeChild(donebtn);
            div.appendChild(label)
        })
    })
})

function createTask(){
    var task = document.createElement('li');

    var checktask = document.createElement('input');
    checktask.type = 'checkbox';
    count += 1;
    checktask.id = `check${count}`;   // using count new id is given to every new li

    var label = document.createElement('label');
    label.innerText = inputbox.value;
    label.htmlFor = checktask.id;

    var div = document.createElement('div');
    div.classList.add('div1');
    div.append(checktask, label)

    var delbtn = document.createElement('button');
    delbtn.innerText = '×';

    var editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';

    var div2 = document.createElement('div');
    div2.classList.add('div2');
    div2.append(editbtn, delbtn);

    task.append(div,div2);
    pending.appendChild(task);
}




/* let mode = document.querySelector('#mode');
let body = document.querySelector('body')

mode.addEventListener('click',() =>{
    if(body.style.backgroundColor == 'white'){
        body.style.backgroundColor = 'black';
        mode.innerText = 'Light Mode';
    }   
    else{
        body.style.backgroundColor = 'white';
        mode.innerText = 'Dark Mode';
    }  
})
 */


