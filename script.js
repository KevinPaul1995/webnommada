const images = ['fotos/10.jpg', 'fotos/12.webp', 'fotos/13.webp', 'fotos/11.jpg'];
let currentIndex = 0;
const heroImg = document.getElementById('hero-img');

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImg.src = images[currentIndex];
}, 3000);

// Script para manejar la clase active en los enlaces de navegación
const navLinks = document.querySelectorAll('.header-nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});
