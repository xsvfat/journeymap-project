// JavaScript Document
var main = function (){
	"use strict";
	
	$('.main-gallery').flickity({
		  // options
		 // cellAlign: 'left',
		  contain: true,
		  width: '100%',
		  margin:'0px',
		  position:'absolute',
		  cellAlign: 'center',
		  padding:'0px'
		});
		
	var $gallery = $('.main-gallery').flickity();
	
	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
	
	var middleSections = $('.section1subsection1, .section1subsection2, .section1subsection3, .section1subsection4, .section1subsection5, .section2subsection1, .section2subsection2,.section2subsection3,.section2subsection4,.section3subsection1,.section3subsection2,.section4subsection1,.section4subsection2, .section5subsection1, .section5subsection2,.section5subsection3');
	
	
	var go1fromLeft = function(){
	
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section2').hasClass('active_top') ||
		$('.section3').hasClass('active_top') ||
		$('.section4').hasClass('active_top') ||
		$('.section5').hasClass('active_top') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		
	 
	 	$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().show() ;
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub5').children().show();
		$('.main1 .sub5').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.main2').children().hide() ;
		$('.main3').children().hide() ;
		$('.main4').children().hide() ;
		$('.main5').children().hide() ;
		$('.startPage').children().hide();
		/*adds active_top class to top buttons*/
		$('.section1').addClass('active_top');
		$('.section2, .section3, .section4 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section1subsection5').addClass('active_middle');
		$gallery.flickity( 'select', 0 );		
	
	};
	
	var go2fromLeft = function(){
			$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section3').hasClass('active_top') ||
		$('.section4').hasClass('active_top') ||
		$('.section5').hasClass('active_top') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		

		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().show() ;
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub4').children().show();
		$('.main2 .sub4').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.startPage').children().hide();
		$('.main3').children().hide() ;
		$('.main4').children().hide() ;
		$('.main5').children().hide() ;
		/*adds active_top class to top buttons*/
		$('.section2').addClass('active_top');
		$('.section1, .section3, .section4 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section2subsection4').addClass('active_middle');
	

	
		$gallery.flickity( 'select', 1 );	
	};
	var go3fromLeft = function(){
		
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section4').hasClass('active_top') ||
		$('.section5').hasClass('active_top') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		
		
		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().hide() ;
		$('.main3').children().show() ;
		$('.main3 .sub_sub_bubbles').hide();
		$('.main3 .sub2').children().show();
		$('.main3 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.main4').children().hide() ;
		$('.main5').children().hide() ;
		$('.startPage').children().hide();
		/*adds active_top class to top buttons*/
		$('.section3').addClass('active_top');
		$('.section2, .section1, .section4 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section3subsection2').addClass('active_middle');
		
			
		$gallery.flickity( 'select', 2 );
	};
	var go4_2fromLeft = function(){
		
					
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section5').hasClass('active_top') ){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		
		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().hide() ;
		$('.main3').children().hide() ;
		$('.main4').children().show() ;
		$('.main4 .sub_sub_bubbles').hide();
		$('.main4 .sub2').children().show();
		$('.main4 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.startPage').children().hide();
		$('.main5').children().hide() ;
		/*adds active_top class to top buttons*/
		$('.section4').addClass('active_top');
		$('.section2, .section1, .section3 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section4subsection2').addClass('active_middle');
		
		
		$gallery.flickity( 'select', 3 );
	};
	var go1_1fromLeft = function(){
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
			
		
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if($('.section1subsection2').hasClass('active_middle') ||
		$('.section1subsection3').hasClass('active_middle') ||
		$('.section1subsection4').hasClass('active_middle')||
		$('.section1subsection5').hasClass('active_middle')
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$('.section1subsection1').addClass('active_middle');

	};
	var go2_1fromLeft = function(){
		
				$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main2 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if( $('.section2subsection2').hasClass('active_middle') ||
		$('.section2subsection3').hasClass('active_middle') ||
		$('.section2subsection4').hasClass('active_middle')
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
			

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$('.section2subsection1').addClass('active_middle');
	};
	
	var go3_1fromLeft = function(){
		
			$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
			
		$('.main3 .sub_sub_bubbles').hide();
		$('.main3 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main3 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if( $('.section3subsection2').hasClass('active_middle') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$('.section3subsection1').addClass('active_middle');
	};
	
	var go4_1fromLeft = function(){
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main4 .sub_sub_bubbles').hide();
		$('.main4 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main4 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if( $('.section4subsection2').hasClass('active_middle') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$('.section4subsection1').addClass('active_middle');
	};
	
	var go5_1fromLeft = function(){
			$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main5 .sub_sub_bubbles').hide();
		$('.main5 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main5 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if( $('.section5subsection2').hasClass('active_middle')||
		$('.section5subsection3').hasClass('active_middle')  
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$('.section5subsection1').addClass('active_middle');
	};
	
	
	
	var go1_1 = function(){

		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
			
		
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if($('.section1subsection2').hasClass('active_middle') ||
		$('.section1subsection3').hasClass('active_middle') ||
		$('.section1subsection4').hasClass('active_middle')||
		$('.section1subsection5').hasClass('active_middle')
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}

		/*Adds active class and removes active class from siblings.*/
		middleSections.removeClass('active_middle');	
		$('.section1subsection1').addClass('active_middle');
	
		
		
	};
	
	var go1_2 = function(){
	$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
		
		if($('.section1subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
	
		/*Adds active class and removes active class from siblings.*/
		middleSections.removeClass('active_middle');	
		$('.section1subsection2').addClass('active_middle');

		
		
	};
	
	var go1_3 = function(){
	$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
	$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub3').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub3').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section2, .section4 , .section5').css('background-color','none');
		
		if($('.section1subsection1').hasClass('active_middle') || 
		$('.section1subsection2').hasClass('active_middle') ){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		/*Adds active class and removes active class from siblings. */
			middleSections.removeClass('active_middle');	
		$('.section1subsection3').addClass('active_middle');
		
		
		
	};
	
	var go1_4 = function(){
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub4').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub4').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section2 , .section5').css('background-color','none');
		
		
		if($('.section1subsection1').hasClass('active_middle') || 
		$('.section1subsection2').hasClass('active_middle') ||
		$('.section1subsection3').hasClass('active_middle')
		){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		/*Adds active class and removes active class from siblings.*/
		middleSections.removeClass('active_middle');	
		$('.section1subsection4').addClass('active_middle');

		
		
	};
	
	var go1_5 = function(){
			
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub5').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub5').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section2').css('background-color','none');
		
		if($('.section1subsection1').hasClass('active_middle') || 
		$('.section1subsection2').hasClass('active_middle') ||
		$('.section1subsection3').hasClass('active_middle') ||
		$('.section1subsection4').hasClass('active_middle')
		){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
	
		/*Adds active class and removes active class from siblings.*/
		middleSections.removeClass('active_middle');	
		$('.section1subsection5').addClass('active_middle');
		
		
	};
	
	var go2_1 = function(){
	
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section3').hasClass('active_top') ||
		$('.section4').hasClass('active_top') ||
		$('.section5').hasClass('active_top') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		

		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().show() ;
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub1').children().show();
		$('.main2 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.startPage').children().hide();
		$('.main3').children().hide() ;
		$('.main4').children().hide() ;
		$('.main5').children().hide() ;
		/*adds active_top class to top buttons*/
		$('.section2').addClass('active_top');
		$('.section1, .section3, .section4 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section2subsection1').addClass('active_middle');
	
		$gallery.flickity( 'select', 1 );	
		
	};
	
	var go2_2 = function(){
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main2 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
		if($('.section2subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings.*/
		middleSections.removeClass('active_middle');	
		$('.section2subsection2').addClass('active_middle');
		
		
	};
	
	var go2_3 = function(){
			
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub3').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main2 .sub3').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section2, .section4 , .section5').css('background-color','none');
		
		if($('.section2subsection1').hasClass('active_middle')||
		$('.section2subsection2').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings. */
			middleSections.removeClass('active_middle');	
		$('.section2subsection3').addClass('active_middle');
	
		
		
	};
	
	var go2_4 = function(){
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub4').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main2 .sub4').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section2 , .section5').css('background-color','none');
		
		if($('.section2subsection1').hasClass('active_middle')||
		$('.section2subsection2').hasClass('active_middle') ||
		$('.section2subsection3').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$('.section2subsection4').addClass('active_middle');
	
		
		
	};
	
	var go3_1 = function(){
		
				$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section4').hasClass('active_top') ||
		$('.section5').hasClass('active_top') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		
		
		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().hide() ;
		$('.main3').children().show() ;
		$('.main3 .sub_sub_bubbles').hide();
		$('.main3 .sub1').children().show();
		$('.main3 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.main4').children().hide() ;
		$('.main5').children().hide() ;
		$('.startPage').children().hide();
		/*adds active_top class to top buttons*/
		$('.section3').addClass('active_top');
		$('.section2, .section1, .section4 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section3subsection1').addClass('active_middle');
		
	
		
		$gallery.flickity( 'select', 2 );
	
		
		
	};
	
	var go3_2 = function(){
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main3 .sub_sub_bubbles').hide();
		$('.main3 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main3 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
			
		if($('.section3subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$('.section3subsection2').addClass('active_middle');

	
		
		
	};
	
	var go4_1 = function(){
		
		
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section5').hasClass('active_top') ){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		
		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().hide() ;
		$('.main3').children().hide() ;
		$('.main4').children().show() ;
		$('.main4 .sub_sub_bubbles').hide();
		$('.main4 .sub1').children().show();
		$('.main4 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.startPage').children().hide();
		$('.main5').children().hide() ;
		/*adds active_top class to top buttons*/
		$('.section4').addClass('active_top');
		$('.section2, .section1, .section3 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section4subsection1').addClass('active_middle');
		
		
	
		$gallery.flickity( 'select', 3 );
	
		
		
	};
	
	var go4_2 = function(){
	
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main4 .sub_sub_bubbles').hide();
		$('.main4 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main4 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
		if($('.section4subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$('.section4subsection2').addClass('active_middle');
		
		
	};
	var go5_1 = function(){
			
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
	
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		$('.sub_bubbles').children().addClass('fadeInRight');
		
		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().hide() ;
		$('.main3').children().hide() ;
		$('.main4').children().hide() ;
		$('.main5').children().show() ;
		$('.main5 .sub_sub_bubbles').hide();
		$('.main5 .sub1').children().show();
		$('.main5 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.startPage').children().hide();
	/*adds active_top class to top buttons*/
		$('.section5').addClass('active_top');
		$('.section2, .section1, .section4 , .section3').removeClass('active_top');
		
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section5subsection1').addClass('active_middle');
		

		$gallery.flickity( 'select', 4 );
		
		
	};
	
	var go5_2 = function(){
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.rightarrow').show() ;
		
		$('.main5 .sub_sub_bubbles').hide();
		$('.main5 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main5 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
		if($('.section5subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$('.section5subsection2').addClass('active_middle');
		
		
	};
	
	
	var go5_3 = function(){
			$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.rightarrow').hide() ;
		
		$('.main5 .sub_sub_bubbles').hide();
		$('.main5 .sub3').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main5 .sub3').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section2, .section4 , .section5').css('background-color','none');
		
		if($('.section5subsection1').hasClass('active_middle')||
		$('.section5subsection2').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		
		/*Adds active class and removes active class from siblings. */
		middleSections.removeClass('active_middle');	
		$('.section5subsection3').addClass('active_middle');
		
		
	};
	
	
	
	$('.topleftlink').click(function(){
	location.reload();
	});
	
	
	$('.Begin1').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		$('.sub_bubbles').children().addClass('fadeInRight');
	
		
		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().show() ;
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub1').children().show();
		$('.main1 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.main2').children().hide() ;
		$('.main2').children().hide() ;
		$('.main3').children().hide() ;
		$('.main4').children().hide() ;
		$('.main5').children().hide() ;
		$('.startPage').children().hide();
		/*adds active_top class to top buttons*/
		$('.section1').addClass('active_top');
		$('.section2, .section3, .section4 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section1subsection1').addClass('active_middle');
	
		
		$gallery.flickity( 'select', 0 );
		
	});
	
	
	$('.section1').click(function() {
		
			
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section2').hasClass('active_top') ||
		$('.section3').hasClass('active_top') ||
		$('.section4').hasClass('active_top') ||
		$('.section5').hasClass('active_top') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		
	 
	 	$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().show() ;
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub1').children().show();
		$('.main1 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.main2').children().hide() ;
		$('.main3').children().hide() ;
		$('.main4').children().hide() ;
		$('.main5').children().hide() ;
		$('.startPage').children().hide();
		/*adds active_top class to top buttons*/
		$(this).addClass('active_top');
		$('.section2, .section3, .section4 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section1subsection1').addClass('active_middle');
		$gallery.flickity( 'select', 0 );
	});
	
	$('.section2').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section3').hasClass('active_top') ||
		$('.section4').hasClass('active_top') ||
		$('.section5').hasClass('active_top') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		

		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().show() ;
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub1').children().show();
		$('.main2 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.startPage').children().hide();
		$('.main3').children().hide() ;
		$('.main4').children().hide() ;
		$('.main5').children().hide() ;
		/*adds active_top class to top buttons*/
		$(this).addClass('active_top');
		$('.section1, .section3, .section4 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section2subsection1').addClass('active_middle');
	

	
		$gallery.flickity( 'select', 1 );	
	});
	
	$('.section3').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section4').hasClass('active_top') ||
		$('.section5').hasClass('active_top') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		
		
		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().hide() ;
		$('.main3').children().show() ;
		$('.main3 .sub_sub_bubbles').hide();
		$('.main3 .sub1').children().show();
		$('.main3 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.main4').children().hide() ;
		$('.main5').children().hide() ;
		$('.startPage').children().hide();
		/*adds active_top class to top buttons*/
		$(this).addClass('active_top');
		$('.section2, .section1, .section4 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section3subsection1').addClass('active_middle');
		
	
		
		$gallery.flickity( 'select', 2 );
	});
	
	$('.section4').click(function() {
		
			
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
		if($('.section5').hasClass('active_top') ){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		$('.sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
			$('.sub_bubbles').children().addClass('fadeInRight');
		}
		
		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().hide() ;
		$('.main3').children().hide() ;
		$('.main4').children().show() ;
		$('.main4 .sub_sub_bubbles').hide();
		$('.main4 .sub1').children().show();
		$('.main4 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.startPage').children().hide();
		$('.main5').children().hide() ;
		/*adds active_top class to top buttons*/
		$(this).addClass('active_top');
		$('.section2, .section1, .section3 , .section5').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section4subsection1').addClass('active_middle');
		
		
	
		$gallery.flickity( 'select', 3 );
	});
	$('.section5').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_bubbles').children().removeClass('fadeInLeft');
		$('.sub_bubbles').children().removeClass('fadeInRight');
		
	
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		$('.sub_bubbles').children().addClass('fadeInRight');
		
		$('.leftarrow').show() ;
		$('.rightarrow').show() ;
		$('.main1').children().hide() ;
		$('.main2').children().hide() ;
		$('.main3').children().hide() ;
		$('.main4').children().hide() ;
		$('.main5').children().show() ;
		$('.main5 .sub_sub_bubbles').hide();
		$('.main5 .sub1').children().show();
		$('.main5 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.startPage').children().hide();
	/*adds active_top class to top buttons*/
		$(this).addClass('active_top');
		$('.section2, .section1, .section4 , .section3').removeClass('active_top');
		/*adds active_top class to middle buttons*/
		middleSections.removeClass('active_middle');	
		$('.section5subsection1').addClass('active_middle');
		
		
		$gallery.flickity( 'select', 4 );
	});
	
	
	
	/*********************TOP LEVEL NAVIVGATION END**********************/
	

	$('.section1subsection1').click(function() {
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
			
		
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if($('.section1subsection2').hasClass('active_middle') ||
		$('.section1subsection3').hasClass('active_middle') ||
		$('.section1subsection4').hasClass('active_middle')||
		$('.section1subsection5').hasClass('active_middle')
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');

	
	
	});
	
	
	$('.section1subsection2').click(function() {
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
		
		if($('.section1subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
	
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');

	});
	
	$('.section1subsection3').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
	$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub3').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub3').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section2, .section4 , .section5').css('background-color','none');
		
		if($('.section1subsection1').hasClass('active_middle') || 
		$('.section1subsection2').hasClass('active_middle') ){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		/*Adds active class and removes active class from siblings. */
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	
	});
	
	$('.section1subsection4').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub4').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub4').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section2 , .section5').css('background-color','none');
		
		
		if($('.section1subsection1').hasClass('active_middle') || 
		$('.section1subsection2').hasClass('active_middle') ||
		$('.section1subsection3').hasClass('active_middle')
		){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
		
	});
	$('.section1subsection5').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main1 .sub_sub_bubbles').hide();
		$('.main1 .sub5').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main1 .sub5').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section2').css('background-color','none');
		
		if($('.section1subsection1').hasClass('active_middle') || 
		$('.section1subsection2').hasClass('active_middle') ||
		$('.section1subsection3').hasClass('active_middle') ||
		$('.section1subsection4').hasClass('active_middle')
		){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
	
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
		
	});
	
	
	
	$('.section2subsection1').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main2 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if( $('.section2subsection2').hasClass('active_middle') ||
		$('.section2subsection3').hasClass('active_middle') ||
		$('.section2subsection4').hasClass('active_middle')
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
			

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	
	
	$('.section2subsection2').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main2 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
		if($('.section2subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings.*/
		middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	
	$('.section2subsection3').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub3').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main2 .sub3').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section2, .section4 , .section5').css('background-color','none');
		
		if($('.section2subsection1').hasClass('active_middle')||
		$('.section2subsection2').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings. */
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	$('.section2subsection4').click(function() {
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main2 .sub_sub_bubbles').hide();
		$('.main2 .sub4').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main2 .sub4').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section2 , .section5').css('background-color','none');
		
		if($('.section2subsection1').hasClass('active_middle')||
		$('.section2subsection2').hasClass('active_middle') ||
		$('.section2subsection3').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	
//	$('.section2subsection5').click(function() {
//		
//		$('.main2 .sub_sub_bubbles').hide();
//		$('.main2 .sub5').find('.sub_sub_bubbles,.sub_sub1').show();
//		$('.main2 .sub5').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
//		$('.section1, .section3, .section4 , .section2').css('background-color','none');
//	
//		/*Adds active class and removes active class from siblings.*/
//		$(this).addClass('active_middle');
//		$('.section2subsection2 ,.section2subsection3 ,.section2subsection4 ,.section2subsection1').removeClass('active_middle');
//	});
//	
	
	
	$('.section3subsection1').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
			
		$('.main3 .sub_sub_bubbles').hide();
		$('.main3 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main3 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if( $('.section3subsection2').hasClass('active_middle') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	
	
	$('.section3subsection2').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main3 .sub_sub_bubbles').hide();
		$('.main3 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main3 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
			
		if($('.section3subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
			});
	
	//$('.section3subsection3').click(function() {
//		
//		$('.main3 .sub_sub_bubbles').hide();
//		$('.main3 .sub3').find('.sub_sub_bubbles,.sub_sub1').show();
//		$('.main3 .sub3').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
//		$('.section1, .section2, .section4 , .section5').css('background-color','none');
//		
//		/*Adds active class and removes active class from siblings. */
//		$(this).addClass('active_middle');
//		$('.section3subsection2 ,.section3subsection1 ,.section3subsection4 ,.section3subsection5').removeClass('active_middle');
//	});
//	$('.section3subsection4').click(function() {
//		
//		$('.main3 .sub_sub_bubbles').hide();
//		$('.main3 .sub4').find('.sub_sub_bubbles,.sub_sub1').show();
//		$('.main3 .sub4').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
//		$('.section1, .section3, .section2 , .section5').css('background-color','none');
//		
//		/*Adds active class and removes active class from siblings.*/
//		$(this).addClass('active_middle');
//		$('.section3subsection2 ,.section3subsection3 ,.section3subsection1 ,.section3subsection5').removeClass('active_middle');
//	});
//	$('.section3subsection5').click(function() {
//		
//		$('.main3 .sub_sub_bubbles').hide();
//		$('.main3 .sub5').find('.sub_sub_bubbles,.sub_sub1').show();
//		$('.main3 .sub5').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
//		$('.section1, .section3, .section4 , .section2').css('background-color','none');
//	
//		/*Adds active class and removes active class from siblings.*/
//		$(this).addClass('active_middle');
//		$('.section3subsection2 ,.section3subsection3 ,.section3subsection4 ,.section3subsection1').removeClass('active_middle');
//	});
	
	$('.section4subsection1').click(function() {
			
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main4 .sub_sub_bubbles').hide();
		$('.main4 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main4 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if( $('.section4subsection2').hasClass('active_middle') 
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	
	
	$('.section4subsection2').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.main4 .sub_sub_bubbles').hide();
		$('.main4 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main4 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
		if($('.section4subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	
	$('.section5subsection1').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.rightarrow').show() ;
		
		$('.main5 .sub_sub_bubbles').hide();
		$('.main5 .sub1').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main5 .sub1').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section2, .section3, .section4 , .section5').css('background-color','none');
		
		if( $('.section5subsection2').hasClass('active_middle')||
		$('.section5subsection3').hasClass('active_middle')  
		){
		$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}

		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	
	
	$('.section5subsection2').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.rightarrow').show() ;
		
		$('.main5 .sub_sub_bubbles').hide();
		$('.main5 .sub2').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main5 .sub2').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section3, .section4 , .section5').css('background-color','none');
		
		if($('.section5subsection1').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		/*Adds active class and removes active class from siblings.*/
			middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	
	
	$('.section5subsection3').click(function() {
		
		$('.sub_sub_bubbles').children().removeClass('fadeInRight');
		$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
		
		$('.rightarrow').hide() ;
		
		$('.main5 .sub_sub_bubbles').hide();
		$('.main5 .sub3').find('.sub_sub_bubbles,.sub_sub1').show();
		$('.main5 .sub3').find('.sub_sub_bubbles .sub_sub1 ,.sub_sub2, .sub_sub3').hide();
		$('.section1, .section2, .section4 , .section5').css('background-color','none');
		
		if($('.section5subsection1').hasClass('active_middle')||
		$('.section5subsection2').hasClass('active_middle')){
		$('.sub_sub_bubbles').children().addClass('fadeInRight');
		}
		else {
			$('.sub_sub_bubbles').children().addClass('fadeInLeft');
		}
		
		
		
		/*Adds active class and removes active class from siblings. */
		middleSections.removeClass('active_middle');	
		$(this).addClass('active_middle');
	});
	
	
	
	
		/*********************MID LEVEL NAVIVGATION END**********************/
	
var contentarray= $('.section1subsection1subsubbubbles1,.section1subsection1subsubbubbles2,.section1subsection1subsubbubbles3,.section1subsection2subsubbubbles1,.section1subsection2subsubbubbles3,.section1subsection3subsubbubbles1,.section1subsection3subsubbubbles2,.section1subsection3subsubbubbles3,.section1subsection4subsubbubbles1,.section1subsection4subsubbubbles2,.section1subsection4subsubbubbles3,.section1subsection5subsubbubbles1,.section1subsection5subsubbubbles2,.section1subsection5subsubbubbles3,.section2subsection1subsubbubbles1,.section2subsection1subsubbubbles2,.section2subsection1subsubbubbles3,.section2subsection2subsubbubbles1,.section2subsection2subsubbubbles2,.section2subsection2subsubbubbles3,.section2subsection3subsubbubbles1,.section2subsection3subsubbubbles2,.section2subsection3subsubbubbles3,.section2subsection4subsubbubbles1,.section2subsection4subsubbubbles2,.section2subsection4subsubbubbles3,.section3subsection1subsubbubbles2,.section3subsection1subsubbubbles3,.section3subsection2subsubbubbles1,.section3subsection2subsubbubbles2,.section3subsection2subsubbubbles3,.section4subsection1subsubbubbles1,.section4subsection1subsubbubbles2,.section4subsection1subsubbubbles3,.section4subsection2subsubbubbles1,.section4subsection2subsubbubbles2,.section4subsection2subsubbubbles3,.section5subsection1subsubbubbles1,.section5subsection1subsubbubbles2,.section5subsection1subsubbubbles3,.section5subsection2subsubbubbles1,.section5subsection2subsubbubbles2,.section5subsection2subsubbubbles3,.section5subsection3subsubbubbles2,.section5subsection3subsubbubbles3');											

		if(isMobile.any()) {
 

				contentarray.click(function() {
					$('.sub_sub_bubbles').children().removeClass('fadeInRight');
					$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
					
					contentarray.removeClass('active_bottom');
					$(this).addClass('active_bottom');

					$('.sub_sub_bubbles p').css({opacity:0.35});
					
					 if ($(this).attr('class').indexOf('bubbles1') > -1){
					$('.sub_sub_bubbles .sub_sub1').show();
					$('.sub_sub_bubbles .sub_sub2').hide();
					$('.sub_sub_bubbles .sub_sub3').hide();
					 }
					 else if ($(this).attr('class').indexOf('bubbles2') > -1){
					$('.sub_sub_bubbles .sub_sub2').show();
					$('.sub_sub_bubbles .sub_sub1').hide();
					$('.sub_sub_bubbles .sub_sub3').hide();
					 }
					 else if ($(this).attr('class').indexOf('bubbles3') > -1){
					$('.sub_sub_bubbles .sub_sub3').show();
					$('.sub_sub_bubbles .sub_sub1').hide();
					$('.sub_sub_bubbles .sub_sub2').hide();
					 }
				});
				
				$('html').click(function() {
					$('.main1').find('.sub_sub_bubbles .sub_sub1, .sub_sub2, .sub_sub3').hide();
					$('.main2').find('.sub_sub_bubbles .sub_sub1, .sub_sub2, .sub_sub3').hide();
					$('.main3').find('.sub_sub_bubbles .sub_sub1, .sub_sub2, .sub_sub3').hide();
					$('.main4').find('.sub_sub_bubbles .sub_sub1, .sub_sub2, .sub_sub3').hide();
					$('.main5').find('.sub_sub_bubbles .sub_sub1, .sub_sub2, .sub_sub3').hide();
					contentarray.removeClass('active_bottom');
					$('.main1 .sub_sub_bubbles p').css({opacity:1.0});
					$('.main2 .sub_sub_bubbles p').css({opacity:1.0});
					$('.main3 .sub_sub_bubbles p').css({opacity:1.0});
					$('.main4 .sub_sub_bubbles p').css({opacity:1.0});
					$('.main5 .sub_sub_bubbles p').css({opacity:1.0});
				});


				contentarray.click(function(event){
					event.stopPropagation();
				});
		}
		else {
			contentarray.hover(function() {

				$('.sub_sub_bubbles').children().removeClass('fadeInRight');
				$('.sub_sub_bubbles').children().removeClass('fadeInLeft');
					$(this).toggleClass('active_bottom');
						
					
					 if ($(this).attr('class').indexOf('bubbles1') > -1){
					$('.sub_sub_bubbles .sub_sub1').toggle();
					$('.sub_sub_bubbles .sub_sub2').hide();
					$('.sub_sub_bubbles .sub_sub3').hide();
					 }
					 else if ($(this).attr('class').indexOf('bubbles2') > -1){
					$('.sub_sub_bubbles .sub_sub2').toggle();
					$('.sub_sub_bubbles .sub_sub1').hide();
					$('.sub_sub_bubbles .sub_sub3').hide();
					 }
					 else if ($(this).attr('class').indexOf('bubbles3') > -1){
					$('.sub_sub_bubbles .sub_sub3').toggle();
					$('.sub_sub_bubbles .sub_sub1').hide();
					$('.sub_sub_bubbles .sub_sub2').hide();
					 }
					 
					  if($(this).hasClass('active_bottom'))
					  {
						$('.sub_sub_bubbles p').css({opacity:0.35});
						$("body").css("overflow", "hidden");
					  }
					  else //We know the opacity is not 0 lets make it 0.
					  {
						$('.sub_sub_bubbles p').css({opacity:1.0});
						}

				});
		
		}

			
			
	/*	***************Left Right Arrow Swipe***********	*/	
	$('body').on ("swiperight",function() {

	if ($('.section1subsection1').hasClass('active_middle')){
		location.reload();
	
	}
	else if ($('.section1subsection2').hasClass('active_middle')){
		go1_1fromLeft();
	}
	else if ($('.section1subsection3').hasClass('active_middle')){
		go1_2();
	}
	else if ($('.section1subsection4').hasClass('active_middle')){
		go1_3();
	}
	else if ($('.section1subsection5').hasClass('active_middle')){
		go1_4();
	}
	else if ($('.section2subsection1').hasClass('active_middle')){
		go1fromLeft();
	}
	else if ($('.section2subsection2').hasClass('active_middle')){
		go2_1fromLeft();
	}
	else if ($('.section2subsection3').hasClass('active_middle')){
		go2_2();
	}
	else if ($('.section2subsection4').hasClass('active_middle')){
		go2_3();
	}
	else if ($('.section3subsection1').hasClass('active_middle')){
		go2fromLeft();
	}
	else if ($('.section3subsection2').hasClass('active_middle')){
		go3_1fromLeft();
	}
	else if ($('.section4subsection1').hasClass('active_middle')){
		go3fromLeft();
	}
	else if ($('.section4subsection2').hasClass('active_middle')){
		go4_1fromLeft();
	}
	else if ($('.section5subsection1').hasClass('active_middle')){
		go4_2fromLeft();
	}
	else if ($('.section5subsection2').hasClass('active_middle')){
		go5_1fromLeft();
	}
	else if ($('.section5subsection3').hasClass('active_middle')){
		go5_2();
	}
	
	
	});
	$('body').on ("swipeleft",function() {
	if ($('.section1subsection1').hasClass('active_middle')){
		go1_2();
	}
	else if ($('.section1subsection2').hasClass('active_middle')){
		go1_3();
	}
	else if ($('.section1subsection3').hasClass('active_middle')){
		go1_4();
	}
	else if ($('.section1subsection4').hasClass('active_middle')){
		go1_5();
	}
	else if ($('.section1subsection5').hasClass('active_middle')){
		go2_1();
	}
	else if ($('.section2subsection1').hasClass('active_middle')){
		go2_2();
	}
	else if ($('.section2subsection2').hasClass('active_middle')){
		go2_3();
	}
	else if ($('.section2subsection3').hasClass('active_middle')){
		go2_4();
	}
	else if ($('.section2subsection4').hasClass('active_middle')){
		go3_1();
	}
	else if ($('.section3subsection1').hasClass('active_middle')){
		go3_2();
	}
	else if ($('.section3subsection2').hasClass('active_middle')){
		go4_1();
	}
	else if ($('.section4subsection1').hasClass('active_middle')){
		go4_2();
	}
	else if ($('.section4subsection2').hasClass('active_middle')){
		go5_1();
	}
	else if ($('.section5subsection1').hasClass('active_middle')){
		go5_2();
	}
	else if ($('.section5subsection2').hasClass('active_middle')){
		go5_3();
	}
	else if ($('.section5subsection3').hasClass('active_middle')){

	}

    });
	
	
	
	$('.rightarrow').click(function() {
	if ($('.section1subsection1').hasClass('active_middle')){
		go1_2();
	}
	else if ($('.section1subsection2').hasClass('active_middle')){
		go1_3();
	}
	else if ($('.section1subsection3').hasClass('active_middle')){
		go1_4();
	}
	else if ($('.section1subsection4').hasClass('active_middle')){
		go1_5();
	}
	else if ($('.section1subsection5').hasClass('active_middle')){
		go2_1();
	}
	else if ($('.section2subsection1').hasClass('active_middle')){
		go2_2();
	}
	else if ($('.section2subsection2').hasClass('active_middle')){
		go2_3();
	}
	else if ($('.section2subsection3').hasClass('active_middle')){
		go2_4();
	}
	else if ($('.section2subsection4').hasClass('active_middle')){
		go3_1();
	}
	else if ($('.section3subsection1').hasClass('active_middle')){
		go3_2();
	}
	else if ($('.section3subsection2').hasClass('active_middle')){
		go4_1();
	}
	else if ($('.section4subsection1').hasClass('active_middle')){
		go4_2();
	}
	else if ($('.section4subsection2').hasClass('active_middle')){
		go5_1();
	}
	else if ($('.section5subsection1').hasClass('active_middle')){
		go5_2();
	}
	else if ($('.section5subsection2').hasClass('active_middle')){
		go5_3();
	}
	else if ($('.section5subsection3').hasClass('active_middle')){

	}
	
	
    });	
	
	$('.leftarrow').click(function() {
	
	
	
	if ($('.section1subsection1').hasClass('active_middle')){
		location.reload();
	
	}
	else if ($('.section1subsection2').hasClass('active_middle')){
		go1_1fromLeft();
	}
	else if ($('.section1subsection3').hasClass('active_middle')){
		go1_2();
	}
	else if ($('.section1subsection4').hasClass('active_middle')){
		go1_3();
	}
	else if ($('.section1subsection5').hasClass('active_middle')){
		go1_4();
	}
	else if ($('.section2subsection1').hasClass('active_middle')){
		go1fromLeft();
	}
	else if ($('.section2subsection2').hasClass('active_middle')){
		go2_1fromLeft();
	}
	else if ($('.section2subsection3').hasClass('active_middle')){
		go2_2();
	}
	else if ($('.section2subsection4').hasClass('active_middle')){
		go2_3();
	}
	else if ($('.section3subsection1').hasClass('active_middle')){
		go2fromLeft();
	}
	else if ($('.section3subsection2').hasClass('active_middle')){
		go3_1fromLeft();
	}
	else if ($('.section4subsection1').hasClass('active_middle')){
		go3fromLeft();
	}
	else if ($('.section4subsection2').hasClass('active_middle')){
		go4_1fromLeft();
	}
	else if ($('.section5subsection1').hasClass('active_middle')){
		go4_2fromLeft();
	}
	else if ($('.section5subsection2').hasClass('active_middle')){
		go5_1fromLeft();
	}
	else if ($('.section5subsection3').hasClass('active_middle')){
		go5_2();
	}
	
	
    });	




	
	
	};

$(document).ready(main);
