import {admin} from '../models/admin.js';
function AdminController($scope,fileUpload,apiUrl,$http,$uibModal,Auth,$location,$document,$rootScope)
{
    angular.element(document).ready(function() {
        // Setup - add a text input to each footer cell
        $('#example tfoot th').each(function() {
          var title = $(this).text();
          $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });
       
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
       }
       else if($scope.connexion=="Agent")
       {
           $location.path('/clients',false);
           $location.path('/admins',false);
           $location.path('/agents',false);
          
       }
               });
   /***********************List Admin******************************** */ 
        $scope.listadmins=[];
        data();
       
    function data(){
            $http.get(apiUrl+'admin/ListAdmins.php').then((response)=>{
           $scope.listadmins=admin.load(response.data);
           console.log($scope.listadmins);
         
           //$('#table').DataTable().destroy();
            });
        }
   /***********************Ajouter  Admin******************************** */ 
   $scope.ajouter=function(){
   
    $scope.modalInstance =$uibModal.open({
                templateUrl:'views/popup/admin/AjouterAdmin.html',
                windowClass:'medium',
                controller:'ctrAdminController',
                size:"lg",
                 scope: $scope,
                resolve: {
                    title: function () {
                        return $scope.title = 'Ajouter un Admin';
                    },
                    instance: function () {
                        return $scope.instance = new admin();
                    }
                }
               
            })
         $scope.modalInstance.result.then(()=>{
            swal('Infromation','Enregistrement avec succés','success');
            data();
         },()=>{});
      
    };
  /***********************Modifier  Admin******************************** */ 
    $scope.modifier=function(index){
        let obj=angular.copy($scope.listadmins[index]);
        $scope.modalInstance = $uibModal.open({
                templateUrl:'views/popup/admin/ModifierAdmin.html',
                windowClass:'medium',
                controller:'ctrAdminController',
                size:"lg",
                scope: $scope,
                resolve: {
                    title: function () {
                        return $scope.title = 'Modifier un Admin';
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
/***********************supprimer  Admin******************************** */ 
    $scope.supprimer=function(index){
          let id=$scope.listadmins[index].id_utilisateur;
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

                $http.post(apiUrl+'admin/SupprimerAdmin.php',id).then((response)=>{
              data();
           
             });
              Swal.fire(
                'Supprimer!',
                'Supprimer Admin.',
                'success'
              )
            }});
 
        };
};
function ctrAdminController($scope,fileUpload,apiUrl,$http,$uibModal,Auth,$location)
{
   
/********Format Date*********/ 
    function formatDate(Date_Naiss) {
        var d = new Date(Date_Naiss),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }
/*******Initialiser champs Photo*********/ 
    if ($scope.instance.Photo=="")
     {
         $scope.instance.Photo="default.png";
     }
    $scope.F="";
    $scope.H="";
/****** *verifier Ajouter*********/ 
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
            var Admin={
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
                status:"Admin"
              }
            $http.post(apiUrl+'admin/AjouterAdmin.php',Admin).then((response)=>{
                $scope.ajout=response.data;
                console.log($scope.ajout);
                $scope.modalInstance.close();
          })
         })
    
     
     } 
/********verifier Modifier*********/ 
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
        var Admin={
            idUtilisateur:$scope.instance.id_utilisateur,
            idAdmin:$scope.instance.id_admin,
            nom: $scope.instance.Nom,
            prenom:$scope.instance.Prenom,
            dateNaiss:$scope.instance.Date_Naiss,
            tel:$scope.instance.Telephone,
            sexe: $scope.instance.sexe,
            email:$scope.instance.Email,
            adres:$scope.instance.Adresse,
            mdp:$scope.instance.MDP1,
            descrip: $scope.instance.Description,
            image:$scope.instance.Photo,
            status:"Admin"
          }
        
        $http.post(apiUrl+'admin/ModifierAdmin.php',Admin).then((response)=>{
            $scope.Modif=response.data;
            console.log($scope.Modif);
         $scope.modalInstance.close();
      })
    
    }
/********Fermer Popup*********/ 
    $scope.cancel=function()
    {
        $scope.modalInstance.dismiss();
    }
  
}
export {AdminController,ctrAdminController};