import {agent} from '../models/agent.js';
import {event} from '../models/event.js';
function EnqueteCoursController($scope,$http,apiUrl,$uibModal,$document)
{  $scope.base = $document[0].baseURI;
    $http.get(apiUrl+'agent/ListAgents.php').then((response)=>{
        $scope.listagent=response.data;
        console.log($scope.listagent);
        });
    $scope.calendar=function(data){
            let Obj=data;
            $scope.modalInstance =$uibModal.open({
                        templateUrl:'views/popup/admin/ModifierEnqueteAgent.html',
                        windowClass:'medium',
                        controller:'ctrAgentEspaceController',
                        size:'lg',
                         scope: $scope,
                        resolve: {
                            title: function () {
                                return $scope.title = 'Enquete D agent ';
                            },
                            instance: function () {
                                $scope.instance=new agent();
                                return $scope.instance=Obj;
                              
                            }
                        }
                       
                    })
                 $scope.modalInstance.result.then(()=>{
                    swal('Infromation','Enregistrement avec succés','success');
                    data();
                 },()=>{});
              
            };
            
};
function ctrModifierEnqueteAgent($scope,$http,apiUrl,$document)
{
  $scope.base = $document[0].baseURI;
console.log($scope.instance.id_agent);
var id={
    idAgent:$scope.instance.id_agent
}
$scope.Events_agent=[];
data();

function data(){
    $http.post(apiUrl+'events/AfficherEvent.php',id).then((response)=>{
   $scope.Events_agent=event.load(response.data);
          $scope.even=new event();  
         
          for(let i=0;i< $scope.Events_agent.length;i++)
          {
            $scope.tab=$scope.Events_agent[i].jour_intervention.split(',');
            $scope.tab2=$scope.Events_agent[i].jour_intervention.split(',');
            for(let j=0;j<$scope.tab.length;j++)
            {
                console.log($scope.tab[j]);
              
                switch ($scope.tab[j]) {
                    case "0":
                    $scope.tab[j] = "Dimanche";
                      break;
                    case "1":
                    $scope.tab[j] = "Lundi";
                      break;
                    case "2":
                    $scope.tab[j]= "Mardi";
                      break;
                    case "3":
                    $scope.tab[j] = "Mercredi";
                      break;
                    case "4":
                    $scope.tab[j] = "Jeudi";
                      break;
                    case "5":
                    $scope.tab[j] = "Vendredi";
                      break;
                    case "6":
                    $scope.tab[j] = "Samedi";
                  }
            }
            $scope.Events_agent[i].jour_intervention=$scope.tab.join(',');
            for(let j=0;j<$scope.tab2.length;j++)
            {
                switch ($scope.tab2[j]) {
                    case "0":
                    $scope.tab2[j] = "Janvier";
                      break;
                    case "1":
                    $scope.tab2[j] = "Février";
                      break;
                    case "2":
                    $scope.tab2[j]= "Mars";
                      break;
                    case "3":
                    $scope.tab2[j] = "Avril";
                      break;
                    case "4":
                    $scope.tab2[j] = "Mai";
                      break;
                    case "5":
                    $scope.tab2[j] = "Juin";
                      break;
                    case "6":
                    $scope.tab2[j] = "Juillet";
                    case "7":
                    $scope.tab2[j] = "Août";
                    case "8":
                    $scope.tab2[j] = "Septembre";
                    case "9":
                    $scope.tab2[j] = "Octobre";
                    case "10":
                    $scope.tab2[j] = "Novembre";
                    case "11":
                    $scope.tab2[j] = "Décembre";
                  }
            }
            $scope.Events_agent[i].mois_intervention=$scope.tab2.join(',');
          }
         
    });
}

}
export {EnqueteCoursController,ctrModifierEnqueteAgent};