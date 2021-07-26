import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	const swiper = new Swiper('.news__slider', {
		slidesPerView: 4,
		spaceBetween: 24,
		navigation: {
			nextEl: ".news__btn-next",
			disabledClass: "news__btn-next_disabled"
		}
	});

})();
