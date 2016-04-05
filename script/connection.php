<?php

$servername = "";
$username = "";
$password = "";
$port = ;

$db = "dashforce";

// Create connection
$conn = new mysqli($servername, $username, $password, $db, $port);

if($conn->connect_error){
	die("Connection Failed");
}

date_default_timezone_set('Asia/Kuala_Lumpur');

?>
