<?php

session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
$comma_separated = implode(",",$data->options);
 
$array1 = array();
  $fruits_ar = explode(',',$comma_separated);
  $max = sizeof($fruits_ar);
  for ($x = 0; $x < $max; $x++) {
    
     $sql = "SELECT COUNT(*) AS nbr ,value,id_question  FROM reponse where id_option='".$fruits_ar[$x]."'";
     $result = $conn->query($sql);
    
     if($result->num_rows>0)
   {

    while($row = $result->fetch_assoc()) {
  	
      $tmp=array();
      $tmp["nbr"] = $row["nbr"];
      $tmp["value"] = $row["value"];
      $tmp["id_question"] = $row["id_question"];
     
      array_push($array1,$tmp);
}
    } 

  }
  
  
$conn->close();
echo json_encode($array1);






























/*session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
$sql = "SELECT COUNT(*) AS nbr ,value  FROM reponse where id_option='".$data->idopt."'";

$result = $conn->query($sql);


$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["nbr"] = $row["nbr"];
        $tmp["value"] = $row["value"];
       
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);*/
?>
