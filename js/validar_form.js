$(document).ready(function(){

  $('#nombre').keypress(function(e){
    $('.obligatorio_nombre').css('display', 'none');
  });

  $('#cargo').keypress(function(e){
    $('.obligatorio_cargo').css('display', 'none');
  });

  $('#mensaje').keypress(function(e){
    $('.obligatorio_mensaje').css('display', 'none');
  });

  //numeros enteros
  $("#telefono").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    }
  });
  $('#telefono').keypress(function(e){
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

      return false;
    }
    $('.obligatorio_telefono').css('display', 'none');
  });

  $('#email').keypress(function(e){
    $('.obligatorio_email').css('display', 'none');
  });
  
  $('#empresa').keypress(function(e){
    $('.obligatorio_empresa').css('display', 'none');
  });

  $("#box-2").on('change', function(){
    $('.obligatorio_privacidad').css('display', 'none');
  });

  $("#js-btn-submit").on('click', function(e){
    e.preventDefault();
    var l = Ladda.create(document.getElementById('js-btn-submit'));
    l.start();

    if(validarForm()){
      // $('#contactForm1').submit();
      var data = $('#contactForm1').serialize();
      $.ajax({
        url: 'guardarDatos.php',
        method: 'POST',
        data: data,
        success: function(resp){
          resp = JSON.parse(resp);

          if(resp.status == "success"){
            $(".Thanks").css('display', 'block');

            var inter = setInterval(() => {
              $(".Thanks").css('display', 'none');
              $('#contactForm1').trigger('reset');
              clearInterval(inter);
            }, 5000);
          }else{
            $(".Thanks").text('Ocurrio un error, intentalo mas tarde');
            $(".Thanks").css('display', 'block');

            var inter1 = setInterval(() => {
              $(".Thanks").css('display', 'none');
              clearInterval(inter1);
            }, 5000);
          }
          l.stop();
        },
        error: function(){
          $(".Thanks").text('Ocurrio un error, intentalo mas tarde');
          $(".Thanks").css('display', 'block');

          var inter2 = setInterval(() => {
            $(".Thanks").css('display', 'none');
            clearInterval(inter2);
          }, 5000);
          l.stop();
        }
      });

    }else{
      l.stop();
      console.log("Form no validado");
    }
  });
});

function validarForm(){
  var empresa = $('#empresa').val();
  var nombre = $('#nombre').val();
  var cargo = $('#cargo').val();
  var telefono = $('#telefono').val();
  var email = $('#email').val();
  var mensaje = $('#mensaje').val();

  var val = true;

  if(nombre.length < 1){
    $('.obligatorio_nombre').css('display', 'block');
    val = false;
  }

  if(cargo.length < 1){
    $('.obligatorio_cargo').css('display', 'block');
    val = false;
  }

  if(mensaje.length < 1){
    $('.obligatorio_mensaje').css('display', 'block');
    val = false;
  }

  if(telefono.length < 1){
    $('.obligatorio_telefono').css('display', 'block');
    val = false;
  }

  if(email.length < 1){
    $('.obligatorio_email').css('display', 'block');
    val = false;
  }else{
    if(!validateEmail(email)){
      $('.obligatorio_email').text('*Email no valido');
      $('.obligatorio_email').css('display', 'block');
      val = false;
    }
  }

  if(empresa.length < 1){
    $('.obligatorio_empresa').css('display', 'block');
    val = false;
  }

  if(!$("#box-2").prop('checked')){
    $('.obligatorio_privacidad').css('display', 'block');
    val = false;
  }

  if(val){
    return true;
  }else{
    return false;
  }
}

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  return emailReg.test( $email );
}