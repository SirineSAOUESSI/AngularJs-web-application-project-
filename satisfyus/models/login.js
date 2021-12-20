var log=angular.module("log",[]);
log.factory("login", function ($http)
{
  /*return {
    fighters: function() {
        return $http.get("../ServerSide/connexion.php").then(function(response) {
            return response.data;
            
        });
    }
    
}*/
var userr={};

userr.getStatus=function()
{
  return $http.get('../ServerSide/page.php');
}
userr.connecter=function(email,pwd)
{
  var senData={
    user: email,
    pass: pwd
} 
 return $http.post('../ServerSide/connexion.php',senData);
}
userr.getLtClients=function()
{
  return $http.get('../ServerSide/ListClients.php');
}
return userr;
  
});
