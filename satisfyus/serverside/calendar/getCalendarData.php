<?php
include 'configDataBase.php';
//ajouter les nouveaux
	$req="SELECT * FROM `tabjoin` WHERE `id_event`=".$_GET['idevent'];
$stmt = $dbHandle->query($req); 
$row = $stmt->fetch(PDO::FETCH_ASSOC);
if($row){
$mois=explode(',',$row['mois_intervention']);
$jours=explode(',',$row['jour_intervention']);
$dates=explode(',',$row['dates_intervention']);
$title=$row['title'];
$datedebut=$dates[0];
$datefin=$dates[1];

echo json_encode(['mois'=>$mois,'jours'=>$jours,'datedebut'=>$datedebut,'datefin'=>$datefin,'title'=>$title,'status'=>true]);
}
else echo json_encode(['status'=>false]);

?>