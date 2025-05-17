document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.header__text-field');
    const iconField = document.querySelector('.header__search');

    console.log(inputField, iconField)

    iconField.addEventListener('click', function() {
        inputField.classList.toggle('active');
    });
})