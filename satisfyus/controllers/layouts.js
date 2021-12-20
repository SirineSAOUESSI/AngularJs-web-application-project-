import {agent} from '../models/agent.js';
import {client} from '../models/client.js';
import {admin} from '../models/admin.js';
/********************Menu  User**********************/
function Menu($scope,$http,Auth,apiUrl,$document)
{   $scope.base = $document[0].baseURI;
    Auth.getAuth().then((auth)=>{
        $scope.connexion=auth.data;
        console.log($scope.connexion);
     });
              

}
/********************Navbar User**********************/
function navbar($scope,$http,apiUrl,$document,Auth,fileUpload,$location)
{
    $scope.base = $document[0].baseURI;
   
    Auth.getimage().then((auth)=>{
        $scope.image=auth.data;
        console.log($scope.image);
     
    });
    $http.get(apiUrl+'Profile.php').then((response)=>{
        $scope.auth=response.data;
        $scope.res=$scope.auth.split(',');
        $scope.id=$scope.res[0];
        $scope.status=$scope.res[1];
        console.log($scope.id);
        console.log($scope.status);
       
        var use={
            id:$scope.id
        }
     
        $scope.user=new client();
        if($scope.status=='Admin')
        {
            $scope.user=new admin();
         
           $http.post(apiUrl+'admin/AfficherAdmin.php',use).then((response)=>{
                $scope.user=response.data;
                $scope.user= $scope.user[0];
                console.log($scope.user);
                $scope.image=$scope.user.Photo;
                if($scope.image=="")
                {
                    $scope.image="default.png";
                }
            });
          
        }
        else if($scope.status=='Client')
        {  

           
          
            $scope.user=new client();
            
            $http.post(apiUrl+'client/AfficherClient.php',use).then((response)=>{
                $scope.user=response.data;
                $scope.user= $scope.user[0];
                console.log($scope.user);
                $scope.image=$scope.user.Photo;
                if($scope.image=="")
                {
                    $scope.image="default.png";
                }
                $http.post(apiUrl+'notification/AfficherNotification_Client.php',$scope.user.id_client).then((response)=>{
                    $scope.notif=response.data;
                    console.log($scope.notif);
                    $scope.Nombre1=$scope.notif.length;
                    $scope.Nombre=$scope.notif.length;
                   /*if($scope.notif.length!=0)
                   {
                    
                    for(let i=0;i<$scope.notif.length;i++)
                    {
                        growl.warning('This is a warning mesage.',{title: 'Warning!'});
                    }
                   }*/
                  
                });
            });
          
        }
        else if($scope.status=='Agent')
        {    $scope.user=new agent();
           
            $http.post(apiUrl+'agent/AfficherAgent.php',use).then((response)=>{
                $scope.user=response.data;
                $scope.user= $scope.user[0];
                console.log($scope.user);
                $scope.image=$scope.user.Photo;
                if($scope.image=="")
                {
                    $scope.image="default.png";

                }
                $http.post(apiUrl+'notification/Agent/AfficherNotification_Agent.php',$scope.user.id_agent).then((response)=>{
                    $scope.notif=response.data;
                    console.log($scope.notif);
                    $scope.Nombre1=$scope.notif.length;
                    $scope.Nombre=$scope.notif.length;
                   /*if($scope.notif.length!=0)
                   {
                    
                    for(let i=0;i<$scope.notif.length;i++)
                    {
                        growl.warning('This is a warning mesage.',{title: 'Warning!'});
                    }
                   }*/
                  
                });
            });
          
             
        }
      
         });

         $scope.Modifier=function()
         {
            console.log($scope.user);
           
            var file = $scope.myFile;
            console.log('file is ' );
            console.dir(file);
    
            var uploadUrl = "serverside/uploads/upload.php";
         
            var text = $scope.name;
            fileUpload.uploadFileToUrl(file, uploadUrl, text);
            $scope.File=new Array();
            $scope.File=file;
            alert(file);
            if($scope.status=='Admin')
        {
            var User={
                idUtilisateur:$scope.user.id_utilisateur,
                idAdmin:$scope.user.id_admin,
                nom: $scope.user.Nom,
                prenom:$scope.user.Prenom,
                dateNaiss: $scope.user.Date_Naiss,
                tel:$scope.user.Tel,
                sexe: $scope.user.sexe,
                email:$scope.user.Email,
                adres:$scope.user.Adresse,
                mdp:$scope.user.MDP,
                descrip: $scope.user.Description,
                image:$scope.File.name
              }
            $http.post(apiUrl+'admin/ModifierAdmin.php',User).then((response)=>{
              $scope.rsu=response.data;
              console.log($scope.rsu);
             });
          
        }
        else if($scope.status=='Client')
        {  
            var User={
                idUtilisateur:$scope.user.id_utilisateur,
                idClient:$scope.user.id_client,
                nom: $scope.user.Nom,
                prenom:$scope.user.Prenom,
                dateNaiss: $scope.user.Date_Naiss,
                tel:$scope.user.Tel,
                sexe: $scope.user.sexe,
                email:$scope.user.Email,
                adres:$scope.user.Adresse,
                mdp:$scope.user.MDP,
                descrip: $scope.user.Description,
                image:$scope.File.name
              }
            $http.post(apiUrl+'client/ModifierClient.php',User).then((response)=>{
                $scope.rsu=response.data;
                console.log($scope.rsu);
             })
          
        }
        else if($scope.status=='Agent')
        {  var User={
            idUtilisateur:$scope.user.id_utilisateur,
            idAgent:$scope.user.id_agent,
            nom: $scope.user.Nom,
            prenom:$scope.user.Prenom,
            dateNaiss: $scope.user.Date_Naiss,
            tel:$scope.user.Tel,
            sexe: $scope.user.sexe,
            email:$scope.user.Email,
            adres:$scope.user.Adresse,
            mdp:$scope.user.MDP,
            descrip: $scope.user.Description,
            image:$scope.File.name
          }
            $http.post(apiUrl+'agent/ModifierAgent.php',User).then((response)=>{
                $scope.rsu=response.data;
                console.log($scope.rsu);
             })
             
        }
         }
      $scope.show=function(n)
      {
        var delNotification=
        {
            id_notif:n.id
        }
        if($scope.status=='Client')
       {
        $http.post(apiUrl+'notification/SupprimerNotification_Client.php',delNotification).then((response)=>{
            $scope.rsu=response.data;
            console.log($scope.rsu);
         })
         $location.path("./enquetes");
        }
        else if ($scope.status=='Agent')
        {
        $http.post(apiUrl+'notification/Agent/SupprimerNotification_Agent.php',delNotification).then((response)=>{
                $scope.rsu=response.data;
                console.log($scope.rsu);
             })
             $location.path("./Eventscours");
        }
      }
      $scope.logout=function()
      {
        $http.get(apiUrl+'LogOut.php').then((response)=>{
            $scope.resu=response.data;
           location.href= $scope.base+'Login.php';
         })
      }
}
export {Menu,navbar};