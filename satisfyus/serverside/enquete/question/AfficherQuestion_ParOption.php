<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
$sql = "SELECT * FROM question  where  id_enquete='".$data->id."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["Label"] = $row["Label"];
        $tmp["Type"] = $row["Type"];
        $tmp["id_question"] = $row["id_question"];
        $tmp["Type_statistic"] = $row["Type_statistic"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
