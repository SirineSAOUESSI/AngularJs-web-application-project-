<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "DELETE FROM  events where id_event='".$data."';";
if ($conn->query($sql1) === TRUE) {
    echo "supression utilisateur effectuée";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}



?>
