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

//----------------------------------------------------------------------------------------------

// let a = document.getElementById('div1').getElementsByTagName('p');
// console.log(a);

// console.log(a[0].innerHTML);

// a[0].innerHTML = 'hello guys!';

// console.log(a[0].innerHTML);