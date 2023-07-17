let nav = document.querySelectorAll('li');

// nav[0].style.borderBottom = "solid";
// for(let i = 0; i<nav.length; i++){
//     nav[i].addEventListener("click", () =>{
//         nav[i].style.borderBottom = "solid";
//     })
//     for(let j = i+1 ; j < nav.length ; j++){
//         nav[j].addEventListener("click", () =>{
//             nav[i].style.borderBottom = "";
//         })
//         nav[i].addEventListener("click", () =>{
//             nav[j].style.borderBottom = "";
//         })
//     }
// }

nav[0].className="active";  
nav.forEach(el =>{
    el.addEventListener('click', () =>{
        document.querySelector(".active")?.classList.remove("active");
        el.classList.add("active");
    })
})

var ul = document.getElementById('nav-list');
var bar = document.getElementsByClassName('bar')[0];
var ul2 = ul.cloneNode(true);
document.getElementsByClassName("menubar")[0].appendChild(ul2);

bar.addEventListener('click', abc)
function abc(){
    document.getElementsByClassName("menubar")[0].style.right = "0%";    
    
    //  document.getElementsByClassName("menubar")[0].classList.toggle('active');
    ul2.style.display = "flex";
}

let closebtn = document.getElementsByClassName('closebtn')[0];
closebtn.addEventListener("click", () =>{
    document.getElementsByClassName("menubar")[0].style.right = "100%";
    document.getElementsByClassName("menubar")[0].style.transition = "all 2s";
})

