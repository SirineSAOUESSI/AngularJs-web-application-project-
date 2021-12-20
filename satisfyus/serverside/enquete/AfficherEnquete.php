<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT * FROM enquete where Date_creation='".$data."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_enquete"] = $row["id_enquete"];
        $tmp["Date_creation"] = $row["Date_creation"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
