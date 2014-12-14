$(function() {
	window.testimonialsAnimating = false;
   $('#testimonials .btn-right').click(function() {
	   if (window.testimonialsAnimating) return;
       //go to the next one
       //get current index
       var testimonials = $('.testimonial');
       var curIndex = false;
       testimonials.each(function(index) {
          if ($(this).hasClass('active')) {
            curIndex = index;
          }
       });
       curIndex++;
       $('#testimonials').css('height', ($('#testimonials').height()+41)+"px");
       if (curIndex >= testimonials.length) curIndex = 0;
	   window.testimonialsAnimating = true;
       $('#testimonials .testimonial.active').fadeOut(600, function() {
        testimonials.removeClass('active');
        testimonials.eq(curIndex).addClass('active');
           $('#testimonials .testimonial.active').fadeIn(600, function() {
               $('#testimonials').css('height', 'auto');
			   window.testimonialsAnimating = false;
           });
       });
       //now do the animation
       
       
    });
    $('#testimonials .btn-left').click(function() {
      //go to the previous one
	  if (window.testimonialsAnimating) return;
       //go to the next one
       //get current index
       var testimonials = $('.testimonial');
       var curIndex = false;
       testimonials.each(function(index) {
          if ($(this).hasClass('active')) {
            curIndex = index;
          }
       });
       curIndex--;
       $('#testimonials').css('height', ($('#testimonials').height()+41)+"px");
       if (curIndex < 0) curIndex = testimonials.length-1;
	   window.testimonialsAnimating = true;
       $('#testimonials .testimonial.active').fadeOut(600, function() {
        testimonials.removeClass('active');
        testimonials.eq(curIndex).addClass('active');
           $('#testimonials .testimonial.active').fadeIn(600, function() {
               $('#testimonials').css('height', 'auto');
			   window.testimonialsAnimating = false;
           });
       });
    });
	
	$('nav a').each(function() {
		href = $(this).attr('href');
		if (href.indexOf('#') > -1 && href.length > 2) {
			//this means there is a hash in there let's get it and remove it
			elem = $(href);
			if (elem) {
				$(this).attr('href', 'javascript: void(0)');
				$(this).attr('data-href', elem.attr('id'));
				$(this).click(function() {
					id = $(this).attr('data-href');
					el = $('#'+id);
					$('html,body').animate({scrollTop: el.offset().top});
				});
			}
		}
	});
	
	$('button[type="submit"]').click(function() {
		$(this).attr('disabled','disabled');
		img = $('<img>').attr('src', '/img/ajax.gif');
		$(this).parent().prepend(img);
	});
	
});
