var toggleButton = document.querySelector('.header__btn')
var siteNavbar = document.querySelector('.navbar')

toggleButton.addEventListener ('click', () => {
    siteNavbar.classList.toggle('navbar-open');
    toggleButton.classList.toggle('close-btn');
})