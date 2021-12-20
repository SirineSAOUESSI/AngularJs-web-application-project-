<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT * FROM utilisateur where Email='".$data->email."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_utilisateur"] = $row["id_utilisateur"];
        $tmp["Email"] = $row["optiEmailon"];
        $tmp["MDP"] = $row["MDP"];
        array_push($array, $tmp);
  }
}
$conn->close();
$array=json_encode($array);
echo $array;




?>
