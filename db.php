<?php
$server = 'localhost';
$username = 'root';
$password = 'root';
$database = 'credito_pyme_db';


$conn = new mysqli($server, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 
?>