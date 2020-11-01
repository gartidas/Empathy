/*Variables*/
let btn = document.getElementById('register-btn');
let overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {

    overlay.style.display = 'grid';
    overlay.classList.add('animation-overlay')

    setTimeout(() => {

        overlay.style.display = 'none';
        overlay.classList.remove('animation-overlay')

    }, 5000);

}, false)