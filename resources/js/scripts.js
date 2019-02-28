/* en todo documento Jquery debemos poner primero lo siguiente: */
/* esto garantiza que nuestro código solo se ejecute después de que el documento se haya cargado */
$(document).ready(function()
{
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
    }, {
        offset: '60px;' /*pasarán 60px antes de pasar por la sección .js--section-features */
    });


    /* Selector en Jquery */
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
    }, {
        offset: '25%'
    })
    */
  
  


});