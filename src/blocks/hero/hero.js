import Swiper, { Pagination, Autoplay } from 'swiper/core';
Swiper.use([Pagination, Autoplay]);

(() => {
	const swiper = new Swiper('.hero__slider', {
		loop: true,
		speed: 800,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.hero__slider-navi',
			clickable: true,
			bulletClass: 'hero__slider-dot',
			bulletActiveClass: 'hero__slider-dot_active',
			bulletElement: 'span'
		},
		on: {
			autoplay: function(e) {
				// console.log(e.passedParams.autoplay.delay);
			}
		}
	});

})();