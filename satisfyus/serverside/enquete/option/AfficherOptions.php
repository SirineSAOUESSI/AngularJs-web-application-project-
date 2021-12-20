<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
$comma_separated = implode(",",$data->questions);



  
$array1 = array();
  $fruits_ar = explode(',',$comma_separated);
  $max = sizeof($fruits_ar);
  for ($x = 0; $x < $max; $x++) {
     
     $sql = "SELECT options.id_option,options.Nom,options.id_question,question.Type_statistic FROM options LEFT JOIN question ON question.id_question=options.id_question where options.id_question=".$fruits_ar[$x]."";
     $result = $conn->query($sql);
     $array = array();
     if($result->num_rows>0)
   {

     while($row = $result->fetch_assoc()) {
  	
      
        $tmp["id_option"] = $row["id_option"];
        $tmp["Nom"] = $row["Nom"];
        $tmp["id_question"] = $row["id_question"];
        $tmp["Type_statistic"] = $row["Type_statistic"];
        array_push($array, $tmp);
    }
    } 
    array_push($array1, $array);
  }
  
  
$conn->close();
echo json_encode($array1);
/*$sql = "SELECT * FROM options where id_question='".$data->idquestion."'";

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
echo json_encode($array);*/




?>
