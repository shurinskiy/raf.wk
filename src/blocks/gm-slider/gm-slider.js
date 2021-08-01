import Swiper, { Pagination } from 'swiper/core';
Swiper.use([Pagination]);

(() => {
	const swiper = new Swiper('.gm-slider', {
		loop: true,

		pagination: {
			el: '.gm-slider__navi',
			clickable: true,
			bulletClass: 'gm-slider__dot',
			bulletActiveClass: 'gm-slider__dot_active'
		}
	});
})();
