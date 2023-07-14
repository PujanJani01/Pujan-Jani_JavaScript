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

console.log(document.querySelectorAll('.para'));

document.getElementsByClassName('para')[0].innerHTML = 'pujan'