

// console.log(document.getElementById('div1').getElementsByClassName('para'));

// console.log(document.querySelector('button'));

// console.log(document.querySelectorAll('#para'));

//----------------------------------------------------------------------------------------------

// getElementByClassName vs querySelectorAll

// console.log(document.getElementsByClassName('para'));   // return static NodeList 
// console.log(document.querySelectorAll('.para'));        // return live HTMLCollection

// let para = document.createElement('p');
// para.className = 'para';
// let paraText = document.createTextNode('Hello World!');
// para.appendChild(paraText);
// let target = document.getElementById('div1');
// target.insertBefore(para,target.childNodes[0]);

//----------------------------------------------------------------------------------------------

// let a = document.getElementById('div1').getElementsByTagName('p');
// let b = a[a.length-1].className = 'hello';
// console.log(b);   // hello


// let a = document.createElement('span');
// a.className = 'pujan';

// console.log(a);
// console.log(a.classList.contains('pujan'));
// console.log(a.classList.contains('jani'));
// a.classList.add('jani');

// console.log(a);

// a.classList.remove('pujan');

// console.log(a);

// console.log(a.classList.contains('pujan'));
// console.log(a.classList.contains('jani'));

// console.log(a.classList);
//----------------------------------------------------------------------------------------------

// let a = document.getElementById('div1').getElementsByTagName('p');
// console.log(a);

// console.log(a[0].innerHTML);

// a[0].innerHTML = 'hello guys!';

// console.log(a[0].innerHTML);

//-----------------------------------------------------------------------------------------------

// let a = document.getElementsByClassName('link');
// // let a = document.getElementById('div1').getElementsByClassName('link');
// console.log(a);

// console.log(a[0].attributes);     //  return NamedNodeMap
// console.log(a[0].attributes[0]);  // return attribute at 0th index in NamedNodeMap with content
// console.log(a[0].attributes[1]);  // return attribute at 1th index in NamedNodeMap with content

// a[0].setAttribute('id','google');
// console.log(a[0].attributes);
// console.log(a[0].attributes[2]);

//-----------------------------------------------------------------------------------------------

//   console.log(document.getElementById('div1'));
//   console.log(document.getElementById('div1').innerHTML);
//   console.log(document.getElementById('div1').outerHTML);

//-----------------------------------------------------------------------------------------------

// let child1 = document.getElementById('div1');

// console.log(child1.firstElementChild);     // <p id="para" class="para">How are you?</p>
// console.log(child1.lastElementChild);      // <a href="https://google.com" class="link"  target="_blank">click to go to google</a>
  

// let child2 = document.getElementById('para');

// console.log(child2.firstChild);    // How are you?
// console.log(child2.lastChild);     // How are you?

//-----------------------------------------------------------------------------------------------

// let sibling = document.getElementById('para');
// console.log(sibling.nextElementSibling);       // <p class="para">How</p>
// console.log(sibling.previousElementSibling);   // null

//-----------------------------------------------------------------------------------------------

// let tag = document.getElementById('para');
// console.log(tag.tagName);   // P

// let tag2 = document.getElementsByClassName('para');
// for(let i = 0 ; i < tag2.length; i++){
//     console.log(tag2[i].tagName);
// }

// let tag3 = document.getElementsByTagName('p');
// for(let i = 0 ; i < tag3.length; i++){
//     console.log(tag3[i].tagName);
// }

//-----------------------------------------------------------------------------------------------

// console.log(document.getElementById('para').getAttributeNames());   // return Array

// let t = document.getElementById('para');
// console.log(t.getAttributeNode('id'));   // id = 'para'
// console.log(t.getAttributeNode('class'));   // class = 'para'

//-----------------------------------------------------------------------------------------------
function txt(){
    let para = document.createElement('h2');
    let paraText = document.createTextNode('Hello World!');
    para.appendChild(paraText);
    // document.getElementById('div1').appendChild(para);

    let target = document.getElementById('div1');
    target.insertBefore(para,target.childNodes[0]);
    
    // let comment = document.createComment('This is comment!');
    // document.getElementById('div1').appendChild(comment);
}

let comment = document.createComment('This is comment!');
document.getElementById('div1').appendChild(comment);

function txt2(){
    alert('context menu event');
}

document.getElementById('dbl').ondblclick = txt3;
function txt3(){
    document.getElementById('dbl').style.color = "red";
}

document.getElementById('mouse').addEventListener("mouseenter", mouseenter)

function mouseenter(){
    this.innerHTML = "Entered";
}   

document.getElementById('mouse').addEventListener("mouseleave", () => {
    document.getElementById('mouse').innerHTML = "Mouse leave";
})

document.getElementById('mouse').addEventListener("click" , () =>{
    document.getElementById('mouse').removeEventListener("mouseenter", mouseenter);
})

document.getElementById('copy').addEventListener("copy", () => {
    document.getElementById('copy').style.backgroundColor = 'blue';
    document.getElementById('copy').style.color = 'white';
    document.getElementById('copy').style.width = 'min-content';
})

document.getElementById('input').addEventListener("focus", () =>{
    document.getElementById('input').style.borderRadius = "10px";
})

document.getElementById('input').addEventListener("focusin", () =>{
    document.getElementById('input').style.borderColor = "blue";
})

document.getElementById('input').addEventListener("focusout", () =>{
    document.getElementById('input').style.background = "pink";
})

document.getElementById('input').addEventListener("paste", () =>{
    document.getElementById('input').style.backgroundColor = "#f0f0f0";
})

document.getElementById('input').addEventListener("cut", () =>{
    document.getElementById('input').style.backgroundColor = "red";

})

// document.getElementById('keydown').addEventListener("keydown", function(){
//     document.getElementById('keyevent').style.background = this.value;
// })  

var myWindow;
function windowOpen(){
   myWindow = window.open("https://saeculumsolutions.com/","","width=600px, height=500px, top=200px, left=500px");
}

function windowClose(){
    myWindow.close();
}

function scrollbyUp(){
    window.scrollBy(0,-50);
}
function scrollbyDown(){
    window.scrollBy(0,50);
}

function scrolltoTop(){
    window.scrollTo(0,0)
}


// window.addEventListener('wheel', (event) =>{
//     if(event.deltaY < 0){
//         console.log("Scroll Up");
//     }
//     else if(event.deltaY > 0){
//         console.log("Scroll Down");
//     }
// })

// window.addEventListener('scroll', function(){
//     if(window.scrollY > 100){
//         alert("Your system has virus!!")
//     }
// })