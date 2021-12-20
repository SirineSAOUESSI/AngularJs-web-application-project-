import {agent} from '../models/agent.js';
import {event} from '../models/event.js';

function AgentEspace($scope,$http,apiUrl,$uibModal,$document)
{
    /**************************Data Table *********************/
      angular.element(document).ready(function() {
        // Setup - add a text input to each footer cell
        $('#example tfoot th').each(function() {
          var title = $(this).text();
          $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });
        console.log('  document ready function, add search by column feature ');
        var table = $('#example').DataTable();
        // Apply the search
        table.columns().every(function() {
          var that = this;
    
          $('input', this.footer()).on('keyup change', function() {
            if (that.search() !== this.value) {
              that
                .search(this.value)
                .draw();
            }
          });
        });
      });
  $scope.base = $document[0].baseURI;
    /*****************liste des agents*****************/
    $scope.listagentt=[];
    data_listagent();
    function data_listagent()
    {
    $http.get(apiUrl+'events/ListTabjoin_parAgent.php').then((response)=>{
            $scope.listagentt=response.data;
            console.log($scope.listagentt);
          
           
    });};
  /*****************Date Format *****************/
   function formatDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
    
        return [year, month, day].join('-');
    }
  /*****************liste des agents Treminées*****************/
  $scope.list_Termine=[];
  data();
  function data()
  {
  $http.get(apiUrl+'events/ListeEventsTermine.php').then((response)=>{
          $scope.list_Termine=response.data;
          console.log($scope.list_Termine);
        
         
  });};
  /***************** Popup les Enquetes d'Agent*****************/
    $scope.calendar=function(data){
            let Obj=data;
            $scope.modalInstance =$uibModal.open({
                        templateUrl:'views/popup/agent/EnqueteAgent.html',
                        windowClass:'medium',
                        controller:'ctrAgentEspaceController',
                        size:'lg',
                         scope: $scope,
                        resolve: {
                            title: function () {
                                return $scope.title = 'Enquete D agent ';
                            },
                            instance: function () {
                              
                                return $scope.instance=Obj;
                              
                            }
                        }
                       
                    })
                 $scope.modalInstance.result.then(()=>{
                    swal('Infromation','Enregistrement avec succés','success');
                    data();
                
                   
                 },()=>{});
              
            };

            $scope.return=function(x,y)
            {
               var id={
                 idevent:x,
                 idagent:y
               }
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui'
              }).then((result) => {
                if (result.value) {

                  $http.post(apiUrl+'events/Modifier_enCour.php',id).then((response)=>{
                    console.log(response.data);
                  data();
               
                 });
                  Swal.fire(
                    'retourner!',
                    'retourner Agent.',
                    'success'
                  )
                }});
            }
  
};
function ctrAgentEspaceController($scope,$http,apiUrl,$uibModal,$document)
{

/***********************Events d'un Agent  *******************/
    var agent=
    {
      idAgent:$scope.instance.id_agent
    }
  $http.post(apiUrl+'events/AfficherTabjoin.php',agent).then((response)=>{
          $scope.Events_agent=response.data;
          console.log($scope.Events_agent);
        
         
  });



$scope.base = $document[0].baseURI; 
console.log($scope.instance.id_agent);
var id={
    idAgent:$scope.instance.id_agent
}
/*****************  Affecter Enquete d'Agent*****************/
$scope.Affecter=function(data){
  let Obj=data;
  
   console.log($scope.ind);
  $scope.modalInstance =$uibModal.open({
              templateUrl:'views/popup/enquete/Affecter_Enquete.html',
              windowClass:'medium',
              controller:'ctrEditer_EventsController',
              size:'lg',
               scope: $scope,
              resolve: {
                  title: function () {
                      return $scope.title = 'Affecter Enquete';
                  },
                  instance: function () {
                      $scope.instance = new Event();
                      return $scope.instance=Obj;
                    
                  }
                
              }
             
          })
       $scope.modalInstance.result.then(()=>{
          swal('Infromation','Enregistrement avec succés','success');
          data();
        
       },()=>{});
    
  };
  $scope.cancel=function()
  {
      $scope.modalInstance.dismiss();
  }

}
function ctrEditer_EventsController($scope,$http,apiUrl,$uibModal,$document)
{
 console.log($scope.instance);
 $scope.index=$scope.instance.id_event;
 $scope.Titre= $scope.instance.title;
 
}
export{AgentEspace,ctrAgentEspaceController,ctrEditer_EventsController};