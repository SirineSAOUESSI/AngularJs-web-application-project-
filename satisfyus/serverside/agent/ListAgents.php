<?php
session_start();

include '../connectBase.php';
$sql = "SELECT agent.id_utilisateur,agent.id_agent,agent.Nom,agent.Prenom,utilisateur.Email,utilisateur.MDP,agent.Tel,agent.Adresse,agent.sexe,agent.Description,agent.Date_Naiss,agent.Photo FROM agent,utilisateur where utilisateur.id_utilisateur=agent.id_utilisateur";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_agent"] = $row["id_agent"];
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
