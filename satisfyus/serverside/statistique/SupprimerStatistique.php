<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "DELETE FROM  statistique where id_enquete='".$data->id."';";
if ($conn->query($sql1) === TRUE) {
    echo "supression enquete effectuée";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}



?>
