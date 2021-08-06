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
			renderBullet: function (index, className) {
				let svg = '';

				if(!! this.passedParams.autoplay) {
					svg = `<svg height="20" width="20" style="animation-duration:${this.passedParams.autoplay.delay/1000}s;"><circle class="circle" cx="10" cy="10" r="9"/></svg>`;
				}
				return `<span class="${className}">${svg}</span>`;
			}
		}
	});
})();
