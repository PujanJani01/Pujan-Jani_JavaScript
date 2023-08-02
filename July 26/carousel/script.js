let left = document.querySelector('#left');
let right = document.querySelector('#right');
let pics = document.querySelector('.pics');
let direction;

right.addEventListener('click', () => {
  pics.style.transform = `translateX(-25%)`;
  goRight();
})
left.addEventListener('click', () => {
  pics.style.transform = `translateX(25%)`;
  goLeft();
})

function goRight(){
  pics.addEventListener('transitionend', () => {
    pics.appendChild(pics.firstElementChild);
    pics.style.transition = 'none';
    pics.style.transform = 'translateX(0)';
    setTimeout(() => {
      pics.style.transition = 'all 1s';
    })
  })
}

// function goLeft(){
//   pics.addEventListener('transitionstart', () => {
//     pics.prepend(pics.lastElementChild);
//     pics.style.transform = 'translateX(0)';
//     setTimeout(() => {
//       pics.style.transition = 'all 1s';
//     })
//     pics.style.transition = 'none';
//   })
// }


