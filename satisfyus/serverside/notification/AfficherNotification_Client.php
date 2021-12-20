<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT id,message FROM notification_client where id_client='".$data."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id"] = $row["id"];
        $tmp["message"] = $row["message"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
