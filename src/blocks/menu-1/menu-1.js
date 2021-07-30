(() => {

	$('.menu-1__item').on('mouseover', function(e) {
		let $self = $(this);

		if ($self.parents('.menu-1__wrapper').css('position') == 'relative') {
			$self
				.parent()
				.find('.menu-1__side')
				.hide()
				.end()
				.end()
				.find('.menu-1__side')
				.css({'display':'flex'});
		}
	})

})();
