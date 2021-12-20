<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "insert into enquete (Date_creation,Titre,Description,id_client) values('".$data->date."','".$data->titre."','".$data->descrip."','".$data->idclient."');";
if ($conn->query($sql1) === TRUE) {
  
    $sql2 ="SELECT id_enquete,Date_creation FROM enquete ORDER BY id_enquete DESC LIMIT 1";
    $result = $conn->query($sql2);
    $array = array();
    if($result->num_rows>0)
    {
     while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_enquete"] = $row["id_enquete"];
        $tmp["Date_creation"] = $row["Date_creation"];
        array_push($array, $tmp);
     }
     }
    $conn->close();
    echo json_encode($array); 
} 
else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}


?>
