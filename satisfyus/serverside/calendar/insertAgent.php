
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
  $req="INSERT INTO `tabjoin`(`jour_intervention`,`mois_intervention`,`dates_intervention`,`temps_debut`,`temps_fin`,`status`,`id_agent`,`id_event`) VALUES('".$strjours."','".$strmois."','".$strdate."','".$time_debut."','".$time_fin."','".$status."','".$id_agent."','".$id_event."')";
	$dbHandle->exec($req);
	
	echo json_encode(["response"=>"ok"]);

}

?>