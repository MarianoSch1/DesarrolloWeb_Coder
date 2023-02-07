var swiper = new Swiper(".slideContent", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    gragCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dinamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints:{
        0: {
            slidesPerView: 1,
        },        
        560: {
            slidesPerView: 2,
        },        
        769: {
            slidesPerView: 3,
        },        
        950: {
            slidesPerView: 4,
        },
    },
  });
