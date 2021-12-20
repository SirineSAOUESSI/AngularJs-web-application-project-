function EventsController($scope,$http,apiUrl,$location,$uibModal,$rootScope,$routeParams)
{    /**************************Data Table *********************/
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
     /***************************List Events termine *******************************************/
     $scope.ListEvents=[];
     data_Events();
     function data_Events(){
         $http.get(apiUrl+'events/ListEvents.php').then((response)=>{
        $scope.ListEvents=response.data;
        console.log($scope.ListEvents);
        $scope.List_Termine=new Array();
        let m=0;
           $http.get(apiUrl+'events/ListEvents_enCour.php').then((response)=>{
           $scope.ListEvents_Cour=response.data;
          console.log($scope.ListEvents_Cour);
           console.log($scope.ListEvents);
           for(let i=0;i<$scope.ListEvents.length;i++)
           {
            
                let j=0;
                let test=true;
                while((j<$scope.ListEvents_Cour.length)&&(test==true))
                {
                    if(($scope.ListEvents_Cour[j].id_event==$scope.ListEvents[i].id_event)&&($scope.ListEvents_Cour[j].id_agent==$scope.ListEvents[i].id_agent))
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
            $scope.l_termine=$scope.List_Termine.length;
        
     });
     }
    /***************************List Events En Cour*******************************************/
    $scope.ListEvents_EnCour=[];
    data_EventsEnCour();
    function data_EventsEnCour(){
        $http.get(apiUrl+'events/ListEvents_enCour.php').then((response)=>{
       $scope.ListEvents_EnCour=response.data;
    });
    }
    /***************************List Events Termine*******************************************/
      $scope.ListEvents_Termine=[];
      data_EventsTermine();
      function data_EventsTermine(){
          $http.get(apiUrl+'events/ListEvents_enCour.php').then((response)=>{
         $scope.ListEvents_Termine=response.data;
      });
      }
    /*********************************Statistic Event**********************************/
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
    /*********************************List Agent  d'un Event En Cour**********************************/
    $scope.Agents=function(event){
        let ev=event;
        $scope.modalInstance =$uibModal.open({
                    templateUrl:'views/popup/enquete/agents_Event.html',
                    windowClass:'medium',
                    controller:'ctrEventController',
                    size:"lg",
                     scope: $scope,
                    resolve: {
                        title: function () {
                            return $scope.title = 'Agents  d un Event';
                        },
                        instance: function () {
                            return $scope.instance = ev;
                        }
                    }
                   
                })
             $scope.modalInstance.result.then(()=>{
                swal('Infromation','Enregistrement avec succés','success');
                $scope.ListEvents_EnCour=[];
                data_EventsEnCour();
                
                
             },()=>{});
          
        };
 /*********************************List Agent  d'un Event Termine**********************************/
    $scope.Agents_Termine=function(list){
        let obj=list;
        $scope.modalInstance =$uibModal.open({
                    templateUrl:'views/popup/enquete/agents_EventTermine.html',
                    windowClass:'medium',
                    controller:'ctrEventController_Termine',
                    size:"lg",
                     scope: $scope,
                    resolve: {
                        title: function () {
                            return $scope.title = 'Agents  d un Event Termine';
                        },
                        termine: function () {
                            return $scope.termine = obj;
                        }
                    }
                   
                })
             $scope.modalInstance.result.then(()=>{
                swal('Infromation','Enregistrement avec succés','success');
                data_Events();
             },()=>{});
          
        };
};
function ctrEventController($scope,$http,apiUrl)
{   
    /*****Intialiser variables *****/
  $scope.agent={};
  /*******************List Agents***************/
  $scope.List_Agent=[];
  agents();
  $scope.modalInstance.dismiss();
  function agents(){ 
   $http.get(apiUrl+'agent/ListAgents.php').then((response)=>{
  $scope.List_Agent=response.data;
  console.log($scope.List_Agent);
 
   });
   }
  
  /******************Fermer Popup ***********/
   $scope.cancel=function()
  {
      $scope.modalInstance.dismiss();
  }
/*******************List Agent  d'un Event En Cour***********/
   $scope.ListAgent_Event=[];
   data();
   function data(){
       var event={idevent:$scope.instance.id_event}
    $http.post(apiUrl+'AffecterAgent/AfficherAgent_Event.php',event).then((response)=>{
   $scope.ListAgent_Event=response.data;
   console.log($scope.ListAgent_Event);
    });
    }

 
/*******************Annuler Agent d'un Event ***********/
  $scope.Annuler=function(agent)
  { var annuler={
        idevent:$scope.instance.id_event,
        idagent:agent.id_agent
      }
    swal({
      title: "Question",
      text: "Voulez vous vraiment supprimer cet event?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        $http.post(apiUrl+'AffecterAgent/AnnulerAgent_Event.php',annuler).then((response)=>{
            console.log(response.data);
            data();
     
        $scope.modalInstance.close();
      if(response.data=="supression event effectuée"){
    swal('Information',response.data.message,"success");
    
      }
      else{
        swal('Information',response.data.message,"error");
      }
      });
      } else {
       swal('opération annuler');
      }
    });
      
  }

}
function ctrEventController_Termine($scope,$http,apiUrl)
{   
  
  /******************Fermer Popup ***********/
   $scope.cancel=function()
  {
      $scope.modalInstance.dismiss();
  }

 /*******************List Agent  d'un Event En Termine***********/
  $scope.Agent_EventTermine=[];
  data_Termine();
  function data_Termine(){
      var event1={idevent:$scope.termine.id_event}
   $http.post(apiUrl+'AffecterAgent/AfficherAgent_EventTermine.php',event1).then((response)=>{
  $scope.Agent_EventTermine=response.data;
  console.log($scope.Agent_EventTermine);
   });
   }


}
export {EventsController,ctrEventController,ctrEventController_Termine};