
let txt1 = document.getElementById('text');
txt1.style.backgroundColor = 'blue';


let txt2 = document.getElementsByClassName('text');
for(let i=0; i<txt2.length;i++){
    txt2[i].style.backgroundColor = 'pink';
}
// forEach doesn't work 

let txt3 = document.getElementsByTagName('p');
for(let i=0; i<txt3.length;i++){
    txt3[i].style.backgroundColor = 'red';
}

let txt4 = document.querySelector('.pujan');
txt4.style.backgroundColor = 'yellow';

// txt4.forEach(item => item.style.backgroundColor = 'purple');


let txt5 = document.querySelectorAll('.queryAll');
// for(let i=0; i<txt3.length;i++){
//     txt5[i].style.backgroundColor = 'purple';
// }

txt5.forEach(el => el.style.backgroundColor = 'purple')   // forEach does work


//----------------------------------------------------------------------------------------------------

function red(){
   document.getElementsByClassName('redbtn')[0].style.backgroundColor = 'red';
}

function blue(){
    document.getElementsByClassName('bluebtn')[0].style.backgroundColor = 'blue';
 }

 function green(){
    document.getElementsByClassName('greenbtn')[0].style.backgroundColor = 'green';
 }

 function undo(){
   let undobtn =  document.getElementsByClassName('undo');
   for(let i=0; i<undobtn.length;i++){
    undobtn[i].style.backgroundColor = '#f0f0f0 ';
   }
 }

 function txtChange(){
    document.getElementById('txtChange').innerHTML = 'Clicked!!';
    document.getElementById('txtChange').style.color = 'green';
 }
//----------------------------------------------------------------------------------------------------

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
// var element  = document;
// console.log(element);

// var elementAll  = document.all;
// console.log(elementAll);   // return HTMLAllCollection

// var element  = document.all[5];
// console.log(element);     // 5th element of document

// console.log(document.head);  // head element

// console.log(document.title);  // content inside title tag

// console.log(document.body);  // body element

// console.log(document.links);  // HTMLCollection of anchor tag

// console.log(document.images);  // HTMLCollection of image tag

// console.log(document.forms);  // HTMLCollection of form tag

// console.log(document.doctype);  // <!DOCTYPE html>

// console.log(document.URL);  // return website url