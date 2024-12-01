function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => (slide.style.display = 'none'));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => (slide.style.display = 'none'));
    slideIndex += n;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;
    slides[slideIndex - 1].style.display = 'block';
}
