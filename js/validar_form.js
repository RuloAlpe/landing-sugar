$(document).ready(function(){

  $('#nombre').keypress(function(e){
    $('.obligatorio_nombre').css('display', 'none');
  });

  $('#apellido_p').keypress(function(e){
    $('.obligatorio_apellido_p').css('display', 'none');
  });

  $('#apellido_m').keypress(function(e){
    $('.obligatorio_apellido_m').css('display', 'none');
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
  
  $('#regimen_fiscal').on('change', function(e){

    $('.obligatorio_regimen_fiscal').css('display', 'none');
  });

  $('#ventas_mensuales').on('change', function(e){

    $('.obligatorio_ventas_mensuales').css('display', 'none');
  });

  $("#box-2").on('change', function(){
    $('.obligatorio_privacidad').css('display', 'none');
  });

  $("#js-btn-submit").on('click', function(e){
    e.preventDefault();
    var l = Ladda.create(document.getElementById('js-btn-submit'));
    l.start();

    if(validarForm()){
      $('#contactForm1').submit();
    }else{
      l.stop();
      console.log("Form no validado");
    }
  });
});

function validarForm(){
  var nombre = $('#nombre').val();
  var apellido_p = $('#apellido_p').val();
  var apellido_m = $('#apellido_m').val();
  var telefono = $('#telefono').val();
  var email = $('#email').val();
  var empresa = $('#empresa').val();
  var regimen_fiscal = $("#regimen_fiscal").val();
  var ventas_mensuales = $("#ventas_mensuales").val();

  var val = true;

  if(nombre.length < 1){
    $('.obligatorio_nombre').css('display', 'block');
    val = false;
  }

  if(apellido_p.length < 1){
    $('.obligatorio_apellido_p').css('display', 'block');
    val = false;
  }

  if(apellido_m.length < 1){
    $('.obligatorio_apellido_m').css('display', 'block');
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
      $('.obligatorio_email').text('Email no valido');
      $('.obligatorio_email').css('display', 'block');
      val = false;
    }
  }

  if(empresa.length < 1){
    $('.obligatorio_empresa').css('display', 'block');
    val = false;
  }

  if(regimen_fiscal == '0'){
    $('.obligatorio_regimen_fiscal').css('display', 'block');
    val = false;
  }

  if(ventas_mensuales == '0'){
    $('.obligatorio_ventas_mensuales').css('display', 'block');
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