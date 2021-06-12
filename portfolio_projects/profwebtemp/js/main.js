 
 $(document).ready(function(){
 
 //tub


 $('.tub__item').on('click', 'div:not(.tub__item_active)', function() {
    $(this)
      .addClass('tub__item_active').siblings().removeClass('tub__item_active')
      .closest('div.ipad').find('div.ipad__item').removeClass('ipad__item_active').eq($(this).index()).addClass('ipad__item_active');
});


});