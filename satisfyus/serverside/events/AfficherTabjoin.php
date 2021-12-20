<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT tabjoin.id_event,events.id_enquete,tabjoin.jour_intervention,tabjoin.mois_intervention,tabjoin.dates_intervention,tabjoin.temps_debut,tabjoin.temps_fin,tabjoin.status,tabjoin.id_agent ,events.title FROM tabjoin LEFT JOIN events ON tabjoin.id_event=events.id_event where id_agent='".$data->idAgent."' AND status='en cour'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_event"] = $row["id_event"];
        $tmp["id_enquete"] = $row["id_enquete"];
        $tmp["status"] = $row["status"];
        $tmp["id_agent"] = $row["id_agent"];
        $tmp["jour_intervention"] = $row["jour_intervention"];
        $tmp["mois_intervention"] = $row["mois_intervention"];
        $tmp["dates_intervention"] = $row["dates_intervention"];
        $tmp["temps_debut"] = $row["temps_debut"];
        $tmp["temps_fin"] = $row["temps_fin"];
        $tmp["title"] = $row["title"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
