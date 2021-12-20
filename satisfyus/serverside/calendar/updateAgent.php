<?php
include 'configDataBase.php';
function strintervention($tbl){
	$max = sizeof($tbl);
		$str="";
	for ($i=0; $i <$max ; $i++) { 
		if($tbl[$i]['value']=="true"){
			if($str=="")
				$str=$str.$tbl[$i]['position'];
				else
			$str=$str.','.$tbl[$i]['position'];
		}
	}
	return $str;
}
if(isset($_POST['jour'])){
    $id_agent=$_POST['id_agent'];
    $id_event=$_POST['id_event'];
    $time_debut=$_POST['time_debut'];
    $time_fin=$_POST['time_fin'];
    $status=$_POST['status'];
	$strmois=strintervention($_POST['mois']);
    $strjours=strintervention($_POST['jour']);
	$datedebut=date('Y-m-d',strtotime($_POST['date'])); 
    $datefin=date('Y-m-d',strtotime($_POST['date2'])); 
    $strdate=$datedebut.','.$datefin;
     
  //ajouter les nouveaux
  $req="UPDATE `tabjoin` SET jour_intervention='".$strjours."',mois_intervention='".$strmois."',dates_intervention='".$strdate."',temps_debut='".$time_debut."',temps_fin='".$time_fin."', status='".$status."' WHERE id_event='".$id_event."' AND id_agent='".$id_agent."'";

	$dbHandle->exec($req);
	
	echo json_encode(["response"=>"ok"]);

}

?>