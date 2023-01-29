const closeMenuBtn = document.querySelector('.close-icon');
const openMenuBtn = document.querySelector('.open-icon');
const dropdownMenu = document.querySelector('.navbar-items');

const toggleBtn = document.querySelector('.toggle-icon');


toggleBtn.addEventListener('click', function () {
    console.log('hej');
    openMenuBtn.classList.toggle('show');
    closeMenuBtn.classList.toggle('show');

    dropdownMenu.classList.toggle('show');
})