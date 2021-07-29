import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	const swiper = new Swiper('.news__slider', {
		slidesPerView: 1,
		spaceBetween: 24,
		navigation: {
			nextEl: ".news__btn-next",
			disabledClass: "news__btn-next_disabled"
		},
		breakpoints: {
			768: { slidesPerView: 4 },
			640: { slidesPerView: 3 },
			360: { slidesPerView: 2 }
		}
	});

})();
