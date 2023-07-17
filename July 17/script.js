let nav = document.getElementsByTagName('li');
for(let i = 0; i<nav.length; i++){
    nav[i].addEventListener("click", () =>{
        nav[i].style.borderBottom = "solid";
    })
    for(let j = i+1 ; j < nav.length ; j++){
        nav[j].addEventListener("click", () =>{
            nav[i].style.borderBottom = "";
        })
        nav[i].addEventListener("click", () =>{
            nav[j].style.borderBottom = "";
        })
    }
}

// let btn = document.getElementById('primary');
let ul = document.getElementById('nav-list');

const mediaQuery = window.matchMedia('(max-width: 576px)');

function menubar(){
    if(mediaQuery.matches){
        ul.append(btn);
        btn.remove();
    }
}

mediaQuery.addEventListener("change",menubar);