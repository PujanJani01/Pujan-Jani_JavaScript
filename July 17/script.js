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


let ul = document.getElementById('nav-list');
let bar = document.getElementsByClassName('bar')[0];

bar.addEventListener('click', () => {
    document.getElementsByClassName("menubar")[0].style.display = "block";
     document.getElementsByClassName("menubar")[0].style.left = "0%";
    ul.style.display = "flex"; 
    document.getElementsByClassName("menubar")[0].appendChild(ul);
    
})

let closebtn = document.getElementsByClassName('closebtn')[0];

closebtn.addEventListener("click", () =>{
    document.getElementsByClassName("menubar")[0].style.display = "none";
})
