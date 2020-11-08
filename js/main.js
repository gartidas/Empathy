/*Variables*/
let loginBtn = document.getElementById('login-btn');
let showNavBtn = document.getElementById('show-nav-btn');
let overlay = document.getElementById('overlay');
let navbarOverlay = document.getElementById('navbar-overlay');
let nav = document.getElementById('nav');
let username = document.getElementById('username');
let password = document.getElementById('password');
let opened = false;

loginBtn.addEventListener('click', () => {
    var usernameValue = username.value;
    var passwordValue = password.value;

    if (usernameValue && passwordValue) {
        overlay.style.display = 'grid';
        overlay.classList.add('animation-overlay')

        setTimeout(() => {

            overlay.style.display = 'none';
            overlay.classList.remove('animation-overlay')

        }, 5000);
    }

}, false)

showNavBtn.addEventListener('click', () => {
    if (opened) {
        closeNavbar();
    } else {
        openNavbar();
    }

}, false)

navbarOverlay.addEventListener('click', () => {
    if (opened) {
        closeNavbar();
    }
}, false)

function openNavbar() {
    nav.classList.add('animation-showNavBar')
    nav.classList.remove('animation-hideNavBar')
    navbarOverlay.style.display = 'grid';
    navbarOverlay.classList.add('animation-showNavBarOverlay')
    navbarOverlay.classList.remove('animation-hideNavBarOverlay')
    opened = true;
}

function closeNavbar() {
    nav.classList.remove('animation-showNavBar')
    nav.classList.add('animation-hideNavBar')
    navbarOverlay.classList.remove('animation-showNavBarOverlay')
    navbarOverlay.classList.add('animation-hideNavBarOverlay')
    navbarOverlay.style.display = 'none';
    opened = false;
}