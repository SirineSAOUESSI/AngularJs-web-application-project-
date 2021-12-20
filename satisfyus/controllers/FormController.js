function FormController ($scope,$builder,$validator,$http,apiUrl,$location)
{
  
  $scope.cli={};
  var  textbox;
  /******************Initialiser  Form*************/
  $builder.forms["default"]=$builder.forms[""];
  $scope.form = $builder.forms[""];
 
  /*****************List Clients******************/     
  $http.get(apiUrl+'client/ListClients.php').then((response)=>{
    $scope.listClient=response.data;
    console.log($scope.listClient);
  });
/*****************Form******************/   
  textbox = $builder.addFormObject('default', {
    id: 'textbox',
    component: 'name',
    label: 'Name',
    description: 'Your name',
    placeholder: 'Your name',
    required: false,
    editable: true
  });
  
  $scope.form = $builder.forms['default'];
  $scope.input = [];
  $scope.defaultValue = {};
  $scope.defaultValue[textbox.id] = 'default value';
 
/*****************Enregistrer Form ******************/ 
   $scope.submit = function() {
   
    
      function formatDate(date) {
        var year = date.getFullYear(),
        month = date.getMonth() + 1, // months are zero indexed
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
        minuteFormatted = minute < 10 ? "0" + minute : minute,
        morning = hour < 12 ? "am" : "pm";

    return year + "-" + month + "-" + day + " " + hourFormatted + ":" +
            minuteFormatted +":"+second ;
    }
      alert($scope.cli.selected.id_client);
      $scope.date=formatDate(new Date());
      $scope.formadate=$scope.date;
      var q={
        date:$scope.date,
        titre:$scope.Titre,
        descrip:$scope.Description,
        idclient:$scope.cli.selected.id_client
      }
     
      $http.post(apiUrl+'enquete/AjouterEnquete.php',q).then((response)=>{
      $scope.Ajou_Enquete=response.data;
      console.log($scope.Ajou_Enquete);
      console.log($scope.Ajou_Enquete[0].id_enquete);
      var msg="ona était ajouté une nouvelle enquete <<"+$scope.Titre+">>";
      var notification=
      {
        message:msg,
        idClient:$scope.cli.selected.id_client

      }
      $http.post(apiUrl+'notification/AjouterNotification_Client.php',notification).then((response)=>{
        $scope.listadmins=response.data;
        console.log($scope.listadmins);
        });
      for(let i=1;i<($scope.input).length;i++)
      {
        console.log($scope.input[i].label);
        if(($scope.form[i].component!="radio")&&($scope.form[i].component!="checkbox")&&($scope.form[i].component!="select")&&($scope.form[i].component!="star")&&($scope.form[i].component!="likedislike")&&($scope.form[i].component!="evaluation"))
        {
          $scope.form[i].res=null;
        }
        
        var question ={
          label:$scope.input[i].label,
          titre:$scope.Titre,
          date:$scope.formadate,
          type:$scope.form[i].component,
          type_Statistic:$scope.form[i].res,
          Listoption:$scope.form[i].options,
          idEnquete:$scope.Ajou_Enquete[0].id_enquete
        }
     
        $http.post(apiUrl+'enquete/question/AjouterQuestion.php',question).then((response)=>{
          $scope.Enquete=response.data;
          console.log($scope.Enquete);
          });
    }
    //swal('Infromation','Enregistrement avec succés','success');
    //$location.path('/gestionEnquete');
  });
  };   
};

export{FormController};
