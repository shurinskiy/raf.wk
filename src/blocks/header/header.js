import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {
	let $shell = $('.navi');
	let $toggle = $('.header__toggle-btn');
	let $submenu = $shell.find('[class$=__submenu]');
	let $links = $shell.find('.menu-1').add('.menu-2__item_haschild');

	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('opened');
		$shell.toggleClass('opened');

		if($shell.hasClass('opened')) {
			$submenu.removeAttr('style');
			$links.removeClass('opened');
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
			$submenu.removeAttr('style');
			$links.removeClass('opened');
			enablePageScroll();
		}
	});

	$('.header__search-inp').on('focus', function(e) {
		$(this).parent('.header__search').css({'border-color':'#3270CA'});
	}).on('focusout', function(e) {
		$(this).parent('.header__search').removeAttr('style');
	})

})();