/*Variables*/
let btn = document.getElementById('login-btn');
let overlay = document.getElementById('overlay');
let username = document.getElementById('username');
let password = document.getElementById('password');

btn.addEventListener('click', () => {
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