<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
$sql = "SELECT * FROM options where id_question='".$data->idquestion."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_option"] = $row["id_option"];
        $tmp["Nom"] = $row["Nom"];
        $tmp["id_question"] = $row["id_question"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>