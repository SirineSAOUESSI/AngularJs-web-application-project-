<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../../connectBase.php';
/*$afficher="SELECT id_enquete FROM enquete where Date_creation='".$data->date."' AND Titre='".$data->titre."'";
$result = $conn->query($afficher);
$row = $result->fetch_assoc();
$id=$row["id_enquete"];*/
$sql1 = "insert into question (Label,Type,Type_statistic,id_enquete) values('".$data->label."','".$data->type."','".$data->type_Statistic."','".$data->idEnquete."');";
$list=$data->Listoption;
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
    $fruits_ar = explode(',',$comma_separated);
    foreach($fruits_ar as $valeur) 
     {
        
        echo "true";
        $afficher2="SELECT id_question FROM question where Type='".$data->type."' AND Label='".$data->label."'AND id_enquete='".$data->idEnquete."' ";
        $result = $conn->query($afficher2);
        $row = $result->fetch_assoc();
        $idOption=$row["id_question"];
        $sql2 = "insert into options (Nom,id_question) values('".$valeur."','".$idOption."');";
        if ($conn->query($sql2) === TRUE) {
            echo "insertion option effectuée";
        }
        else {
            echo "Error: " . $sql2 . "<br>" . $conn->error;
        }
    }
    
   }

} 
else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}


?>
