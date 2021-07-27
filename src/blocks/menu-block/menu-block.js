(() => {

	$('.menu-block__item').on('mouseover', function(e) {

		$(this)
			.parent()
			.find('.menu-block__side')
			.hide()
			.end()
			.end()
			.find('.menu-block__side')
			.css({'display':'flex'});
	})

})();
