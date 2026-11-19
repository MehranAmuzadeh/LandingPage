
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('open');
});


document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('open');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        toggle.classList.remove('active');
        menu.classList.remove('open');
    }
});
