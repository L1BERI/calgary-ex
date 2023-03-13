
let stickyheader = document.querySelector('.sticky-header');
let headerUpper = document.querySelector('.header')
let header = document.querySelector('.header__inner');
let stickyLogo = document.querySelector('.sticky-logo')
let burgerMenu = document.getElementById('burger');
let mobileMenu = document.querySelector('.mobile-menu');
let headerHeight = headerUpper.offsetHeight;
let bodyScroll = document.querySelector('.body');


window.addEventListener('scroll', function () {
    if (window.scrollY < headerHeight) {
        stickyheader.classList.remove('sticky-active');
        stickyLogo.classList.remove('hidden-logo');
        burgerMenu.classList.remove('burger-pos');
        burgerMenu.classList.add('burger')
        
    } else {
        stickyheader.classList.add('sticky-active');
        stickyLogo.classList.add('hidden-logo');
        burgerMenu.classList.add('burger-pos');
        burgerMenu.classList.remove('burger')
    }

})




burgerMenu.addEventListener('click', function (e) {
    mobileMenu.classList.toggle('mobile-active');
    burgerMenu.classList.toggle('burger-active');
    stickyheader.classList.toggle('sticky-shadow')
    if (burgerMenu.classList.contains('burger-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
    if (burgerMenu.classList.contains('burger')){
        burgerMenu.classList.remove('burger-pos');
        burgerMenu.classList.add('burger')
    } else{
        burgerMenu.classList.add('burger-pos');
        burgerMenu.classList.remove('burger')
    }
})