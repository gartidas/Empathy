/*Variables*/
let loginBtn = document.getElementById('login-btn');
let showNavBtn = document.getElementById('show-nav-btn');
let overlay = document.getElementById('overlay');
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
        nav.classList.remove('animation-showNavBar')
        nav.classList.add('animation-hideNavBar')
        opened = false;
    } else {
        nav.classList.add('animation-showNavBar')
        nav.classList.remove('animation-hideNavBar')
        opened = true;
    }

}, false)