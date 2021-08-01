import Swiper, { Pagination } from 'swiper/core';
Swiper.use([Pagination]);

(() => {
	const swiper = new Swiper('.hero__slider', {
		loop: true,
		pagination: {
			el: '.hero__slider-navi',
			clickable: true,
			bulletClass: 'hero__slider-dot',
			bulletActiveClass: 'hero__slider-dot_active'
		}
	});

})();
