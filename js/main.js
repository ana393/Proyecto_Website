/*This script is for the use of the navegation bar in devices < 500px width*/ 
const MobButton = document.getElementsByClassName('Mob-Button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

MobButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
