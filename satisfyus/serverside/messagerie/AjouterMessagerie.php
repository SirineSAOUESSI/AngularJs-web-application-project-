<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "insert into messagerie (message,emetteur,recepteur) values('".$data->data."','".$data->user."','".$data->to."');";
if ($conn->query($sql1) === TRUE) {
    echo "insertion messagerie effectuée";
} 
else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}


?>
