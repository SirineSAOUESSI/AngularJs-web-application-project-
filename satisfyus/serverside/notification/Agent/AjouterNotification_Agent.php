
<?php
include '../../calendar/configDataBase.php';
    $id_agent=$_POST['id_agent'];
    $msg=$_POST['msg']; 
  //ajouter les nouveaux notification agent
   $req="INSERT INTO `notification_agent`(`message`,`id_agent`) VALUES('".$msg."','".$id_agent."')";
	$dbHandle->exec($req);
	echo json_encode(["response"=>"ok"]);



?>