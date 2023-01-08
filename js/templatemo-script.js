

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function(){

	// Mobile menu
	$('.mobile-menu-icon').click(function(){
		$('.tm-nav').toggleClass('show');
	});
  
  	$('body').bind('touchstart', function() {});
});