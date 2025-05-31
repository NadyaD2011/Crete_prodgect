/******/ (() => { // webpackBootstrap
/*!******************!*\
  !*** ./index.js ***!
  \******************/
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.header__text-field');
    const iconField = document.querySelector('.header__search');
    
    const header = document.querySelector('.header');
    const widthSite = document.documentElement.clientWidth;
    const heightSite = document.documentElement.clientHeight;

    const burgerDiv = document.querySelector('.header__top .header__burger');
    const logo = document.querySelector('.header__top .header__logo');
    const menuDiv = document.querySelector('.header__mobile');
    const crossButton = document.querySelector('.header__close-btn');
    const body = document.querySelector('body');

    iconField.addEventListener('click', function() {
        inputField.classList.toggle('active');
    });

    function closeBurger(){
        menuDiv.classList.remove('active');
        logo.classList.remove('active');
    }

    function openBurger(){
        menuDiv.classList.add('active');
        logo.classList.add('active');
        body.classList.add('active');
        document.addEventListener('click', (e) => {
            const withinMenu = e.composedPath().includes(menuDiv);
            const withinBurger = e.composedPath().includes(burgerDiv);
         
            if ( !withinMenu && !withinBurger) {
                closeBurger();
            }
        })
    };

    crossButton.addEventListener('click', closeBurger);

    burgerDiv.addEventListener('click', openBurger);


    if (widthSite >= 1024){
        let lastscroll = 0;
        
        function changeHeader(){
            let top = document.documentElement.scrollTop;

            if (lastscroll > top){
                header.style.top = "0px";
            }
            else if (window.pageYOffset > 200){
                header.style.top = `-${heightSite}px`;
            }

            lastscroll = top;
        }

        window.onscroll = changeHeader;
    }
})
/******/ })()
;
//# sourceMappingURL=index.22e958a2f1cf687c2cea.js.map