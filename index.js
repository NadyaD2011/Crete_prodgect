document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.header__text-field');
    const iconField = document.querySelector('.header__search');
    
    const headerDiv = document.querySelector('.header');
    const widthSite = document.documentElement.clientWidth;
    const heightSite = document.documentElement.clientHeight;

    const burgerDiv = document.querySelector('.header__top .header__burger');
    const logo = document.querySelector('.header__top .header__logo');
    const menuDiv = document.querySelector('.header__mobile');
    const crossButton = document.querySelector('.header__close-btn');

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
            let pageY = window.pageYOffset;

            if (lastscroll > pageY){
                headerDiv.style.top = "0px";
            }
            else if (pageY >= 200){
                headerDiv.style.top = `${-heightSite}px`;
            }

            lastscroll = pageY 
        }

        window.addEventListener('scroll', changeHeader);
    }
})