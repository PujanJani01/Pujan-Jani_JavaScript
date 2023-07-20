let para = document.getElementById('para');
console.log(para.innerHTML);
console.log(para.innerText);
console.log(para.textContent);

/* let script = document.querySelector('script');
console.log(script.innerHTML);
console.log(script.innerText);
console.log(script.textContent); */

/* para.addEventListener("mouseenter", () =>{
    para.style.color = 'blue';
}) */

/* para.addEventListener("mouseover", () =>{
    para.style.color = 'blue';
}) */

/* para.addEventListener("mouseleave", () =>{
    para.style.color = 'blue';
})  */

/* para.addEventListener("mousemove", () =>{
    para.style.color = 'blue';
}) */

/* para.addEventListener("mousedown", () =>{
    para.style.color = 'blue';
})
 */
/* para.addEventListener("mouseup", () =>{
    para.style.color = 'blue';
}) */

/* para.addEventListener("click", () =>{
    para.style.color = 'blue';
}) */

/* para.addEventListener("mouseout", () =>{
    para.style.color = 'blue';
}) */

/* let list = document.querySelector('ul');
list.addEventListener('mouseenter', () =>{
    document.querySelectorAll('li').forEach(el =>{
        el.innerText += ' 1'
    })
         
}) */


/* let list = document.querySelector('ul');
list.addEventListener('mouseover', () =>{
    document.querySelectorAll('li').forEach(el =>{
        el.innerText += ' 1'
    })    
}) */

/* let list = document.querySelector('ul');
list.addEventListener('mousemove', () =>{
    document.querySelectorAll('li').forEach(el =>{
        el.innerText += ' 1'
    })     
}) */

/* let list = document.querySelector('ul');
list.addEventListener('mouseleave', () =>{
    document.querySelectorAll('li').forEach(el =>{
        el.innerText += ' 1'
    })    
}) */

/* let list = document.querySelector('ul');
list.addEventListener('mouseout', () =>{
    document.querySelectorAll('li').forEach(el =>{
        el.innerText += ' 1'
    })    
}) */

/* let list = document.querySelector('ul');
list.addEventListener('mouseup', () =>{
    document.querySelectorAll('li').forEach(el =>{
        el.innerText += ' 1'
    })    
}) */

/* let list = document.querySelector('ul');
list.addEventListener('click', () =>{
    document.querySelectorAll('li').forEach(el =>{
        el.innerText += ' 1'
    })    
}) */

let input = document.querySelector('#user');
input.addEventListener('keyup', () =>{
    input.style.backgroundColor = 'red'
})

/* let input = document.querySelector('#user');
input.addEventListener('keydown', () =>{
    input.style.backgroundColor = 'red'
}) */

/* let list = document.querySelector('ul');
console.log(list.firstChild);
console.log(list.firstElementChild); */

/* let listItems =  document.querySelector('li');
console.log(listItems.nextSibling);
console.log(listItems.nextElementSibling); */

/* let input = document.querySelector('#pass');
input.addEventListener('focus', () =>{
    input.style.backgroundColor = 'pink';
})
input.addEventListener('blur', () =>{
    input.style.backgroundColor = '';
}) */

let input2 = document.querySelector('#pass');
input2.addEventListener('focusin', () =>{
    input2.style.backgroundColor = 'pink';
})
input2.addEventListener('focusout', () =>{
    input2.style.backgroundColor = '';
}) 

/*  let body = document.querySelector('body');
window.addEventListener('resize', () =>{
    document.querySelector('ul').style.listStyleType = 'none' 
    document.querySelector('ul').style.display = 'flex' 
    document.querySelector('ul').style.justifyContent = 'space-around' 
}) */

let dropboxes = document.querySelectorAll('.dropDiv');
let dragItems = document.querySelectorAll('.dragItem');

dragItems.forEach(item =>{
    item.addEventListener('dragstart', () =>{
        item.classList.add('dragging');
    })
    item.addEventListener('dragend', () =>{
        item.classList.remove('dragging');
    })
})

dropboxes.forEach(box =>{
    box.addEventListener('dragover', (e) =>{
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        box.appendChild(draggable);
    })
})

let checkbox = document.querySelector('#check');
checkbox.addEventListener('click', (e) =>{
    e.preventDefault();
})

let checkbtn = document.querySelector('#checkbtn');
checkbtn.addEventListener('click', () => {
    if(checkbox.hasAttribute('checked')){
        checkbox.removeAttribute('checked');
        checkbtn.innerText = "check";
    }
    else if(!checkbox.hasAttribute('checked')){
        checkbox.setAttribute('checked','');
        checkbtn.innerText = "uncheck";
    }
})

let inputbox = document.querySelector('#input');
let txtbtn = document.querySelector('#txtbtn');
txtbtn.addEventListener('click', () => {
    if(inputbox.hasAttribute('disabled')){
        inputbox.removeAttribute('disabled');
        txtbtn.innerText = "disable";
    }
    else if(!inputbox.hasAttribute('checked')){
        inputbox.setAttribute('disabled','');
        txtbtn.innerText = "write";
    }
})






