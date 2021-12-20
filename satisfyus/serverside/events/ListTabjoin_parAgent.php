<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT distinct agent.Nom,agent.Prenom,agent.id_agent FROM tabjoin LEFT JOIN agent ON agent.id_agent=tabjoin.id_agent  WHERE tabjoin.status='en cour'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_agent"] = $row["id_agent"];
        $tmp["Nom"] = $row["Nom"];
        $tmp["Prenom"] = $row["Prenom"];

      
      
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
