import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	const swiper = new Swiper('.news-raf__slider', {
		slidesPerView: 4,
		spaceBetween: 24,
		navigation: {
			nextEl: ".news-raf__btn-next",
			disabledClass: "news-raf__btn-next_disabled"
		}
	});

})();
