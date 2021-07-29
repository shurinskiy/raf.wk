import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {
	let $shell = $('.navi');
	let $toggle = $('.header__toggle-btn');

	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('opened');
		$shell.toggleClass('opened');

		if($shell.hasClass('opened')) {
			// $menu.removeAttr('style');
			disablePageScroll();
			return;
		}

		enablePageScroll();
	});

	$(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.navi')) {
			e.preventDefault();
			$toggle.toggleClass('opened');
			$shell.toggleClass('opened');
			// $menu.removeAttr('style');
			enablePageScroll();
		}
	});

})();