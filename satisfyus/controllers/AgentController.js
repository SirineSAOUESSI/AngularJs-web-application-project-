import {agent} from '../models/agent.js';
function AgentController($scope,apiUrl,$http,$uibModal,Auth,$location,$document,$rootScope)
{ 
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
    Auth.getAuth().then((auth)=>{
        $scope.connexion=auth.data;
        console.log($scope.connexion);
       if($scope.connexion=="Client") 
       {
           $location.path('/clients',false);
           $location.path('/admins',false);
           $location.path('/notifications',false);
       }     });
   
        $scope.listagents=[];
        data();
       
    function data(){
            $http.get(apiUrl+'agent/ListAgents.php').then((response)=>{
           $scope.listagents=agent.load(response.data);
           console.log($scope.listagents);
         
           //$('#table').DataTable().destroy();
            });
        }

   $scope.ajouter=function(){
   
    $scope.modalInstance =$uibModal.open({
                templateUrl:'views/popup/agent/AjouterAgent.html',
                windowClass:'medium',
                controller:'ctrAgentController',
                size:"lg",
                 scope: $scope,
                resolve: {
                    title: function () {
                        return $scope.title = 'Ajouter un Agent';
                    },
                    instance: function () {
                        return $scope.instance = new agent();
                    }
                }
               
            })
         $scope.modalInstance.result.then(()=>{
            swal('Infromation','Enregistrement avec succés','success');
            data();
         },()=>{});
      
    };
    $scope.modifier=function(index){
        let obj=angular.copy($scope.listagents[index]);
        $scope.modalInstance = $uibModal.open({
                templateUrl:'views/popup/agent/ModifierAgent.html',
                windowClass:'medium',
                controller:'ctrAgentController',
                size :"lg",
                scope: $scope,
                resolve: {
                    title: function () {
                        return $scope.title = 'Modifier un Agent';
                    },
                    instance: function () {
                        return $scope.instance = obj;
                    }
                }
            });
         $scope.modalInstance.result.then(()=>{
            swal('Infromation','Modification avec succés','success');
            data();
            /*if(obj.id==$scope.auth.id)
            $rootScope.$emit('callupdatenav');*/
         },()=>{});
    };
  
    $scope.supprimer=function(index){
          let id=$scope.listagents[index].id_utilisateur;
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

                $http.post(apiUrl+'agent/SupprimerAgent.php',id).then((response)=>{
              data();
           
             });
              Swal.fire(
                'Supprimer!',
                'Supprimer Agent.',
                'success'
              )
            }});
        /*swal({
          title: "Question",
          text: "Voulez vous vraiment supprimer cet agent?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
          $http.post(apiUrl+'agent/SupprimerAgent.php',id).then((response)=>{
          if(response.data=="supression utilisateur effectuée"){
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
        });*/
        };
};
function ctrAgentController($scope,fileUpload,apiUrl,$http,$uibModal,Auth,$location)
{
  
    function formatDate(Date_Naiss) {
        var d = new Date(Date_Naiss),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }
    
   if ($scope.instance.Photo=="")
   {
       $scope.instance.Photo="default.png";
   }
    $scope.F="";
    $scope.H="";
    $scope.VerifAjouter=function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "serverside/uploads/upload.php";
        var text = $scope.name;
        fileUpload.uploadFileToUrl(file, uploadUrl, text);
        $scope.File=new Array();
        $scope.File=file;
        if($scope.File!=undefined)
        {
            $scope.instance.Photo= $scope.File.name;
     
        }
        if($scope.F=="")
        {
            $scope.instance.sexe=$scope.H;
        }
        else
        {
            $scope.instance.sexe=$scope.F;

        }
        var mail=
        {
            email:$scope.instance.Email
        }
        $http.post(apiUrl+'user/AfficherUser.php',mail).then((response)=>{
            $scope.resu=response.data;
            console.log($scope.resu);
            if($scope.instance.Chiffre())return swal('Erreur','Le num Telephone doit étre composé par des chiffres','error');
            if($scope.instance.length_8())return swal('Erreur','Le num Telephone doit étre composé 8 chiffres','error');
            if($scope.resu.length>=1)
            {
                return swal('Erreur','Le compte est déja existe ','error');
            }
        if($scope.instance.Vide()) return swal('Erreur','Veuillez remplir tous le champs svp ','error');
        if(! $scope.instance.confirmationpassword()) return swal('Erreur','Les deux mot de passe ne sont pas identiques','error');
        $scope.instance.Date_Naiss=$('#m_datepicker_3_modal').val();
        $scope.instance.Date_Naiss=formatDate($scope.instance.Date_Naiss);
        var Agent={
            nom: $scope.instance.Nom,
            prenom:$scope.instance.Prenom,
            dateNaiss: $scope.instance.Date_Naiss,
            tel:$scope.instance.Telephone,
            sexe: $scope.instance.sexe,
            email:$scope.instance.Email,
            adres:$scope.instance.Adresse,
            mdp:$scope.instance.MDP1,
            descrip: $scope.instance.Description,
            image:$scope.instance.Photo,
            status:"Agent"
          }
        $http.post(apiUrl+'agent/AjouterAgent.php',Agent).then((response)=>{
            $scope.listagents=response.data;
           console.log($scope.listagents);
            $scope.modalInstance.close();
      })
    })
     } 

     $scope.VerifModifier=function(){
        
        var file=""
        file = $scope.myFile;
       console.log('file is ' );
       console.dir(file);
       $scope.File="";
       var uploadUrl = "serverside/uploads/upload.php";
       var text = $scope.name;
       fileUpload.uploadFileToUrl(file, uploadUrl, text);
       $scope.File=new Array();
       $scope.File=file;
      
       if($scope.File!=undefined)
       {
           $scope.instance.Photo= $scope.File.name;
    
       }
        $scope.instance.Date_Naiss=$('#m_datepicker_3_modal').val();
        $scope.instance.Date_Naiss=formatDate($scope.instance.Date_Naiss);
        if($scope.instance.Vide()) return swal('Erreur','Veuillez remplir tous le champs svp','error');
        if(! $scope.instance.confirmationpassword()) return swal('Erreur','Les deux mot de passe ne sont pas identiques','error');
        alert($scope.instance.Email);
        var Agent={
            idUtilisateur:$scope.instance.id_utilisateur,
            idAgent:$scope.instance.id_agent,
            nom: $scope.instance.Nom,
            prenom:$scope.instance.Prenom,
            dateNaiss:$scope.instance.Date_Naiss,
            tel:$scope.instance.Telephone,
            sexe: $scope.instance.sexe,
            emai:$scope.instance.Email,
            adres:$scope.instance.Adresse,
            mdp:$scope.instance.MDP1,
            descrip: $scope.instance.Description,
            image:$scope.instance.Photo,
            status:"Agent"
          }
        $http.post(apiUrl+'agent/ModifierAgent.php',Agent).then((response)=>{
            $scope.resu=response.data;
            console.log($scope.resu);
         $scope.modalInstance.close();
      })
    
    }
    $scope.cancel=function()
    {
        $scope.modalInstance.dismiss();
    }
 
   
}
export {AgentController,ctrAgentController};