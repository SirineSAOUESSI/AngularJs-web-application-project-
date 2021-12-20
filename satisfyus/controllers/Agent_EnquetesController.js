import {enquete} from '../models/enquete.js';
function Agent_EnquetesController($scope,$http,apiUrl,$rootScope,$location)
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
     
        $http.post(apiUrl+'agent/AfficherAgent.php',use).then((response)=>{
            $scope.user=response.data;
            $scope.user= $scope.user[0];
            console.log($scope.user);
       
            var agent=
            {
              idAgent:$scope.user.id_agent
            }
          $http.post(apiUrl+'events/AfficherTabjoin.php',agent).then((response)=>{
                  $scope.Events_agent=response.data;
                  console.log($scope.Events_agent);
                
                 
          });
           
        });

     
    })
    $scope.Repondre=function(q)
    {
        $http.get(apiUrl+'enquete/AfficherListEnquetes.php').then((response)=>{
            $scope.listenquete=enquete.load(response.data);
            $scope.Enquete=new Array();
              console.log($scope.Enquete);
             let verif=1;
             let j=0;
             for(let i=0;i<($scope.listenquete).length;i++)
             {  
                    j=0;
                    while((j<($scope.Enquete).length) && (verif==1))
                    {
                         if($scope.Enquete[j].Date_creation==$scope.listenquete[i].Date_creation)
                         {
                             verif=0;
                             
                         }
                          j++;
                    }
                    if(verif==1)
                    {
                     $scope.Enq= new enquete();
                     $scope.Enq=$scope.listenquete[i];
                     $scope.Enquete[j]=$scope.Enq;
                    }
                    else
                    {
                        verif=1;
                    }
                   
             }
             console.log($scope.listenquete);
             $scope.Enquete_i=new Array();
              j=0;
             for(let i=0;i<$scope.listenquete.length;i++)
             {
                 if ($scope.listenquete[i].id_enquete==q.id_enquete)
                 {
                     $scope.Enquete_i[j]= $scope.listenquete[i];
                     j++;  
                 }
             }
             console.log($scope.Enquete_i);
              $rootScope.enquete=$scope.Enquete_i;
             });
       
         

    }
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
export{Agent_EnquetesController};