$(document).ready(function(){

  //slaider

    const slider = tns({
        container: '.user__sliader',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: true,
        speed: 1700
       
      }); 


       document.querySelector('.user__arrow-left').addEventListener('click', function() {
        slider.goTo('next');

      document.querySelector('.user__arrow-right').addEventListener('click', function() {
        slider.goTo('prev');
      });
     
        responsive: [ {
            776: {
              nav: true
           } 
      
          } ]
        }); 

// Smooth scroll and pageup

$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
  } else {
      $('.pageup').fadeOut();
  }
});

$("a[href='#up']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});


    
});