let left = document.querySelector('#left');
let right = document.querySelector('#right');
let pics = document.querySelector('.pics');
let carosuel = document.querySelector('.visiblediv');
let direction;

right.addEventListener('click', () => {
  direction = -1;
  carosuel.style.justifyContent = 'flex-start';
  pics.style.transform = `translateX(-25%)`;
})

left.addEventListener('click', () => {
  if(direction == -1){
    direction = 1;
    pics.appendChild(pics.firstElementChild);
  }
  carosuel.style.justifyContent = 'flex-end';
  pics.style.transform = `translateX(25%)`;
})

  pics.addEventListener('transitionend', () => {
    if(direction == -1){
      pics.appendChild(pics.firstElementChild);
    }
    else if(direction == 1){
    pics.prepend(pics.lastElementChild);
    }
    pics.style.transition = 'none';
    pics.style.transform = 'translateX(0)';
    setTimeout(() => {
      pics.style.transition = 'all 1s';
    })
  })



