<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql1 = "UPDATE utilisateur SET Email='".$data->email."', MDP=MD5('".$data->mdp."') where id_utilisateur='".$data->idUtilisateur."'";
if ($conn->query($sql1) === TRUE) {
    echo "Modification  utilisateur effectuée <br>";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}
$sql2 = "UPDATE client SET Nom='".$data->nom."', Prenom='".$data->prenom."', Adresse='".$data->adres."', Tel='".$data->tel."', Date_Naiss='".$data->dateNaiss."', sexe='".$data->sexe."', Description='".$data->descrip."', Photo='".$data->image."' where id_client='".$data->idClient."'";
if ($conn->query($sql2) === TRUE) {
    echo "Modification Client effectuée";
} else {
    echo "Error: " . $sql2 . "<br>" . $conn->error;
}

?>
