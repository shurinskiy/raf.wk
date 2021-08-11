import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	const swiper = new Swiper('.h-news__slider', {
		slidesPerView: 1,
		spaceBetween: 16,
		loop: true,
		navigation: {
			nextEl: ".h-news__btn-next",
			disabledClass: "h-news__btn-next_disabled"
		},
		breakpoints: {
			960: { 
				slidesPerView: 4,
				spaceBetween: 24 
			},
			780: { 
				slidesPerView: 4,
				spaceBetween: 24 
			},
			640: { 
				slidesPerView: 3,
				spaceBetween: 16
			},
			360: { 
				slidesPerView: 2,
				spaceBetween: 16
			}
		}
	});
})();
