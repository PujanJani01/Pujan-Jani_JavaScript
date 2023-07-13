
// console.log(document.getElementById('para'));     // <span id="para"></span>
// // return selected element object 

// console.log(document.getElementsByClassName('para'));  
// // return HTML collection of selected elements

// var arr = document.getElementsByClassName('para');  
// console.log(arr[0]);   // <p class="para"></p>

// var arr = document.getElementsByClassName('para');  
// console.log(arr.length);  // 3

// var arr = document.getElementsByClassName('para');  
// console.log(Array.isArray(arr));  // false

//-----------------------------------------------------------------------------------------

let txt1 = document.getElementById('text');
txt1.style.backgroundColor = 'blue';

let txt2 = document.getElementsByClassName('text');
for(let i=0; i<txt2.length;i++){
    txt2[i].style.backgroundColor = 'pink';
}

let txt3 = document.getElementsByTagName('p');
for(let i=0; i<txt3.length;i++){
    txt3[i].style.backgroundColor = 'red';
}

let txt4 = document.querySelector('#query');
txt4.style.backgroundColor = 'yellow';

let txt5 = document.querySelectorAll('.queryAll');
for(let i=0; i<txt3.length;i++){
    txt5[i].style.backgroundColor = 'purple';
}