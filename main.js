let element = document.querySelector('.to-top');
window.addEventListener("scroll", function () {
    if (pageYOffset > 100) { element.classList.remove('hidden') }
    else element.classList.add('hidden');
});