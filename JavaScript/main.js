const hamMeny = document.querySelector('.ham-meny');

const offScreenMeny = document.querySelector('.off-screen-meny');

hamMeny.addEventListener('click', () => {
    hamMeny.classList.toggle('active');
    offScreenMeny.classList.toggle('active')
})