const swiperComments = new Swiper('.swiper', {
  // spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
  speed: 1000,
  allowTouchMove: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight) {
    header.classList.add('_scrolled');
  } else {
    header.classList.remove('_scrolled');
  }
});
