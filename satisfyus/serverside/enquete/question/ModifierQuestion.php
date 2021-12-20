<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
$sql1 = "UPDATE question SET Label='".$data->label."',Type='".$data->type."',Type='".$data->type."',Type_statistic='".$data->type_Statistic."' where id_question='".$data->id."'";
if ($conn->query($sql1) === TRUE) {
    echo "insertion question effectuée";
    $comma_separated = implode(",",$data->Listoption);
    echo $comma_separated;
    if(strlen($comma_separated)==0)
    {
     echo "false";
    }
    else
   {
    $sql2 = "DELETE FROM options  where id_question='".$data->id."'";
    if ($conn->query($sql2) === TRUE) {
        echo "modification option effectuée";
    }
    else {
        echo "Error: " . $sql2 . "<br>" . $conn->error;
    }
    $fruits_ar = explode(',',$comma_separated);
    foreach($fruits_ar as $valeur) 
    {
      
       $sql3 = "insert into options (Nom,id_question) values('".$valeur."','".$data->id."');";
       if ($conn->query($sql3) === TRUE) {
           echo "insertion option effectuée";
       }
       else {
           echo "Error: " . $sql3 . "<br>" . $conn->error;
       }
   }
    
   }

} 
else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}






?>
