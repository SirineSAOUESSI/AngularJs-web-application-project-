<?php
include '../connectBase.php';
/*$ds = DIRECTORY_SEPARATOR;  
$storeFolder = '../../assets/img/user/';   
 
if (!empty($_FILES)) {
     
    $tempFile = $_FILES['file']['tmp_name'];                     
      echo $tempFile ;
    $targetPath = dirname( __FILE__ ) . $ds. $storeFolder . $ds;  
    echo $targetPath ;
    $targetFile =  $targetPath. $_FILES['file']['name'];  
 
    move_uploaded_file($tempFile,$targetFile); 
     
}
else
{
    echo"some Error";
}*/
if(isset($_POST['name']) ) // si formulaire soumis
{
    $content_dir = '../../assets/img/user/'; // dossier où sera déplacé le fichier

    $tmp_file = $_FILES['file']['tmp_name'];

  
    if( !is_uploaded_file($tmp_file) )
    {
        exit("Le fichier est introuvable");
    }

    // on vérifie maintenant l'extension
    $type_file = $_FILES['file']['type'];

    if( !strstr($type_file, 'jpg') && !strstr($type_file, 'jpeg') && !strstr($type_file, 'bmp') && !strstr($type_file, 'gif') && !strstr($type_file, 'png'))
    {
        exit("Le fichier n'est pas une image");
    }

    // on copie le fichier dans le dossier de destination
    $name_file = $_FILES['file']['name'];

    if( !move_uploaded_file($tmp_file, $content_dir . $name_file) )
    {
        exit("Impossible de copier le fichier dans $content_dir");
    }

    echo  $name_file;
}
?>