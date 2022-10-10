const loginButton = document.querySelector('.login-button');
const loginPopup = document.querySelector('.login-popup');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.popup-close');

function open() {
    overlay.classList.add('active');
}

function close() {
    overlay.classList.remove('active');
}

loginButton.addEventListener('click', open);
closeButton.addEventListener('click', close);

