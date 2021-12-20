<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "UPDATE agent SET id_enquete='".$data->idenquete."'where id_agent='".$data->idagent."'";
if ($conn->query($sql1) === TRUE) {
    echo "Modification Agent effectuée";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}

?>
