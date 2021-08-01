import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	const swiper = new Swiper('.h-news__slider', {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,
		navigation: {
			nextEl: ".h-news__btn-next",
			disabledClass: "h-news__btn-next_disabled"
		},
		breakpoints: {
			768: { slidesPerView: 4 },
			640: { slidesPerView: 3 },
			360: { slidesPerView: 2 }
		}
	});

})();
