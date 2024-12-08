const swiper = new Swiper('.swiper-container', {
    loop: true, // Loop through slides
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 80, // Add space between slides
    breakpoints: {
    768: {
        slidesPerView: 2, // Show 2 slides on tablets
    },
    },
});