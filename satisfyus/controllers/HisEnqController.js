import {enquete} from '../models/enquete.js';
function HisEnqController($http,$scope,apiUrl,$uibModal,$rootScope,$document,$location)
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
    //$scope.load=function(){
        $scope.listenquete=[];
        data();
      
    function data(){
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
               console.log($scope.Enquete);
            });
        }
 
       
    $scope.Details=function(q)
    {
        console.log($scope.listenquete);
        $scope.Enquete_i=new Array();
        let j=0;
        for(let i=0;i<$scope.listenquete.length;i++)
        {
            if ($scope.listenquete[i].Date_creation==q.Date_creation)
            {
                $scope.Enquete_i[j]= $scope.listenquete[i];
                j++;  
            }
        }
        console.log($scope.Enquete_i);
         $rootScope.enquete=$scope.Enquete_i;
         

    }
    $scope.supprimer=function(q){
        let id=q.id_enquete;
      //if(id==$scope.auth.id) return swal('Erreur','Compte déja  authentfié vous ne pouvez pas le supprimer','error');
      swal({
        title: "Question",
        text: "Voulez vous vraiment supprimer cette enquete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
        $http.post(apiUrl+'enquete/SupprimerEnquete.php',id).then((response)=>{
        if(response.data=="supression enquete effectuée"){
      swal('Information',response.data.message,"success");
      data();
        }
        else{
          swal('Information',response.data.message,"error");
        }
        });
        } else {
         swal('opération annuler');
        }
      });
      };

      $scope.Affecter=function(data,$index){
        let Obj=data;
         $scope.ind=$index;
         console.log($scope.ind);
        $scope.modalInstance =$uibModal.open({
                    templateUrl:'views/popup/enquete/Affecter_Enquete.html',
                    windowClass:'medium',
                    controller:'ctrEnqueteController',
                    size:'lg',
                     scope: $scope,
                    resolve: {
                        title: function () {
                            return $scope.title = 'Affecter Enquete';
                        },
                        instance: function () {
                            $scope.instance = new enquete();
                            return $scope.instance=Obj;
                          
                        },
                        index:function()
                        {
                             return $scope.index=$scope.ind+1;
                        }
                    }
                   
                })
             $scope.modalInstance.result.then(()=>{
                swal('Infromation','Enregistrement avec succés','success');
                data();
             },()=>{});
          
        };
        $scope.Repondre=function(q)
        {
            console.log($scope.listenquete);
            $scope.Enquete_i=new Array();
            let j=0;
            for(let i=0;i<$scope.listenquete.length;i++)
            {
                if ($scope.listenquete[i].Date_creation==q.Date_creation)
                {
                    $scope.Enquete_i[j]= $scope.listenquete[i];
                    j++;  
                }
            }
            console.log($scope.Enquete_i);
             $rootScope.enquete=$scope.Enquete_i;
             
    
        }
       $scope.statistic=function(q)  
       {
        console.log($scope.listenquete);
        $scope.Enquete_i=new Array();
        let j=0;
        for(let i=0;i<$scope.listenquete.length;i++)
        {
            if ($scope.listenquete[i].Date_creation==q.Date_creation)
            {
                $scope.Enquete_i[j]= $scope.listenquete[i];
                j++;  
            }
        }
        console.log($scope.Enquete_i);
         $rootScope.enquete=$scope.Enquete_i;
           $location.path('/statistiques');
       }
   


$scope.form=function()
{

    $location.path('/enquete');
}
    /*********************************List Agent  d'un Event**********************************/
    $scope.Agents=function(event){
        let ev=event;
        $scope.modalInstance =$uibModal.open({
                    templateUrl:'views/popup/enquete/agents_Event.html',
                    windowClass:'medium',
                    controller:'ctrEnqueteController',
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
                data();
             },()=>{});
          
        };

};
function ctrEnqueteController($scope,$http,apiUrl,$document)
{$scope.base = $document[0].baseURI;
    $scope.cli={};
    console.log($scope.index);
    $scope.Titre=$scope.instance.Titre;
    $scope.agents={};
    $scope.cancel=function()
    {
        $scope.modalInstance.dismiss();
    }
    $http.get(apiUrl+'agent/ListAgents.php').then((response)=>{
        $scope.listagent=response.data;
        console.log($scope.listagent);
        });
    $scope.Enregistrer=function(data)
    {
        
        console.log($scope.instance);
        console.log($scope.agents.selected.id_agent);
        var affecter={
            idagent:$scope.agents.selected.id_agent,
            idenquete:$scope.instance.id_enquete
        }
        $http.post(apiUrl+'agent/AjouterEnquete_Agents.php',affecter).then((response)=>{
            $scope.listagent=response.data;
            console.log($scope.listagent);
            });
            $scope.modalInstance.dismiss();
    }  
    
    $scope.les_agent=[];
    let i=0;
    $scope.id="";
  
    //Ajouter agent dans un liste <<les_agent>>
    $scope.add_agent=function()
    {
        /*console.log($scope.date1);
        console.log($scope.date2);
        console.log("hello");
       $scope.les_agent[i]=$scope.cli.selected.Prenom+" "+$scope.cli.selected.Nom;
        console.log($scope.les_agent);
        i++;
        console.log("hello");
        console.log( $scope.cli.selected[0]);*/
       // $scope.agentId=$scope.cli.selected.id_agent
       $scope.heure_debut = $('#m_timepicker_3').val();
       $scope.heure_fin = $('#m_timepicker_4').val();
       console.log($scope.heure_debut);
       console.log($scope.heure_fin);
        let i=0;
        let test=true;
        while((i< $scope.les_agent.length)&&(test==true))
        {
               if($scope.les_agent[i].Nom==$scope.cli.selected.Prenom+" "+$scope.cli.selected.Nom)
               {
                   test=false;
               }
               else
               i++;
        }
        if (test==true)
        {
            $scope.les_agent[i]={id:$scope.cli.selected.id_agent,Nom:$scope.cli.selected.Prenom+" "+$scope.cli.selected.Nom,heure_debut:$scope.heure_debut,heure_fin:$scope.heure_fin};
            $scope.id=$scope.id+$scope.cli.selected.id_agent+',';
            
        }
       console.log($scope.id);
        console.log($scope.les_agent);
    }

   //Supprimer agent d'un liste_agent
   $scope.suppAgent=function(ind)
   {
     $scope.ind=ind;
     console.log($scope.ind);
     let i=0;
     let test=true;
        while((i<$scope.les_agent.length)&&(test==true))
        {
            if($scope.les_agent[i].id==$scope.ind)
            {
                //test=false;
                for(let j=i;j<$scope.les_agent.length;j++)
                {
                    $scope.les_agent[j]=$scope.les_agent[j+1];
                }
                $scope.rs=$scope.id.split(',')
                console.log($scope.rs);
                let x=0;
                while((x<$scope.rs.length-1)&&(test==true))
                {
                    if($scope.rs[x]==$scope.ind)
                    {
                        for(let m=x;m<$scope.rs.length;m++)
                        {
                            $scope.rs[m]=$scope.rs[m+1];
                        }
                        test=false;
                    }
                    x++;
                }
                $scope.rs.length=$scope.rs.length-2;
                $scope.id="";
                for(let p=0;p<$scope.rs.length;p++)
                {
                    $scope.id=$scope.id+$scope.rs[p]+',';
                }
            }
            else
            i++;
        }
        $scope.les_agent.length=$scope.les_agent.length-1;
        console.log($scope.les_agent);
   }
/*******************List Agent  d'un Event ***********/
$scope.ListAgent_Event=[];
data();
function data(){
    var event={idevent:$scope.instance}
 $http.post(apiUrl+'AffecterAgent/AfficherAgent_Event.php',event).then((response)=>{
$scope.ListAgent_Event=response.data;
console.log($scope.ListAgent_Event);
 });
 }
/*******************Annuler Agent d'un Event ***********/
$scope.Annuler=function(agent)
{
 var annuler={
     idevent:$scope.instance,
     idagent:agent.id_agent
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

      $http.post(apiUrl+'AffecterAgent/AnnulerAgent_Event.php',annuler).then((response)=>{
        console.log(response.data);
      data();
   
     });
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }});
}


}



export{HisEnqController,ctrEnqueteController};