$(document).ready(function(){

  //slaider

    const slider = tns({
        container: '.caruosel__item',
        items: 1,
        slideBy: "page",
        autoplay: false,
        controls: false,
        nav: true,
        speed: 2500
       
      }); 

      document.querySelector('.prev').addEventListener('click', function() {
        slider.goTo('next');

       document.querySelector('.next').addEventListener('click', function() {
        slider.goTo('prev');

      
      });
     
        responsive: [ {
            776: {
              nav: true,
           } 
      
          } ]
        }); 

    
});