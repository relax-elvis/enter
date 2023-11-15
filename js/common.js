//= ../../node_modules/bootstrap/js/dist/index.js
'use strict';
// $(function() {
//    var pathLogo = $('header .logotype picture source').attr('srcset');
//    var pathLogoWhite = $('header .logotype picture img').attr('src');
// 	$(document).ready(function() {
// 		if($(window).width() < 991 && $(window).width() > 675) {
// 			var block = $('.move-mobile-logo');
// 			var gran = $('.move-to-logotype');
// 			/*$('.move-to-logotype').remove();
// 			$('.move-mobile-logo').remove();
// 			$('.footer-section__bottom .after-block').after(block);
// 			$('.footer-section__bottom .after-block').append(gran);*/

// 			var btn = $('header .btn');
// 			$('header .btn').remove();
// 			$('header .d-lg-none').after(btn);
// 			$('header .navbar-nav + .btn').removeClass('d-md-none d-none');
// 		}
// 		///
// 		if($(this).scrollTop() > 100) {
// 			$('header').addClass("fixed-bg");
// 		}
// 		$(document).scroll(function(e) {
// 			if($(this).scrollTop() > 100) {
// 				$('header').addClass("fixed-bg");
// 				$('header .logotype picture source').attr('srcset', pathLogoWhite);
// 			} else {
// 				$('header').removeClass("fixed-bg");
// 				$('header .logotype picture source').attr('srcset', pathLogo);
// 			}
// 		});
		
// 		if(document.cookie.match('accept')) {
// 			$('#cookie').fadeOut(300);
// 			$('footer').removeClass('cookie');
// 		} else {
// 			setTimeout(function(){$('#cookie').fadeIn(300);}, 2000);
// 		}

// 		// Custom JS
// 		$('.navbar-nav a[href^="#"], header button.btn, .informate .btn, .bg-banner .btn').click(function(e) {
// 			e.preventDefault();
// 			var __this;
// 			if($(this)[0].nodeName == 'BUTTON') {
// 				__this = '#' + $(this).attr('data-href');
// 			} else {
// 				__this = $(this).attr('href');
// 			}
// 			if($('body').find(__this).length == false) return false;
// 			$('html, body').animate({scrollTop: $(__this).offset().top+'px'});
// 			__this = null;
// 			return false;
// 		});

// 		// $('.block-video-btn .btn-video, .block-video-btn .btn-video-second').click(function(e) {
// 		// 	e.preventDefault();
// 		// 	$('#video-gallery').lightGallery({
// 		// 		autoplay: true,
// 		// 	}); 
// 		// 	$('#video-gallery1').lightGallery({
// 		// 		autoplay: true,
// 		// 	}); 
// 		// });
// 		function initGallery(id) {
// 			$(id).lightGallery({
// 				autoplay: true,
// 			});
// 		};
// 		initGallery('#video-gallery');
// 		initGallery('#video-gallery1');

// 		$('.block-video-btn').on('click', '.btn-video, .btn-video-second', function(e) {
// 			e.preventDefault();
// 			initGallery('#video-gallery');
// 			initGallery('#video-gallery1');
// 		});
			
// 		$("#cookie .btn-accetp-cookie").click(function(e) {
// 			if(document.cookie.match('accept')) {
// 				$('#cookie').fadeOut(300);
// 				$('footer').removeClass('cookie');
// 			} else {
// 				document.cookie = 'accept=true';
// 				$('#cookie').fadeOut(300);
// 				$('footer').removeClass('cookie');
// 			}
// 		});
// 	});

// 	// on table and mobile 
// 	if($(window).width() < 991) {
// 		var formTop = $('#form').offset().top - $('#form').outerHeight();
// 		function f_scroll() {

// 		   last_scroll_top = 0;
// 		   top_display = 100;
// 		   $(window).off('scroll')
// 		   $(window).on('scroll', function(){

// 			   var scroll_top = $(this).scrollTop();

// 			   if ((scroll_top > last_scroll_top) && (scroll_top >top_display)) {
// 				   //downscroll code
// 				   $('.js-header').addClass('has-transform-header');
// 				   //$('.js-footer').addClass('has-transform-footer');
// 				   if(scroll_top <= formTop) {
// 				   		console.log('1');
// 				   		$('.js-footer').removeClass('has-transform-footer');
// 				   } else {
// 				   		console.log('2');
// 				   		$('.js-footer').addClass('has-transform-footer');
// 				   }
				   
// 			   } else {
// 					$('.js-header').removeClass('has-transform-header');
// 			   		if(scroll_top >= formTop) {
// 			   			return false;
// 				   } else {
// 				   		$('.js-footer').removeClass('has-transform-footer');
// 				   }
// 				   //$('header .logotype picture source').attr('srcset', pathLogoWhite);
// 				   if(scroll_top == 0){
// 						//$('header .logotype picture source').attr('srcset', pathLogo);
// 				   }
// 			   }

// 			   last_scroll_top = scroll_top;
// 		   });

// 		   /*actions botons message and call*/ 

		   
// 		   var $window = $(window);
// 		   var maxWidth = 600; /* <--- Custom size here*/

// 		   $window.on('scroll resize', function(){

// 			   if ($(window).width() <= maxWidth) {  
// 				   $('.js-input-focus').on('focusin', function() {
// 					   $('.js-header').addClass('has-transform-header');
// 					   $('.js-footer').addClass('has-transform-footer');
// 				   });

// 				   $('.js-input-focus').on('focusout', function(){
// 					   $('.js-header').removeClass('has-transform-header');
// 					   $('.js-footer').removeClass('has-transform-footer');
// 				   });


// 			   }   

// 		   });

// 		}
// 		f_scroll();
// 	}

// });

$(document).ready(function() {

	var formTop = $('#tipologia').offset().top - $('#tipologia').outerHeight();
	function f_scroll() {

	   last_scroll_top = 0;
	   top_display = 100;
	   $(window).off('scroll')
	   $(window).on('scroll', function(){

		   var scroll_top = $(this).scrollTop();

		   if ((scroll_top > last_scroll_top) && (scroll_top >top_display)) {
			   //downscroll code
			   $('.js-header').addClass('has-transform-header');
			   //$('.js-footer').addClass('has-transform-footer');
			   // if(scroll_top <= formTop) {
			   // 		console.log('1');
			   // 		$('.js-footer').removeClass('has-transform-footer');
			   // } else {
			   // 		console.log('2');
			   // 		$('.js-footer').addClass('has-transform-footer');
			   // }
			   
		   } else {
				$('.js-header').removeClass('has-transform-header');
		   		if(scroll_top >= formTop) {
		   			return false;
			   } else {
			   		$('.js-footer').removeClass('has-transform-footer');
			   }
			   //$('header .logotype picture source').attr('srcset', pathLogoWhite);
			   if(scroll_top == 0){
					//$('header .logotype picture source').attr('srcset', pathLogo);
			   }
		   }

		   last_scroll_top = scroll_top;
	   });

	   /*actions botons message and call*/ 

	   
	   // var $window = $(window);
	   // var maxWidth = 600; /* <--- Custom size here*/

	   // $window.on('scroll resize', function(){

		  //  if ($(window).width() <= maxWidth) {  
			 //   $('.js-input-focus').on('focusin', function() {
				//    $('.js-header').addClass('has-transform-header');
				//    $('.js-footer').addClass('has-transform-footer');
			 //   });

			 //   $('.js-input-focus').on('focusout', function(){
				//    $('.js-header').removeClass('has-transform-header');
				//    $('.js-footer').removeClass('has-transform-footer');
			 //   });


		  //  }   

	   // });

	}
	f_scroll();

	const headerMenuBtn = document.querySelector('header .mobile_block .btn-mobile');
	const headerMenu = document.querySelector('header');
	headerMenuBtn.addEventListener('click', function() {
		if(this.classList.contains('active')) {
			this.classList.remove('active');
			headerMenu.classList.remove('fixed');
			document.body.style = 'overflow: auto';
		} else {
			this.classList.add('active');
			headerMenu.classList.add('fixed');
			document.body.style = 'overflow: hidden';
		}
	});

	if($(this).scrollTop() > 100) {
		$('header').addClass("fixed-menu");
	}
	$(document).scroll(function(e) {
		if($(this).scrollTop() > 100) {
			$('header').addClass("fixed-menu");
		} else {
			$('header').removeClass("fixed-menu");
		}
	});

	$('a[href^="#"]').click(function(e) {
		e.preventDefault();
		var __this;
		if($(this)[0].nodeName == 'BUTTON') {
			__this = '#' + $(this).attr('data-href');
		} else {
			__this = $(this).attr('href');
		}
		if($('body').find(__this).length == false) return false;
		$('html, body').animate({scrollTop: $(__this).offset().top+'px'});

		headerMenuBtn.classList.remove('active');
		headerMenu.classList.remove('fixed');
		document.body.style = 'overflow: auto';

		__this = null;
		return false;
	});

	// $('.ow_tab .item .tab-title').click(function() {
	// 	const _this = $(this);
	// 	if(_this.hasClass('active')) {
	// 		_this.parents('.ow_tab').find('.tab-title').removeClass('active');
	// 		_this.parents('.ow_tab').find('.tab-title .icon-plus').text('+');
	// 	} else {
	// 		_this.parents('.ow_tab').find('.tab-title').removeClass('active');
	// 		_this.parents('.ow_tab').find('.tab-title .icon-plus').text('+');
	// 		_this.find('.icon-plus').text('-');
	// 		_this.addClass('active');
	// 	}
	// });

	// lightGallery(document.querySelector('.ow_map .map'), {
	// 	thumbnail: true,
	// });

	// $('.ow_photo__slider').slick({
	// 	dots: true,
	// 	infinite: false,
	// 	speed: 300,
	// 	slidesToShow: 1,
	// 	centerMode: false,
	// 	variableWidth: true,
	// 	centerPadding: '13px',
	// 	responsive: [
	// 		{
	// 			breakpoint: 1520,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				controls: true
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 3,
	// 			}
	// 		}
	// 	]
	// });

	// const list = $('.ow_photo__slider .link-thumb');
	// for(let i = 0; i < list.length; i++) {
	// 	let item = list[i];
	// 	$(list[i]).parents('a').attr('href', $(list[i]).attr('href'));
	// }

	// lightGallery(document.querySelector('.ow_photo__slider .slick-track'), {
	// 	thumbnail: true,
	// 	closable: true,
	// 	plugins: [lgZoom, lgThumbnail],
	// 	mobileSettings: {
	// 		controls: false,
	// 		showCloseIcon: true,
	// 		download: false,
	// 	},
	// });

	// document.querySelector('.ow_photo__slider .slick-track').addEventListener('click', function(){ 
	// 	setTimeout(function() {
	// 		const images = document.querySelector('.lg-outer.lg-grab .lg-current img');
	// 		const imagesTop = images.offsetTop;
	// 		const imagesHeight = images.offsetHeight;
	// 		document.querySelector('.lg-has-thumb .lg-toolbar + .lg-components').style.top = parseInt(imagesTop + imagesHeight + 60) + 'px';
	// 	}, 500);
	// })

});