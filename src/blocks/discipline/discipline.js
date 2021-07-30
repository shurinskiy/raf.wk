(() => {

	let $items = $('.discipline').find('.discipline__item');

	$('.discipline').on('click', '.discipline__all', function(e) {
		e.preventDefault();

		$(this)
			.parents('.discipline')
			.find('.discipline__item')
			.fadeIn()
			.end().end()
			.remove();
	});

})();
