<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "UPDATE statistique SET  nombre='".$data->nbr."' where id_question='".$data->idquestion."' AND option='".$data->option."'";
if ($conn->query($sql1) === TRUE) {
    echo "modification satistique effectuée";
} 
else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}


?>
