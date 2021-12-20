<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "UPDATE enquete SET Titre='".$data->titre."',Description='".$data->descrip."',id_client='".$data->idclient."' where Date_creation='".$data->date."'";
if ($conn->query($sql1) === TRUE) {
    echo "Modification  enquete effectuée <br>";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}


?>
