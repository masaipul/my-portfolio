const themeBtn = document.getElementById('theme-btn');
const body = document.documentElement;
const icon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Animasi Fade-in saat scroll (Opsional)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 10%';
    } else {
        nav.style.padding = '2rem 10%';
    }
});
