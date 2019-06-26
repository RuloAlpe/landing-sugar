<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if(isset($_POST)){
  require_once "db.php";
  
  try{  
    $stmt = $conn->prepare("insert into registro_usuarios (txt_nombre, txt_apellido_p, txt_apellido_m, txt_telefono, txt_email, txt_empresa, txt_regimen_fiscal, txt_ventas_mensuales) values (?, ?, ?, ?, ?, ?, ?, ?)");

    $stmt->bind_param("ssssssss", $_POST['nombre'], $_POST['apellido_p'], $_POST['apellido_m'], $_POST['telefono'], $_POST['email'], $_POST['empresa'], $_POST['regimen_fiscal'], $_POST['ventas_mensuales']);
    
    /* ejecutar la consulta */
    $stmt->execute();
    if($stmt){

      $mensaje = "<h1>Muchas gracias por registrarte</h1>
      <p>En breve, uno de nuestros agentes se contactará contigo para darte más información sobre la mejor solución financiera para impulsar el crecimiento de tu empresa.</p>"; 

      // file_get_contents('./mktrailMails/mktrail_thankyou/index.html');

      $cabeceras = 'From: contacto@creditopyme.mx' . "\r\n";
      $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";

      // send email
      mail($_POST['email'], "Contacto credito pyme", $mensaje, $cabeceras);

/*
      $mail_p = new PHPMailer();
      $mail_p->IsSMTP();
      $mail_p->SMTPAuth   = true;
      $mail_p->SMTPSecure = "tls"; 
      $mail_p->Host       = "smtp.mandrillapp.com";
      $mail_p->Port       = 587; 
      $mail_p->Username   = "aquintana@estrategica.com";
      $mail_p->Password   = "9C6kelU75JH5kwhS_BUFFQ";
      $mail_p->From       = "contacto@creditopyme.mx";
      $mail_p->FromName   = "creditopyme";
      $mail_p->Subject    = "creditopyme";
      $mail_p->AltBody    = "Contacto";
      // $mail_p->AddReplyTo();
      // $mail_p->WordWrap   = 50;

      $mail_p->AddAddress($_POST['email']);
      $mail_p->IsHTML(true);
      $mail_p->CharSet = 'UTF-8';
      $mail_p->Body = $mensaje;

      if(!$mail_p->Send()) {
          echo "Error " . $mail_p->ErrorInfo;
          exit;
      }
*/
      header("Location: http://localhost:8888/credito_pyme/credito-pyme/gracias.html");
    }
  }catch(Exception $error){
    print_r($error->getMessage);exit;
  }
}
?>