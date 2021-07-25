import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	const swiper = new Swiper('.news-raf__slider', {
		slidesPerView: 4,
		spaceBetween: 24,
	});

})();
