<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "insert into statistique (option,nombre,id_question,id_enquete) values('".$data->option."','".$data->nbr."','".$data->idquestion."','".$data->id_enquete."');";
if ($conn->query($sql1) === TRUE) {
    echo "insertion satistique effectuée";
} 
else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}


?>
