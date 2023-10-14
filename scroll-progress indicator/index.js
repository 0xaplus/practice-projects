const progressElem = document.querySelector('.progress');
const html = document.querySelector('html');

function scrollHandler() {
    const screenHeight = window.innerHeight;
    const scrollY = Math.round(window.scrollY);
    const maxScrollHeight = html.scrollHeight - screenHeight; // Length of the html document - Height of screen displaying it

    const howMuchScroll = scrollY;
    const progress = (howMuchScroll / maxScrollHeight) * 100;

    progressElem.value = progress;
}

scrollHandler();
 
window.addEventListener('scroll', scrollHandler);