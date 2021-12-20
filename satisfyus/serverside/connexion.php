<?php
session_start();
include 'connectBase.php';
$data=json_decode(file_get_contents('php://input'));
$use=$data->user;
$pas=$data->pass;

$sql = "SELECT * FROM utilisateur where Email='".$use."'and MDP=MD5('".$pas."')";

$result = $conn->query($sql);

$array = array();

if($result->num_rows>0)
{

  while($row = $result->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["id_utilisateur"] = $row["id_utilisateur"];
        $tmp["Email"] = $row["Email"];
        $tmp["MDP"] = $row["MDP"];
        $tmp["Status"] = $row["Status"];
        array_push($array, $tmp);
        $status=$row["Status"];
        $id=$row["id_utilisateur"];
  }
}

if($status=="Admin")
{
  $sql1 = "SELECT administrateur.Photo FROM administrateur where id_utilisateur='".$id."'";

}
else if($status=="Client")
{
  $sql1 = "SELECT client.Photo FROM client where id_utilisateur='".$id."'";
}
else
{ 
  $sql1 = "SELECT agent.Photo FROM agent where id_utilisateur='".$id."'";
}

$result1 = $conn->query($sql1);

$array1 = array();

if($result1->num_rows>0)
{

  while($row = $result1->fetch_assoc()) {
  	
        $tmp=array();
        $tmp["Photo"] = $row["Photo"];
        array_push($array1, $tmp);
        $image=$row["Photo"];
  }
}
 if(!empty($array))
{
    $_SESSION['user']=$use;
    $_SESSION['pass']=$pas;
    $_SESSION['status']=$status;
    $_SESSION['idUser']=$id;
    $_SESSION['photo']=$image;
   
   
}

$data=json_encode($array);
$conn->close();
json_encode($array1);
echo $data;


?>
