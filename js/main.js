$(document).ready(function(){


 

 $(".header_burger").click(function(event){
   $(".header_burger, .header_menu").toggleClass("active");
  });


   $(document).mousedown(function(e) {
  if (!$('.header_burger, .header_menu').is(e.target) && $('header_menu').has(e.target).length === 0) {
    $('.header_burger, .header_menu').removeClass('active');
  }
  });

 $(".header_menu a").click(function(event){
   $(".header_burger, .header_menu").toggleClass("active");
  });

  $(window).scroll(function() {
      $('.header_burger, .header_menu').removeClass('active');
    });



});