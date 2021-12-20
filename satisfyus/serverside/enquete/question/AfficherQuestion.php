<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
$sql = "SELECT * FROM question where id_enquete='".$data->id."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_question"] = $row["id_question"];
        $tmp["Label"] = $row["Label"];
        $tmp["Type"] = $row["Type"];
        $tmp["Type_statistic"] = $row["Type_statistic"];
        $tmp["id_enquete"] = $row["id_enquete"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
