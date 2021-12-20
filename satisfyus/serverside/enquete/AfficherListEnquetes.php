<?php
session_start();
include '../connectBase.php';
$sql = "SELECT question.id_question,question.Label,question.Type,enquete.id_enquete,enquete.id_client,enquete.Date_creation,enquete.Titre,enquete.Description FROM enquete,question where enquete.id_enquete=question.id_enquete";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_question"] = $row["id_question"];
        $tmp["id_enquete"] = $row["id_enquete"];
        $tmp["id_client"] = $row["id_client"];
        $tmp["Label"] = $row["Label"];
        $tmp["Titre"] = $row["Titre"];
        $tmp["Description"] = $row["Description"];
        $tmp["Type"] = $row["Type"];
        $tmp["Date_creation"] = $row["Date_creation"];
        array_push($array, $tmp);
  }
}
$conn->close();
echo json_encode($array);




?>
