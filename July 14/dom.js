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


//-----------------------------------------------------------------------------------------------

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

// console.log(document.getElementById('para').getAttributeNames());

// let t = document.getElementById('para');
// console.log(t.getAttributeNode('id'));   // id = 'para'
// console.log(t.getAttributeNode('class'));   // class = 'para'


