(() => {

	$('.navi__search').on('click', function(e) {
		let $input = $(this).find('.navi__search-inp');
		let width = parseInt($input.css('width'));
		
		$input.trigger('focus');
		if (e.target.type == 'submit' && width < 50) {
			return false;
		}
	});

	let $navi = $('.navi__inner');
	let $submenu = $navi.find('[class$=__submenu]');
	let $links = $('.menu-1').add('.menu-2__item_haschild');

	$navi.on('click', '.menu-1:not(.opened), .menu-2__item_haschild:not(.opened)', function(e) {
		e.preventDefault();
		let $self = $(this);
		
		$submenu.removeAttr('style');
		$links.removeClass('opened');
		$self
			.addClass('opened')
			.find('[class$=__submenu]')
			.slideDown();

	});

})();
