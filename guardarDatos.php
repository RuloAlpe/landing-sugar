<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if(isset($_POST)){
  require_once "db.php";
  
  try{  
    $stmt = $conn->prepare("insert into contactos_sugar (txt_empresa, txt_nombre, txt_cargo, txt_telefono, txt_email, txt_mensaje) values (?, ?, ?, ?, ?, ?)");

    $stmt->bind_param("ssssss", $_POST['empresa'], $_POST['nombre'], $_POST['cargo'], $_POST['telefono'], $_POST['email'], $_POST['mensaje']);
    
    /* ejecutar la consulta */
    $stmt->execute();
    if($stmt){

      $mensaje = "<h1>Registro en landing page de sugar</h1>
      <p>Empresa: ".$_POST['empresa']."</p>
      <p>Nombre: ".$_POST['nombre']."</p>
      <p>Cargo: ".$_POST['cargo']."</p>
      <p>Telefono: ".$_POST['telefono']."</p>
      <p>Email: ".$_POST['email']."</p>
      <p>Mensaje: ".$_POST['mensaje']."</p>"; 

      // file_get_contents('./mktrailMails/mktrail_thankyou/index.html');

      $cabeceras = 'From: contacto@estrategica.com' . "\r\n";
      $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";

      // send email
      mail('ralanis@estrategica.com', "Registro en landing page de sugar", $mensaje, $cabeceras);

      // $mail_p = new PHPMailer();
      // $mail_p->IsSMTP();
      // $mail_p->SMTPAuth   = true;
      // $mail_p->SMTPSecure = "tls"; 
      // $mail_p->Host       = "smtp.mandrillapp.com";
      // $mail_p->Port       = 587; 
      // $mail_p->Username   = "aquintana@estrategica.com";
      // $mail_p->Password   = "9C6kelU75JH5kwhS_BUFFQ";
      // $mail_p->From       = "contacto@estrategica.com";
      // $mail_p->FromName   = "Registro sugar";
      // $mail_p->Subject    = "Registro sugar";
      // $mail_p->AltBody    = "Contacto";
      // // $mail_p->AddReplyTo();
      // // $mail_p->WordWrap   = 50;

      // $mail_p->AddAddress("ralanis@estrategica.com");
      // $mail_p->IsHTML(true);
      // $mail_p->CharSet = 'UTF-8';
      // $mail_p->Body = $mensaje;

      // if(!$mail_p->Send()) {
      //   // echo "Error " . $mail_p->ErrorInfo;exit;
      //   echo json_encode(['status' => 'error1 ' . $mail_p->ErrorInfo]);exit;
      // }

      echo json_encode(['status' => 'success']);

    }
  }catch(Exception $error){
    print_r($error->getMessage);

    echo json_encode(['status' => 'error2 ' . $error->getMessage]);exit;
  }
}
?>