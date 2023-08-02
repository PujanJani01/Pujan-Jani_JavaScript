const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
	button.addEventListener('click', (e) =>{
		let x = e.clientX - e.target.offsetLeft;
		let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        button.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 500);
	});
});

