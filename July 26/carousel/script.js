let left = document.querySelector('#left');
let right = document.querySelector('#right');
let pics = document.querySelector('.pics');
// let slides = document.querySelectorAll('image');

let liEls = document.querySelectorAll('img');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(Math.max(index,0), liEls.length-1);
  liEls[index].scrollIntoView({behavior: 'smooth'});
}


// let curSlide = 0;
// let maxSlide = slides.length - 1;
// right.addEventListener("click", function () {
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });