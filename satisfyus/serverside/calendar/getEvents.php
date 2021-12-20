<?php
include 'configDataBase.php';


$id_agent=$_POST['id_agent'];
$id_event=$_POST['id_event'];

 $req="SELECT * FROM `tabjoin` WHERE id_agent='".$id_agent."' AND id_event='".$id_event."'";
 $stmt = $dbHandle->query($req); 
 $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
 $json = json_encode($result);
 echo $json;






?>