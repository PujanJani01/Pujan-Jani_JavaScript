let btn = document.createElement('button');
btn.innerText = 'Go to Top';
window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
        document.querySelector('body').appendChild(btn);
    }
    else{
    document.querySelector('body').removeChild(btn);
    }
})
btn.addEventListener('click',()=>{
    window.scrollTo(0,0);
})
    
