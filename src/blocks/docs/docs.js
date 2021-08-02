(() => {

	$('.docs__set').on('click', '.docs__title', function(e) {
		$(this)
			.parent('.docs__set')
			.toggleClass('opened')
			.end()
			.next('.docs__hidden')
			.slideToggle();
	})

})();
