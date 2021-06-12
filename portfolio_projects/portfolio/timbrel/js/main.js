$(document).ready(function(){
 
 //tub


 /*$('.stages__wrapper').on('click', 'div:not(.stages__item_active)', function() {
    $(this)
      .addClass('stages__item_active').siblings().removeClass('stages__item_active')
      .closest('div.container').find('div.stages__descr').removeClass('stages__descr_active').eq($(this).index()).addClass('stages__descr_active');
});*/


function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.stages__item ').eq(i).toggleClass('stages__item_active');
          $('.stages__descr').eq(i).toggleClass('stages__descr_active');
        })
    });
};




toggleSlide('.stages__item');
toggleSlide('.stages__descr');


});