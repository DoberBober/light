let menuBtn = document.querySelector('.menu__btn')
let menu = document.querySelector('.menu__wrapper')

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('menu__btn--active')
	menu.classList.toggle('menu__wrapper--active')
	document.body.classList.toggle('noScroll')
})
