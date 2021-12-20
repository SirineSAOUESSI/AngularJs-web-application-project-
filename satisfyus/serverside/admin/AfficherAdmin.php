<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT administrateur.id_utilisateur,administrateur.id_admin,administrateur.Nom,administrateur.Prenom,utilisateur.Email,utilisateur.MDP,administrateur.Tel,administrateur.Adresse,administrateur.sexe,administrateur.Description,administrateur.Date_Naiss,administrateur.Photo FROM administrateur,utilisateur where utilisateur.id_utilisateur=administrateur.id_utilisateur AND administrateur.id_utilisateur='".$data->id."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_admin"] = $row["id_admin"];
        $tmp["Nom"] = $row["Nom"];
        $tmp["Prenom"] = $row["Prenom"];
        $tmp["Tel"] = $row["Tel"];
        $tmp["Adresse"] = $row["Adresse"];
        $tmp["Email"] = $row["Email"];
        $tmp["MDP"] = $row["MDP"];
        $tmp["id_utilisateur"] = $row["id_utilisateur"];
        $tmp["sexe"] = $row["sexe"];
        $tmp["Description"] = $row["Description"];
        $tmp["Date_Naiss"] = $row["Date_Naiss"];
        $tmp["Photo"] = $row["Photo"];
        array_push($array, $tmp);
    
  }
}
$conn->close();
echo json_encode($array);




?>
