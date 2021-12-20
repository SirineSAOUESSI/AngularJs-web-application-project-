<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "UPDATE tabjoin SET   status='en cour' where id_event='".$data->idevent."' AND id_agent='".$data->idagent."';";

if ($conn->query($sql) === TRUE) {
    echo "Modification  enquete effectuée <br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}




?>
