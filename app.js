const mobileMenu = document.querySelector('.mobile-menu')
const burgerIcon = document.querySelector('#burger')
let isOpen = false

burgerIcon.addEventListener('click', function () {
    if (!isOpen) {
        mobileMenu.style.display = 'flex'
        setTimeout(function () {
            mobileMenu.style.transform = 'translateX(0)'
        }, 10)
        isOpen = !isOpen
    } else {
        mobileMenu.style.transform = 'translateX(11rem)'
        setTimeout(function () {
            mobileMenu.style.display = 'none'
        }, 70)
        isOpen = !isOpen
    }
})