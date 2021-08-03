(() => {

	$('.navi__search').on('click', function(e) {
		let $input = $(this).find('.navi__search-inp');
		let width = parseInt($input.css('width'));
		
		$input.trigger('focus');
		if (e.target.type == 'submit' && width < 50) {
			return false;
		}
	});

	let $shell = $('.navi');
	let $submenu = $shell.find('[class$=__submenu]');
	let $links = $('.menu-1').add('.menu-2__item_haschild');

	$shell.on('click', '.menu-1:not(.opened), .menu-2__item_haschild:not(.opened)', function(e) {
		if ($shell.css('position') == 'fixed') {
			e.preventDefault();
			let $self = $(this);
			
			// $submenu.removeAttr('style');
			$submenu.slideUp();
			$links.removeClass('opened');
			$self
				.addClass('opened')
				.find('[class$=__submenu]')
				.slideDown();
		}
	});

})();
