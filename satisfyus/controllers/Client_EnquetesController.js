import {enquete} from '../models/enquete.js';
function Client_EnquetesController($scope,$http,apiUrl,$rootScope,$location)
{  
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
     
        $http.post(apiUrl+'client/AfficherClient.php',use).then((response)=>{
            $scope.user=response.data;
            $scope.user= $scope.user[0];
            console.log($scope.user);
            var client={
                idclient:$scope.user.id_client
            }
            /****************List Enquete En Cours**********/
        $http.post(apiUrl+'EventsClient/ListEnquete_Cours.php',client).then((response)=>{
          $scope.Events_client=response.data;
          console.log($scope.Events_client);
        $http.post(apiUrl+'EventsClient/ListEnquete.php',client).then((response)=>{
          $scope.ListEvents=response.data;
          console.log($scope.ListEvents);
          $scope.List_Termine=new Array();
          let m=0;
          /*************List Enquete Termine**************** */
           for(let i=0;i<$scope.ListEvents.length;i++)
            {
        
            let j=0;
            let test=true;
            while((j<$scope.Events_client.length)&&(test==true))
            {
                if(($scope.Events_client[j].id_enquete==$scope.ListEvents[i].id_enquete))
                {
                    test=false;
                }
                else
                j++;
            }
            if (test==true)
            {
                $scope.List_Termine[m]=$scope.ListEvents[i];
                m++;
            }
           }
      
    

        });
        });
           
        });

     
    })

 /**********************Stastisic d'une Enquete**************************/
    $scope.satistic=function(event){
        $scope.event=event;
        //$rootScope.Event_i=event;
         var enquete=
         {
            id_enquete:$scope.event.id_enquete
         }
        $http.post(apiUrl+'uploads/Id_statistic.php',enquete).then((response)=>{
            $scope.ListEvents_Termine=response.data;
            console.log($scope.ListEvents_Termine);
         });
         $location.path('/statistic');
     
           
     }
}
export{Client_EnquetesController};