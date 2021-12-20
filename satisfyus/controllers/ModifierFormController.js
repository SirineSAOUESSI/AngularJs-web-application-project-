function ModifierFormController ($scope,$builder,$validator,$http,apiUrl,$location)
{/*************Initialiser Form *************/
  $builder.forms["default"]=$builder.forms[""];
  $scope.form = $builder.forms[""];
 
  var  textbox; 
  /*************Afficher List Client *************/ 
  $http.get(apiUrl+'client/ListClients.php').then((response)=>{
    $scope.listClient=response.data;
    console.log($scope.listClient);
    var text;
    function rechercher(id)
   {
        let i=0;
        while((i<$scope.listClient.length))
        {
          if ($scope.listClient[i].id_client==id)
          {
            $scope.value=$scope.listClient[i].Prenom+" "+$scope.listClient[i].Nom;
            return $scope.value;
          }
          i++;
        }
   }
   console.log($scope.enquete[0].Type);
   $scope.Titre=$scope.enquete[0].Titre;
   $scope.Description=$scope.enquete[0].Description;
   console.log($scope.enquete[0].id_client);
   $scope.client=rechercher($scope.enquete[0].id_client);
   
   console.log($scope.client);
   $scope.list_Id=new Array();
    for(let i=0;i<$scope.enquete.length;i++)
    {
      $scope.list_Id[i]=$scope.enquete[i].id_question;
       if(($scope.enquete[i].Type=="checkbox")||($scope.enquete[i].Type=="radio")||($scope.enquete[i].Type=="select")||($scope.enquete[i].Type=="star")||($scope.enquete[i].Type=="likedislike")||($scope.enquete[i].Type=="evaluation"))
      {
        var reponse={
          idquestion:$scope.enquete[i].id_question
         
           }
        $http.post(apiUrl+'enquete/option/Afficher_ListOptions.php',reponse).then((response)=>{
          $scope.listadmins=response.data;
          console.log($scope.listadmins);
            console.log($scope.listadmins[0].Nom);
            $scope.lOptions=new Array();
            for(let m=0;m<$scope.listadmins.length;m++)
            {
              $scope.lOptions[m]=$scope.listadmins[m].Nom;
            }
            console.log($scope.l);
         
            text = $builder.addFormObject('default', {
              id: $scope.enquete[i].id_question,
              component: $scope.enquete[i].Type,
              label: $scope.enquete[i].Label,
              description: '',
              placeholder: '',
              options: $scope.lOptions,
              required: false,
              editable: true
            });
        });
      
      }
     else if ($scope.enquete[i].Type=="textInput")
      {
        text = $builder.addFormObject('default', {
          id: $scope.enquete[i].id_question,
          component: 'textInput',
          label: $scope.enquete[i].Label,
          description: '',
          placeholder: '',
          required: false,
          editable: true
        });
      }
      else if ($scope.enquete[i].Type=="textArea")
      {
        text = $builder.addFormObject('default', {
          id:$scope.enquete[i].id_question,
          component: 'textArea',
          label: $scope.enquete[i].Label,
          description: '',
          placeholder: '',
          required: false,
          editable: true
        });
      }
      else if ($scope.enquete[i].Type=="datefile")
      {
       
        console.log($scope.form[i].component);
        console.log($scope.enquete[i].Value);
        text = $builder.addFormObject('default', {
          id:$scope.enquete[i].id_question,
          component: 'datefile',
          label: $scope.enquete[i].Label,
          description: "",
          placeholder:'',
          required: false,
          editable: true
        });
      }
      else if ($scope.enquete[i].Type=="time")
      {
       
        console.log($scope.form[i].component);
        console.log($scope.enquete[i].Value);
        text = $builder.addFormObject('default', {
          id:$scope.enquete[i].id_question,
          component: 'time',
          label: $scope.enquete[i].Label,
          description: "",
          placeholder:'',
          required: false,
          editable: true
        });
        
      }
      else if ($scope.enquete[i].Type=="image")
      {
       
        console.log($scope.form[i].component);
        console.log($scope.enquete[i].Value);
        text = $builder.addFormObject('default', {
          id:$scope.enquete[i].id_question,
          component: 'image',
          label: $scope.enquete[i].Label,
          description: "",
          placeholder:'',
          required: false,
          editable: true
        });
        
      }
      else if ($scope.enquete[i].Type=="file")
      {
       
        console.log($scope.form[i].component);
        console.log($scope.enquete[i].Value);
        text = $builder.addFormObject('default', {
          id:$scope.enquete[i].id_question,
          component: 'file',
          label: $scope.enquete[i].Label,
          description: "",
          placeholder:'',
          required: false,
          editable: true
        });
        
      }
    
    }
    console.log($scope.list_Id);

 

  });

  textbox = $builder.addFormObject('default', {
   
    component: 'name',
  
  });
  
  $scope.form = $builder.forms['default'];
  $scope.input = [];
  $scope.defaultValue = {};
  $scope.defaultValue[textbox.id] = 'default value';
  $scope.users=$scope.enquete[0].id_client;
 
  
   $scope.submit = function() {
   
    console.log($scope.users);
   
    
    var q={
      date:$scope.enquete[0].Date_creation,
      titre:$scope.Titre,
      descrip:$scope.Description,
      idclient:$scope.users
    }
   
    $http.post(apiUrl+'enquete/ModifierEnquete.php',q).then((response)=>{
    $scope.listadmins=response.data;
    console.log($scope.listadmins);
    });
     var enquete=
     {
      id_enquete:$scope.enquete[0].id_enquete
     }
     $http.post(apiUrl+'enquete/question/SupprimerQuestion_enquete.php',enquete).then((response)=>{
      $scope.listadmins=response.data;
      console.log($scope.listadmins);
     });
   
      for(let i=1;i<($scope.input).length;i++)
      {
        
            var question ={
              label:$scope.input[i].label,
              date:$scope.enquete[0].Date_creation,
              titre:$scope.enquete[0].Titre,
              type:$scope.form[i].component,
              id:$scope.enquete[0].id_enquete,
              Listoption:$scope.form[i].options,
              type_Statistic:$scope.form[i].res,
              idEnquete:$scope.enquete[0].id_enquete
            }
            console.log($scope.input[i].label);
            console.log($scope.formadate);
            $http.post(apiUrl+'enquete/question/AjouterQuestion.php',question).then((response)=>{
              $scope.Enquete=response.data;
              console.log($scope.Enquete);
              });
      }
      $builder.forms["default"]=$builder.forms[""];
      $scope.form = $builder.forms[""];
      swal('Infromation','Enregistrement avec succés','success');
     
      $location.path('/gestionEnquete');
  }
   $scope.Enregistrer=function()
   {

   console.log($scope.enquete[0].id_enquete);
      var variable={
        id:$scope.enquete[0].id_enquete
      }
      $http.post(apiUrl+'enquete/question/AfficherQuestion.php',variable).then((response)=>{
        $scope.ListQuestion=response.data;
        console.log($scope.ListQuestion);
        for(let k=0;k<$scope.ListQuestion.length;k++)
        {
          if(($scope.ListQuestion[k].Type=="radio")||($scope.ListQuestion[k].Type=="checkbox")||($scope.ListQuestion[k].Type=="select")||($scope.ListQuestion[k].Type=="star")||($scope.ListQuestion[k].Type=="likedislike")||($scope.ListQuestion[k].Type=="evaluation"))
          {
           console.log("true");
           console.log($scope.ListQuestion[k].id_question);
           var reponse={
            idquestion:$scope.ListQuestion[k].id_question
           
             }
            $http.post(apiUrl+'enquete/option/Afficher_ListOptions.php',reponse).then((response)=>{
              $scope.ListOption=response.data;
              console.log($scope.ListOption);
              let m=0;
               let verif=true;
               while((m<$scope.input.length)&&(verif==true))
               {
                 if(($scope.ListQuestion[k].Type==$scope.form[m].component) && ($scope.ListQuestion[k].Label==$scope.input[m].label))
                 {
                   let o=0;
                   let option=false;
                   while((o<$scope.ListOption.length)&&(option==false))
                   {
                     if($scope.input[m].value==$scope.ListOption[o].Nom)
                     {
                       var reponse={
                        idquestion:$scope.ListQuestion[k].id_question,
                        value:$scope.input[m].value,
                        idOption:$scope.ListOption[o].id_option
                       }
                       $http.post(apiUrl+'enquete/reponse/AjouterReponse_Option.php',reponse).then((response)=>{
                        $scope.ListReponse=response.data;
                        console.log($scope.ListReponse);
                      });
                      option=true;
                     }
                     else o++;
                   }
                   option=true;
                   verif=false;
                 }
               else m++;
               }
               verif=true;
            });
            
          }
          else
          {
            console.log("false");
            let i=0;
            let test=true;
         
            while((i<$scope.input.length)&&(test==true))
            {
             
                if($scope.ListQuestion[k].Label==$scope.input[i].label)
                {
                  if($scope.ListQuestion[k].Type=="datefile")
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
                     $scope.input[i].value=formatDate($scope.input[i].value);
                   }
                   else if($scope.ListQuestion[k].Type=="time")
                   {
                    function formatAMPM(date) { // This is to display 12 hour format like you asked
                      var hours = date.getHours();
                      var minutes = date.getMinutes();
                      var ampm = hours >= 12 ? 'pm' : 'am';
                      hours = hours % 12;
                      hours = hours ? hours : 12; // the hour '0' should be '12'
                      minutes = minutes < 10 ? '0'+minutes : minutes;
                      var strTime = hours + ':' + minutes + ' ' + ampm;
                      return strTime;
                    }
                    $scope.input[i].value=formatAMPM($scope.input[i].value);
                   }
                  var reponse={
                    idquestion:$scope.ListQuestion[k].id_question,
                    value:$scope.input[i].value
                  }
                  $http.post(apiUrl+'enquete/reponse/AjouterReponse.php',reponse).then((response)=>{
                    $scope.ListReponse=response.data;
                    console.log( $scope.ListReponse);
                  });
                  test=false;
                  
                }
                else
                i++;
            }
            test=true;
          }

        }

        });
       swal('Infromation','Enregistrement avec succés','success');
     
        //location.href='./gestionEnquete';
   }




  };   


export{ModifierFormController};
