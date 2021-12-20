<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "insert into notification_client (message,id_client) values('".$data->message."','".$data->idClient."');";
if ($conn->query($sql1) === TRUE) {
    echo "insertion satistique effectuée";
} 
else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}


?>
