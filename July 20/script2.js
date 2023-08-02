document.querySelectorAll('li').forEach(el =>{
    el.addEventListener('click', () =>{
      document.querySelector('.active').classList.remove('active');
      el.classList.add('active');
    })
})
