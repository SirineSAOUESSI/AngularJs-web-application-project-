<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "insert into utilisateur (Email,MDP,Status) values('".$data->email."',MD5('".$data->mdp."'),'".$data->status."');";
if ($conn->query($sql1) === TRUE) {
    echo "insertion utilisateur effectuée";
    $afficher="SELECT id_utilisateur FROM utilisateur where Email='".$data->email."'";
    $result = $conn->query($afficher);

    $row = $result->fetch_assoc();
    $id=$row["id_utilisateur"];
    $sql2 = "insert into agent (Nom,Prenom,Adresse,Tel,Date_Naiss,sexe,Description,Photo,id_utilisateur) values('".$data->nom."','".$data->prenom."','".$data->adres."','".$data->tel."','".$data->dateNaiss."','".$data->sexe."','".$data->descrip."','".$data->image."','".$id."');";
    if ($conn->query($sql2) === TRUE) {
    echo "insertion Agent effectuée";
     }   
     else {
    echo "Error: " . $sql2 . "<br>" . $conn->error;
      }
} 
else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}


?>
