<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
$sql1 = "DELETE FROM  question where id_question='".$data->id."';";
if ($conn->query($sql1) === TRUE) {
    echo "supression question effectuée";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}



?>
