<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$comma_separated = implode(",",$data->listenquete);
 
$array1 = array();
  $fruits_ar = explode(',',$comma_separated);
  $max = sizeof($fruits_ar);
  for ($x = 0; $x < $max; $x++) {
    
     $sql = "SELECT distinct id_enquete,id_question  FROM statistique where id_enquete='".$fruits_ar[$x]."'";
     $result = $conn->query($sql);
    
     if($result->num_rows>0)
   {

    while($row = $result->fetch_assoc()) {
  	
      $tmp=array();
   
      $tmp["id_enquete"] = $row["id_enquete"];
      $tmp["id_question"] = $row["id_question"];
     
      array_push($array1,$tmp);
}
    } 

  }
  
  
$conn->close();
echo json_encode($array1);

?>
