<?php

include '../connectBase.php';
$sql = "SELECT distinct agent.Nom,agent.Prenom,utilisateur.Email,events.title,tabjoin.id_agent,tabjoin.id_event FROM tabjoin LEFT JOIN agent ON tabjoin.id_agent=agent.id_agent LEFT JOIN utilisateur ON agent.id_utilisateur=utilisateur.id_utilisateur LEFT JOIN events ON tabjoin.id_event=events.id_event where tabjoin.status='Termine'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["title"] = $row["title"];
        $tmp["Nom"] = $row["Nom"];
        $tmp["Prenom"] = $row["Prenom"];
        $tmp["Email"] = $row["Email"];
        $tmp["id_agent"] = $row["id_agent"];
        $tmp["id_event"] = $row["id_event"];
        $tmp["Email"] = $row["Email"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
