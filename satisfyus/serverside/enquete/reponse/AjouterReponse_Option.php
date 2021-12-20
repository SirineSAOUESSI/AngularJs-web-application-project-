<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
$sql1 = "insert into reponse (value,id_question,id_option) values('".$data->value."','".$data->idquestion."','".$data->idOption."');";
if ($conn->query($sql1) === TRUE) {
    echo "insertion reponse effectuée";
} 
else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}


?>
