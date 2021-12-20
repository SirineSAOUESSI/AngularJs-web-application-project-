function ServiceAuth($http)
{
    var userr={};
    userr.getAuth=function()
    { 
         return $http.get('./ServerSide/page.php');
    };
    userr.getimage=function()
    { 
         return $http.get('./ServerSide/image.php');
    };
    return userr;
}
export {ServiceAuth} ;