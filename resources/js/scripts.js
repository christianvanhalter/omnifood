/* en todo documento Jquery debemos poner primero lo siguiente: */
/* esto garantiza que nuestro código solo se ejecute después de que el documento se haya cargado */
$(document).ready(function()
{
    /* FOR THE STICKY NAVIGATION */
    /* primero seleccionamos la sección dónde aparecerá el sticky nav */
    $('.js--section-features').waypoint(function(direction)
    {
        if(direction == "down")
        {
            /* si el usuario hace scroll hacía abajo. Mostraremos el sticky nav */
            $('nav').addClass('sticky'); /* añadimos la clase sticky */
        }
        else
        {
            /* si el usuario hace scroll up, desaparece el sticky nav */
            $('nav').removeClass('sticky');
        }
    }, 
    {
        offset: '60px;' /*pasarán 60px antes de pasar por la sección .js--section-features */
    });

    /* SCROLL ON BUTTONS */

    /* btn de 'Im hungry' del header */
    $('.js--scroll-to-plans').click(function ()
    {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); /* 1000 miliseg = 1seg */
    });


    /* btn 'show me more' del header */
    $('.js--scroll-to-start').click(function ()
    {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    /* Navigation Scroll */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) 
    {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) 
        {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() 
                {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                    } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    /* ANIMATIONS ON SCROLL */

    /* animación de FIRST SECTION: FEATURES */
    $('.js--wp-1').waypoint(function(direction)
    {
        /* esta animación sólo ocurrirá una sola vez */
        $('.js--wp-1').addClass('animated fadeIn');
    },
    {
        offset:'50%;'        
    });
    
    /* animación de THIRD SECTION: HOW IT WORKS */
    $('.js--wp-2').waypoint(function(direction)
    {
        /* esta animación sólo ocurrirá una sola vez */
        $('.js--wp-2').addClass('animated fadeInUp');
    },
    {
        offset:'50%;'        
    });

    /* animación de FOUR SECTION: CITIES */
    $('.js--wp-3').waypoint(function(direction)
    {
        /* esta animación sólo ocurrirá una sola vez */
        $('.js--wp-3').addClass('animated fadeIn');
    },
    {
        offset:'50%;'        
    });

    /* animación de SIX SECTION: SIGN UP AND PRICING PLANS */
    $('.js--wp-4').waypoint(function(direction)
    {
        /* esta animación sólo ocurrirá una sola vez */
        $('.js--wp-4').addClass('animated pulse');
    },
    {
        offset:'50%;'        
    });


    /* Mobile nav */
    $('.js--nav-icon').click(function()
    {
        var nav = $('.js--main-nav'); /* alamacena el resultado de seleccionar la navegación */
        nav.slideToggle(200); /* slideToggle: abre y cierra una caja (200 miliseconds == 2s )*/

        /* cambia el icono de hamburguesa por cruz */
        var icon = $('.js--nav-icon i');
        if(icon.hasClass('ion-navicon-round'))
        {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else
        {
            /* si es al revés */
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
  


});