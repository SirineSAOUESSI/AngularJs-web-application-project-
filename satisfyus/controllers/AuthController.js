function Authn($scope,$http,Url,$document,$window)
{   $scope.base = $document[0].baseURI;
   /********************Connecter********************************/
    $scope.Entrer=function()
    {   
         console.log($scope.email);
         console.log($scope.Password);
         if ($scope.email=="")
         {
            $scope.CtrEmail="Donner votre Email";
         }
         if($scope.Password=="")
         {
            $scope.Ctrpassword="Donner votre mot de passe";
         }
        else{ 
            var senData={
                user: $scope.email,
                pass: $scope.Password
            } 
            $http.post(Url+'connexion.php',senData).then((response)=>{
                $scope.resultat=response.data;
                console.log($scope.resultat);
                console.log(($scope.resultat).length);
              
                if(($scope.resultat).length<0)
                {
                     $window.location.href="Login.php";
                     $scope.ctrCompte="Compte introuvable";
                }
                else if (($scope.resultat).length>0)
                {
                   $window.location.href="./accueil"; 
                   
                }
                 });   
                 $http.get(Url+'page.php')
                 .then((response)=>{
                   $scope.connexion=response.data;
                
                 }); 
                
               }
      }
    /*************************Envoyer Email**********************************/  
    $scope.sendemail=function()
    {
       console.log($scope.email);
       
       var mail={
          email:$scope.email
       }
       $http.post(Url+'email/mail.php',mail).then((response)=>{
       $scope.x=response.data;
       console.log($scope.x);})
    }
}
export {Authn};