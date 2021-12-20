<?php
session_start();
if(!isset($_SESSION['user'])||!isset($_SESSION['pass']) || !isset ($_SESSION['status']))
{
  
    header('Location:Login.php');
}


?>