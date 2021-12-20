<?php
class auth
 {
     private $_email="";
     private $_mdp="";
     private $_status="";
     public function remplir()
     {
        /*$this->_email="sirine";
        $this->_mdp="7485";
        $this->_status="client";*/
        echo $this->_status;
     }

 }
 session_start();
 $authen=new auth;
 $authen->remplir();

 echo $authen;
?>