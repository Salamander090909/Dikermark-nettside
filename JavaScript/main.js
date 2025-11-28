const ham = document.querySelector('.ham-meny');
const menu = document.querySelector('.off-screen-meny');

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    menu.classList.toggle('active'); // viktig
});
