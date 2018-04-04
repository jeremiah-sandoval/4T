/** *************INIT JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1)USE STRICT
	2)On Load Function
	3)Ready Function
	4)Select Picker Call
	5)Resize Function
	6)Click Function
	7)Scroll Function
	8)Product owlCarousel Function
	9)Client owlCarousel Function
	10)Testimonials owlCarousel Function
	11)Team Carousal Function
	12)Journey Parallax Function
	13)Instagram Function
	14)MasonryPortfolio Function
	
 ** ***************************************/
	
	
	/******** USE STRICT *********/
    
	"use strict";
	var $ = jQuery.noConflict();

	
	/******** On Load Function *********/
	$(window).on('load', function(){
		
			
		$(".pre-loader").delay(1000).fadeOut("slow"); 
		
		$('.pre-loader').addClass('pre-out');
		$('.pre-loader-anim').addClass('pre-fade');
		$('.op-img').css("opacity", "0");
		
		$(".clients_block").mouseleave(function(){
			$(this).removeClass('hover');
		}); 
		
		$(".clients_block").mouseenter(function(){
			$(this).addClass('hover');
		});
		
		
	});

	
	/******** Ready Function *********/
	$(document).on('ready', function(){
		var height= $( window ).height();
		$(".full_banner").css("height" , height);
		$('.la-anim-1').addClass('la-animate');
		var wow = new WOW(
		{
		boxClass: 'wow', // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: false, // trigger animations on mobile devices (default is true)
		live: true // act on asynchronously loaded content (default is true)
		}
		);
		wow.init();
		
		// filter items on button click
		$('.portfolio-categories').on( 'click', 'li', function() {
		  var filterValue = $(this).attr('data-filter');
		  $('#work-masonry').isotope({ filter: filterValue });
		});
		
		
		// filter items on button click
		$('.portfolio-categories').on( 'click', 'li', function() {
			var filterValue = $(this).attr('data-filter');
			$('#equal-three-column').isotope({ filter: filterValue });
		});		
		
		$('.portfolio-categories li a').on('click', function(e) {
			$(".portfolio-categories li a").removeClass('active');
			$(this).addClass('active');
		});
		
		smoothScroll.init({
			offset: 90,
			speed: 1000,
			updateURL: false
		});
		
		
		
		jQuery('body').attr('data-spy', 'scroll').attr('data-target', '#nav-wrapper').attr('data-offset', '100');

		jQuery('a.scrollto').on('click', function ( ) {
			event.preventDefault();
			if (jQuery('.navbar-collapse').hasClass('in')) {
				jQuery('.navbar-collapse').removeClass('in').addClass('collapse');
			}
		});
		
		
		$(document).on('click', ".language_bar li" , function() {
			
			var index = $(this).index();
			
			if(index==0){
				$('.glob').removeClass('one').removeClass('two');
			}
			
			if(index==1){
				$('.glob').addClass('one').removeClass('two');
			}
			if(index==2){
				$('.glob').addClass('two').removeClass('one');
			}
		});
		
		MasonryPortfolio();	
	});
	
	
	/******** Select Picker Call *********/
	$('.selectpicker').selectpicker();
	
	
	
	/******** Resize Function *********/
	$(window).on( 'resize', function () {
		
		jQuery('[data-spy="scroll"]').each(function () {
			var $spy = jQuery(this).scrollspy('refresh');
		});
	});

	
	/******** Click Function *********/
	$(".play-button").on('click' , function(){
		$('video').prop("autoplay", true);
		$('.play-button').toggleClass('off');
	});
	var isClicked = false;
	jQuery('.panel-heading a').on('click' , function() {
		$('.panel-heading').removeClass('actives');
		$(this).parents('.panel-heading').addClass('actives');
		 isClicked = true;
	});

	$('.panel-heading a').on('click', function() {
		if (isClicked){
		$(this).parents('.panel-heading').toggleClass('act');
		}
	});
	
	
	
	/******** Scroll Function *********/
	jQuery(window).on('scroll' , function () {
		
		var enable_opacity, current_position, home_height;
		current_position = jQuery(document).scrollTop();
		enable_opacity = true; /* Change it to false to disable the slider opacity */
		
		if (enable_opacity === true) {
			home_height = jQuery('#home-section').height() + 450;
			jQuery('#home-section').css({opacity: (1 - current_position / home_height * 1.2)});
		}
		if (current_position >= 10) {
			jQuery('#nav-wrapper').addClass('menubgC');
		} else {
			jQuery('#nav-wrapper').removeClass('menubgC');
		}
		var top = $(window).scrollTop();
				
		if($('.case-intro').length > 0) {
			var o = $( ".case-intro" );
			var offset_0 = o.offset();
			if (top >= offset_0.top-105){ // assuming the position of your div.
				$(".float-navigation").css("position", "fixed").css("top", "100px");
				
			}else{
				$(".float-navigation").css("position", "relative").css("top", "0px");
			}
		}	
		
		if($('.case-challenge').length > 0) {
			var p = $( ".case-challenge" );
			var offset_1 = p.offset();
			if (top >= (offset_1.top-150)){ // assuming the position of your div.
				$(".chall").addClass("active");
			}else{
					
				$(".chall").removeClass("active");
			}
		}	
		
		if($('.case-approach').length > 0) {
			var q = $( ".case-approach" );
			var offset_2 = q.offset();
			if (top >= (offset_2.top-150)){ // assuming the position of your div.
				$(".appr").addClass("active");
				$(".chall").removeClass("active");
			}else{
			$(".appr").removeClass("active");
			}
		}	
		
		if($('.case-benefits').length > 0) {
			var r = $( ".case-benefits" );
			var offset_3 = r.offset();
			if (top >= (offset_3.top-150)){ // assuming the position of your div.
				$(".ben").addClass("active");
				$(".appr").removeClass("active");		
			}else{
				
			$(".ben").removeClass("active");
			}
		}	
		
		if($('.studies-about').length > 0) {
			var s = $( ".studies-about" );
			var offset_4 = s.offset();
			if (top >= offset_4.top-510){ // assuming the position of your div.
				$(".float-navigation").css("position", "absolute").css("top", "-400px");
			}
		}	
	});

	
	
	/******** Product owlCarousel Function *********/
	$('.clients2').owlCarousel({
		loop:true,
		autoplay:true,
		nav:true,
		dots:false,
		smartSpeed: 1500,
		margin:0,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			1280:{
				items:4
			},
			1024:{
				items:3
			},
			1550:{
				items:5
			}
		}
	});

	/******** Client owlCarousel Function *********/
	$('.clients3').owlCarousel({
	
		loop:false,
		autoplay:false,
		nav:true,
		dots:false,
		smartSpeed: 1500,
		margin:0,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			1280:{
				items:3
			},
			1024:{
				items:2
			},
			1550:{
				items:4
			}
		}
	});

	
	/******** Testimonials owlCarousel Function *********/
	$('.testimonials').owlCarousel({
		loop:true,
		autoplay:true,
		nav:true,
		dots:false,
		smartSpeed: 1500,
		margin:0,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	
	
	
	/******** Team Carousal Function *********/
	$('.team').owlCarousel({
		loop:false,
		autoplay:false,
		nav:false,
		dots:true,
		smartSpeed: 1500,
		margin:0,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	
	
	/******** Journey Parallax Function *********/
	if($("body").hasClass("journey")){

	if ($('.index_4')) {

		$('#parallaxBlock1').parallax("-10%", -0.1);
		$('#parallaxBlock2').parallax("10%", 0.1);
		$('#parallaxBlock3').parallax("-10%", -0.1);
		$('#parallaxBlock4').parallax("10%", 0.1);
	}
	}


	/******** Instagram Function 
	var userFeed = new Instafeed({    get: 'user',    userId: '623597756',    clientId: '02b47e1b98ce4f04adc271ffbd26611d',    accessToken: '623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72',    resolution: 'standard_resolution',    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',    sortBy: 'most-recent',    limit: 6,    links: false  });  userFeed.run();
*********/
 
 
	/******** MasonryPortfolio Function *********/
	function MasonryPortfolio() {	
	
		if( $('#portfolio-wrap').length > 0 ){	
		
			var $container = $('#portfolio');
			$container.isotope({
			  itemSelector: '.grid-item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click',function(){
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				/*$container.isotope({ filter: selector });		*/
				$container.isotope({ filter: selector });		
				return false;
			});
			
			
			$(document).scroll(function () {
				if($('.auto-construct').length > 0 ){
					var y = $(this).scrollTop();
					var t = $('#portfolio').offset().top + $('#portfolio').height() - window.innerHeight;
					if (y > t) {
						$('#portfolio').removeClass('auto-construct');
					} 
				}
			});
			
			$(window).on( 'resize', function () {
				
				var winWidth = window.innerWidth;
				columnNumb = 1;			
				var attr_col = $('#portfolio').attr('data-col');
					
				if (winWidth >= 1466) {
					
					//$('#portfolio-wrap').css( {width : 100  + '%'});
					$('#portfolio-wrap').css( {width : (winWidth-20)  + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : winWidth});			
					var portfolioWidth = $('#portfolio-wrap').width();
					var postWidth;
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 3;
						
					postWidth = Math.floor(portfolioWidth / columnNumb);
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth - 20 + 'px',
							height : postWidth * 0.948 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.no-gutter .grid-item').css( {
							width : postWidth  + 'px',
							height : postWidth * 0.9080  + 'px',
							margin : 0 + 'px' 
						});
						$('.grid-item.wide').css( { 
							width : postWidth * 2 - 20 + 'px'  
						});
						$('.no-gutter .grid-item.wide').css( { 
							width : postWidth * 2 + 'px'  
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.875 - 20 + 'px'  
						});
						$('.no-gutter .grid-item.tall').css( {
							height : postWidth * 1.820  + 'px'  
						});
						$('.grid-item.wide-tall').css( {
							width : postWidth * 2 - 25 + 'px',
							height : postWidth * 2 - 60 + 'px'  
						});
						$('.no-gutter .grid-item.wide-tall').css( {
							width : postWidth * 2 + 'px',
							height : postWidth * 1.5  + 'px'  
						});
						$('.grid-item.small').css( {
							height : postWidth * 2 - 60 + 'px'  
						});
						$('.no-gutter .grid-item.small').css( {
							height : postWidth * 0.588  + 'px'  
						});
					});
					
					
				} else if (winWidth >= 1024) {
					
					$('#portfolio-wrap').css( {width : (winWidth-20)  + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : winWidth});			
					var portfolioWidth = $('#portfolio-wrap').width();
								
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 3;
					
					postWidth = Math.floor(portfolioWidth / columnNumb);			
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth - 20 + 'px',
							height : postWidth * 0.948 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.no-gutter .grid-item').css( {
							width : postWidth  + 'px',
							height : postWidth * 0.9089  + 'px',
							margin : 0 + 'px' 
						});
						$('.grid-item.wide').css( { 
							width : postWidth * 2 - 20 + 'px'  
						});
						$('.no-gutter .grid-item.wide').css( { 
							width : postWidth * 2 + 'px'  
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.875 - 20 + 'px'  
						});
						$('.no-gutter .grid-item.tall').css( {
							height : postWidth * 1.820  + 'px'  
						});
						$('.grid-item.wide-tall').css( {
							width : postWidth * 2 - 25 + 'px',
							height : postWidth * 2 - 60 + 'px'  
						});
						$('.no-gutter .grid-item.wide-tall').css( {
							width : postWidth * 2 + 'px',
							height : postWidth * 1.815  + 'px'   
						});
					});
					
					
				} else if (winWidth >= 768) {
					
					$('#portfolio-wrap').css( {width : (winWidth-20)  + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : winWidth});			
					var portfolioWidth = $('#portfolio-wrap').width();
								
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 3;
					
					postWidth = Math.floor(portfolioWidth / columnNumb);			
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth - 20 + 'px',
							height : postWidth * 0.948 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.no-gutter .grid-item').css( {
							width : postWidth  + 'px',
							height : postWidth * 0.9089  + 'px',
							margin : 0 + 'px' 
						});
						$('.grid-item.wide').css( { 
							width : postWidth * 2 - 20 + 'px'  
						});
						$('.no-gutter .grid-item.wide').css( { 
							width : postWidth * 2 + 'px'  
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.875 - 20 + 'px'  
						});
						$('.no-gutter .grid-item.tall').css( {
							height : postWidth * 1.820  + 'px'  
						});
						$('.grid-item.wide-tall').css( {
							width : postWidth * 2 - 24 + 'px',
							height : postWidth * 2 - 50 + 'px'  
						});
						$('.no-gutter .grid-item.wide-tall').css( {
							width : postWidth * 2 + 'px',
							height : postWidth * 1.815  + 'px'  
						});
					});
					
					
				} else if (winWidth < 767 && winWidth > 481) {
					
					$('#portfolio-wrap').css( {width : (winWidth-20)  + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : winWidth});
					
					var portfolioWidth = $('#portfolio-wrap').width(),
					
					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb);			
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth - 20 + 'px',
							height : postWidth * 0.948 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.no-gutter .grid-item').css( {
							width : postWidth  + 'px',
							height : postWidth * 0.75  + 'px',
							margin : 0 + 'px' 
						});
						$('.grid-item.wide').css( { 
							width : postWidth * 2 - 20 + 'px'  
						});
						$('.no-gutter .grid-item.wide').css( { 
							width : postWidth * 2 + 'px'  
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.5 - 20 + 'px'  
						});
						$('.no-gutter .grid-item.tall').css( {
							height : postWidth * 1.5  + 'px'  
						});
						$('.grid-item.wide-tall').css( {
							width : postWidth * 2 - 20 + 'px',
							height : postWidth * 1.5 - 20 + 'px'  
						});
						$('.no-gutter .grid-item.wide-tall').css( {
							width : postWidth * 2 + 'px',
							height : postWidth * 1.5  + 'px'  
						});
					});
					
					
				} else if (winWidth <= 480) {
					$('#portfolio-wrap').css( {width : (winWidth-20)  + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : winWidth});
					
					var portfolioWidth = $('#portfolio-wrap').width(),
					
					columnNumb = 1;
					postWidth = Math.floor(portfolioWidth / columnNumb);			
					$container.find('.grid-item').each(function () { 
						$('.grid-item').css( { 
							width : postWidth  + 'px',
							height : postWidth * 0.75 + 'px',
							margin : 10 + 'px' + 0 + 'px' 
						});
						$('.no-gutter .grid-item').css( {
							width : postWidth  + 'px',
							height : postWidth * 0.75  + 'px',
							margin : 0 + 'px' 
						});
						$('.grid-item.wide').css( { 
							width : postWidth + 'px'  
						});
						$('.no-gutter .grid-item.wide').css( { 
							width : postWidth + 'px'  
						});
						$('.grid-item.tall').css( {
							height : postWidth * 1.5 + 'px'  
						});
						$('.no-gutter .grid-item.tall').css( {
							height : postWidth * 1.5  + 'px'  
						});
						$('.grid-item.wide-tall').css( {
							width : postWidth + 'px',
							height : postWidth * 0.75 + 'px'  
						});
						$('.no-gutter .grid-item.wide-tall').css( {
							width : postWidth + 'px',
							height : postWidth * 0.75  + 'px'  
						});
					});
	
				}
				return columnNumb;
				
			
			}).resize();
		
			$("#all").click();	
			
			
			}
	}/*End MasonryPortfolio*/
	/* PreetyPhoto Gallery Lightbox */
	$("a[data-gal^='prettyPhoto']").prettyPhoto();
	
	$("#portfolio:first a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false});
	$("#portfolio:gt(0) a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
	
	/* Lightbox for Highlights Gallery	*/
	$('.video-popup-block .slide-title').magnificPopup({
		delegate: 'a',
		/*type: 'image',*/
		type: 'iframe',
		tLoading: 'Loading image #%curr%...',
		/*mainClass: 'mfp-img-mobile',*/
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',				
		}
	});
	