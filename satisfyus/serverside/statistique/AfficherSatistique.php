<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT * FROM statistique where id_enquete='".$data->id."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_statistique"] = $row["id_statistique"];
        $tmp["option"] = $row["option"];
        $tmp["nombre"] = $row["nombre"];;
        $tmp["id_question"] = $row["id_question"];
        $tmp["id_enquete"] = $row["id_enquete"];
        array_push($array, $tmp);
  }
}
$conn->close();
$array=json_encode($array);
echo $array;




?>
