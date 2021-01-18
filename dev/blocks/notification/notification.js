let closeNotificationBtn = document.querySelector('.notification__close')
let notification = document.querySelector('.notification')

closeNotificationBtn.addEventListener('click', () => {
	notification.classList.add('notification--remove')
	setTimeout(() => {
		notification.remove()
	}, 250)
})
