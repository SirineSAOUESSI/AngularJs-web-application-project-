<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT Distinct events.title,events.id_event,events.id_enquete From tabjoin LEFT JOIN events ON events.id_event=tabjoin.id_event WHERE tabjoin.status='en cour'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_event"] = $row["id_event"];
        $tmp["title"] = $row["title"];
        $tmp["id_enquete"] = $row["id_enquete"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>