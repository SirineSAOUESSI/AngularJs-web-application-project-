<?php
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$id=$data->id_enquete;
$_SESSION['id_statistic']=$id;
echo $_SESSION['id_statistic']
?>
