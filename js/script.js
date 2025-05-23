const menuBtn = document.querySelector('#menu-btn');
 const navbar = document.querySelector('.navbar');
 
 menuBtn.addEventListener('click', () => {
     navbar.classList.toggle('active');
 });
 
 // Fechar menu hamburger ao clicar no link
 const navlinks = document.querySelectorAll('.navbar a');
 
 navlinks.forEach(link => {
     link.addEventListener('click', () => {
         navbar.classList.remove('active');
     });
 });
 
 // Slider de imagens no menu
 let currentslide = 0;
 const slides = document.querySelectorAll('.menu-image');  // Corrigido para '.menu-image'
 
 function changeSlide(direction) {
     slides[currentslide].classList.remove('active');
     currentslide = (currentslide + direction + slides.length) % slides.length;
     slides[currentslide].classList.add('active');
 }
 
 // Muda o slide a cada 5 segundos (autoplay)
 setInterval(() => {
     changeSlide(1);  // Mudei para "changeSlide" aqui
 }, 5000);
