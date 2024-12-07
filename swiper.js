const swiper = new Swiper('.swiper-container', {
    loop: true, // Loop through slides
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 30, // Add space between slides
    breakpoints: {
    768: {
        slidesPerView: 2, // Show 2 slides on tablets
    },
    1024: {
        slidesPerView: 3, // Show 3 slides on larger screens
    },
    },
});