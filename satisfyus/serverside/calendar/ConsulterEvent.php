<?php
include 'configDataBase.php';

$id_enquete=$_POST['id_enquete'];

 $req="SELECT * FROM `events` WHERE id_enquete=".$id_enquete;
 $stmt = $dbHandle->query($req); 
 $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
 $json = json_encode($result);
 echo $json;






?>