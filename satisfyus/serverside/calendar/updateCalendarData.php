<?php
include 'configDataBase.php';


	$title=$_POST['title'];
	$id_enquete=$_POST['id_enquete'];


	$reqdel="SELECT * FROM `events` WHERE id_enquete=".$id_enquete;
	$stmt = $dbHandle->query($reqdel); 
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
	if(!$row)
	{
		$req="INSERT INTO `events`(`title`,`id_enquete`) VALUES ('".$title."','".$id_enquete."')";
			$dbHandle->exec($req);

    }

	
	echo json_encode(["response"=>"ok"]);



?>