<?php 
session_start();
$data=json_decode(file_get_contents('php://input'));
include '../connectBase.php';
$sql = "SELECT * FROM utilisateur where Email='".$data->email."'";

$result = $conn->query($sql);

$array = array();

if($result->num_rows<0)
{
  echo"Compte n'existe pas";
}
else
{
// Génération d'une chaine aléatoire
function chaine_aleatoire($nb_car, $chaine = 'azertyuiopqsdfghjklmwxcvbn123456789')
{
    $nb_lettres = strlen($chaine) - 1;
    $generation = '';
    for($i=0; $i < $nb_car; $i++)
    {
        $pos = mt_rand(0, $nb_lettres);
        $car = $chaine[$pos];
        $generation .= $car;
    }
    return $generation;
}

$mdp=chaine_aleatoire(8);
$sql2 = "UPDATE utilisateur SET MDP=MD5('".$mdp."') where Email='".$data->email."'";
if ($conn->query($sql2) === TRUE) {
    echo "Modification  MDP effectuée <br>";
 
    $mailto =$data->email;
    $mailSub =" mot de passe";
    $mailMsg = "Votre nouvelle Mot de passe :".$mdp; 
    require 'PHPMailer-master/PHPMailerAutoload.php';
    $mail = new PHPMailer();
       $mail ->IsSmtp();
       $mail ->SMTPDebug = 0;
       $mail ->SMTPAuth = true;
       $mail ->SMTPSecure = 'ssl';
       $mail ->Host = "smtp.gmail.com";
       $mail ->Port = 465; // or 587
       $mail ->IsHTML(true);
       $mail ->Username = "sirinesouassi@gmail.com";
       $mail ->Password = "92571701m";
       $mail ->SetFrom("sirinesouassi@gmail.com");
       $mail ->Subject = $mailSub;
       $mail ->Body = $mailMsg;
       $mail ->AddAddress($mailto);
    
       if(!$mail->Send())
       {
           echo "Mail Not Sent";
       }
       else
       {
           echo "Mail Sent";
       }


} else {
    echo "Error: " . $sql2 . "<br>" . $conn->error;
}

  }
?>