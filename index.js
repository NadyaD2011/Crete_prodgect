document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.header__text-field');
    const iconField = document.querySelector('.header__search');
    
    const headerDiv = document.querySelector('.header');
    const widthSite = document.documentElement.clientWidth;
    const heightSite = document.documentElement.clientHeight;

    iconField.addEventListener('click', function() {
        inputField.classList.toggle('active');
    });

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