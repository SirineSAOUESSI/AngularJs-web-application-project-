<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT distinct enquete.id_enquete,enquete.Titre,enquete.Date_creation,enquete.Description FROM events LEFT JOIN enquete ON events.id_enquete=enquete.id_enquete LEFT JOIN tabjoin ON events.id_event=tabjoin.id_event WHERE enquete.id_client='".$data->idclient."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_enquete"] = $row["id_enquete"];
        $tmp["title"] = $row["Titre"];
        $tmp["Date_creation"] = $row["Date_creation"];
        $tmp["Description"] = $row["Description"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
