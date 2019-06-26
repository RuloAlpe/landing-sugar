/* Cerrar navBar en Mobile al hacer clic en botón */
if ($('.esMobile').width() == 100 ){

    $( ".cerrar" ).click(function() {
      $(".navbar-collapse").collapse('hide');
    });
  
  };
  
  $(window).resize(function(){     
  
    if ($('.esMobile').width() == 100 ){
  
      $( ".cerrar" ).click(function() {
        $(".navbar-collapse").collapse('hide');
      });
  
    }
  
  });

  /*  */