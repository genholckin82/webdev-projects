const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

      hamburger.addEventListener('click', () => {
          menu.classList.add('active');

      });

      closeElem.addEventListener('click', () => {
          menu.classList.remove('active');

      });

      const counters = document.querySelectorAll('.skills__ratings-counter'),
            lines = document.querySelectorAll('.skills__ratings-line span');

            counters.forEach( (item, i) => {
                lines[i].style.width = item.innerHTML;

            });

 $(document).ready(function(){


      // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1400) {
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


    /*function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
              
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                 
                  
                
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                },
            }
        });
    };

    validateForms('#form');
    validateForms('#name');
    validateForms('#email'); */
     
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
           // $('#contacts').fadeOut();
            //$('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
 
 
});
