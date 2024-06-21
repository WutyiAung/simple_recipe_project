const getElement = (selector) => {
    let element = document.querySelector(selector);
    if(element) return element;
    throw Error(`double check your selector , there is no ${selector}  class`);
}
let links = getElement('.nav-links');
let navBtnDOM = getElement('.nav-btn');
navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links');
});

const date = getElement('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
