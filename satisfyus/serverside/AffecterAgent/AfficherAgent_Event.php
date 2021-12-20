<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT agent.Nom,agent.Prenom,tabjoin.id_agent,tabjoin.jour_intervention,tabjoin.mois_intervention,tabjoin.dates_intervention,tabjoin.temps_debut,tabjoin.temps_fin FROM tabjoin LEFT JOIN agent ON agent.id_agent=tabjoin.id_agent  WHERE tabjoin.id_event='".$data->idevent."' AND tabjoin.status='en cour'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_agent"] = $row["id_agent"];
        $tmp["Nom"] = $row["Nom"];
        $tmp["Prenom"] = $row["Prenom"];
        $tmp["jour_intervention"] = $row["jour_intervention"];
        $tmp["mois_intervention"] = $row["mois_intervention"];
         $tmp["dates_intervention"] = $row["dates_intervention"];
        $tmp["temps_debut"] = $row["temps_debut"];
        $tmp["temps_fin"] = $row["temps_fin"];
      
      
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
