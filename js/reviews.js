/*Variables*/
let showNavBtn = document.getElementById('show-nav-btn');
let navbarOverlay = document.getElementById('navbar-overlay');
let nav = document.getElementById('nav');
let opened = false;

let content = document.getElementById('content');

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

window.addEventListener('load', (event) => {
    getReviewerData();
    getReviewerData();
    getReviewerData();
});

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

async function getReviewerData() {
    const userResponse = await fetch('https://randomuser.me/api/');
    const userJson = await userResponse.json();
    const name = userJson.results[0].name.first + " " + userJson.results[0].name.last;
    const picture = userJson.results[0].picture.medium;

    const reviewResponse = await fetch('http://www.randomtext.me/api/gibberish/p-1/20-38');
    const reviewJson = await reviewResponse.json();
    const reviewMessage = reviewJson.text_out;

    createReview({ name, picture, reviewMessage });
}

function createReview(reviewerData) {
    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `<div class="reviewer" id="reviewer"><img src="${reviewerData.picture}" alt="Reviewers profile photo" class="reviewer-photo" id="reviewer-photo"><h3 class="reviewer-name" id="reviewer-name">${reviewerData.name}</h3></div><p class="lorem sm">${reviewerData.reviewMessage}</p>`;
    content.appendChild(review);
}