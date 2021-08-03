(() => {

	$('.docs__set_tohide').on('click', '.docs__title', function(e) {
		$(this)
			.parent('.docs__set')
			.toggleClass('opened')
			.end()
			.next('.docs__block')
			.slideToggle();
	})

})();
