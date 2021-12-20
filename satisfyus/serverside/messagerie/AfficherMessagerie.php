<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT * FROM messagerie where (emetteur='".$data->emetteur."'OR emetteur='".$data->recepteur."')  and (recepteur='".$data->recepteur."' OR recepteur='".$data->emetteur."')";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_message"] = $row["id_message"];
        $tmp["message"] = $row["message"];
        $tmp["recepteur"] = $row["recepteur"];
        $tmp["emetteur"] = $row["emetteur"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
