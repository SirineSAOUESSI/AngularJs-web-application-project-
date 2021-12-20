function ExporterController($scope,$http,apiUrl)
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
  /*****************************************************************************/
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
     
  /*************Si User Admin******************************************************/
        if($scope.status=='Admin')
        {
        $http.get(apiUrl+'events/ListEvents.php').then((response)=>{
        $scope.List_Events=response.data;})
        $scope.data=  "Statistique d'une Enquete";
     
        $scope.export = function(event){
         var question=
         {
          id:event.id_enquete
         }
        $http.post(apiUrl+'enquete/question/AfficherQuestion.php',question).then((response)=>{
        $scope.questions=response.data;
        console.log($scope.questions);
        $http.post(apiUrl+'statistique/AfficherSatistique.php',question).then((response)=>{
          $scope.statistique=response.data;
          $scope.Titre=event.title;
          var doc = new jsPDF();
	
          var specialElementHandlers = {
          '#hidediv' : function(element,render) {return true;}
          };
      
          doc.fromHTML($('#testdiv').get(0), 20,20,{
                   'width':500,
              'elementHandlers': specialElementHandlers
          });
          doc.setFont("courier");
          doc.setFontStyle("bolditalic");
          doc.setFontSize(21);
          doc.text("Enquete "+$scope.Titre+" ", 105, 30, null, null, 'center');
          doc.setFont("times");
          doc.setFontStyle("normal");
          doc.setFontSize(16);
          doc.text('Les Questions:', 20, 50);
          doc.setFontSize(12);
          console.log($scope.questions);
          var m=50;
          for(let i=0;i<$scope.questions.length;i++)
           { 
            var index=i+1;
            m=m+8;
            doc.text(index+". "+$scope.questions[i].Label, 40, m);
          }
          m=m+8
          doc.setFontSize(16);
          doc.text('Les statistiques:', 20, m);
        
          for(let i=0;i<$scope.questions.length;i++)
          { 
             if($scope.questions[i].Type_statistic!="")
          {
             m=m+8;
            doc.setFontSize(12);
            doc.text(i+1+". "+$scope.questions[i].Label, 40, m);
            m=m+8;
          
          for(let j=0;j<$scope.statistique.length;j++)
          {
            
           
            if($scope.questions[i].id_question==$scope.statistique[j].id_question)
            {
             
             doc.text("* "+$scope.statistique[j].option+" : "+$scope.statistique[j].nombre,45,m);
             m=m+8;
            }
          }}
        }
        doc.save('PDF'+$scope.Titre+'.pdf');
     });
    });
    }
  }
  /*************Si User Client*****************************************/
  else if($scope.status=='Client')
  {
  
    $http.post(apiUrl+'client/AfficherClient.php',use).then((response)=>{
      $scope.user=response.data;
      $scope.user= $scope.user[0];
      console.log($scope.user);
      var client={
          idclient:$scope.user.id_client
      }
  /****************List Enquete En Cours*****************************************/
  
  $http.post(apiUrl+'EventsClient/ListEnquete.php',client).then((response)=>{
    $scope.List_Events=response.data;
    console.log($scope.List_Events);
    $scope.data=  "Statistique d'une Enquete";
    $scope.export = function(event){
      var question=
      {
        id:event.id_enquete
      }
    $http.post(apiUrl+'enquete/question/AfficherQuestion.php',question).then((response)=>{
        $scope.questions=response.data;
    $http.post(apiUrl+'statistique/AfficherSatistique.php',question).then((response)=>{
        $scope.statistique=response.data;
        $scope.Titre=event.title;
        var doc = new jsPDF();
	      var specialElementHandlers = {
          '#hidediv' : function(element,render) {return true;}
      };
      
        doc.fromHTML($('#testdiv').get(0), 20,20,{
                   'width':500,
              'elementHandlers': specialElementHandlers
      });
      doc.setFont("courier");
      doc.setFontStyle("bolditalic");
      doc.setFontSize(21);
      doc.text("Enquete "+$scope.Titre+" ", 105, 30, null, null, 'center');
      doc.setFont("times");
      doc.setFontStyle("normal");
      doc.setFontSize(16);
      doc.text('Les Questions:', 20, 50);
      doc.setFontSize(12);
    
        console.log($scope.questions);
        var m=50;
        for(let i=0;i<$scope.questions.length;i++)
        { 
          var index=i+1;
          m=m+8
          doc.text(index+". "+$scope.questions[i].Label, 40, m);
        }
        m=m+8
        doc.setFontSize(16);
        doc.text('Les statistiques:', 20, m);
        
        for(let i=0;i<$scope.questions.length;i++)
        {
          if($scope.questions[i].Type_statistic!="")
          { m=m+8;
          doc.setFontSize(12);
          doc.text(i+1+". "+$scope.questions[i].Label, 40, m);
           m=m+8;
          for(let j=0;j<$scope.statistique.length;j++)
          {
            
           
            if($scope.questions[i].id_question==$scope.statistique[j].id_question)
            {
             
             doc.text("* "+$scope.statistique[j].option+" : "+$scope.statistique[j].nombre,45,m);
             m=m+8;
            }
          }}
        }
        doc.save('PDF'+$scope.Titre+'.pdf');
     });
    });
    }

  });
  
     
  });
  }
  /*************Si User Agent*************************************************/
  else
  {
    $http.post(apiUrl+'agent/AfficherAgent.php',use).then((response)=>{
      $scope.user=response.data;
      $scope.user= $scope.user[0];
      console.log($scope.user);
 
      var agent=
      {
        idAgent:$scope.user.id_agent
      }
    $http.post(apiUrl+'events/AfficherTabjoin.php',agent).then((response)=>{
            $scope.List_Events=response.data;
            console.log($scope.List_Events);
          
            $scope.data=  "Statistique d'une Enquete";
            $scope.export = function(event){
              var question=
              {
                id:event.id_enquete
              }
              $http.post(apiUrl+'enquete/question/AfficherQuestion.php',question).then((response)=>{
                $scope.questions=response.data;
                $http.post(apiUrl+'statistique/AfficherSatistique.php',question).then((response)=>{
                  $scope.statistique=response.data;
              $scope.Titre=event.title;
              var doc = new jsPDF();
          
              var specialElementHandlers = {
                  '#hidediv' : function(element,render) {return true;}
              };
              
              doc.fromHTML($('#testdiv').get(0), 20,20,{
                           'width':500,
                      'elementHandlers': specialElementHandlers
              });
              doc.setFont("courier");
              doc.setFontStyle("bolditalic");
              doc.setFontSize(21);
              doc.text("Enquete "+$scope.Titre+" ", 105, 30, null, null, 'center');
              doc.setFont("times");
              doc.setFontStyle("normal");
              doc.setFontSize(16);
              doc.text('Les Questions:', 20, 50);
              
              doc.setFontSize(12);
            
                console.log($scope.questions);
                var m=50;
                for(let i=0;i<$scope.questions.length;i++)
                { 
                  var index=i+1;
                  m=m+8
                  doc.text(index+". "+$scope.questions[i].Label, 40, m);
                }
                m=m+8
                doc.setFontSize(16);
                doc.text('Les statistiques:', 20, m);
                
                for(let i=0;i<$scope.questions.length;i++)
                {  if($scope.questions[i].Type_statistic!="")
                   {
                  m=m+8;
                  doc.setFontSize(12);
                  doc.text(i+1+". "+$scope.questions[i].Label, 40, m);
                   m=m+8;
                  for(let j=0;j<$scope.statistique.length;j++)
                  {
                    
                   
                    if($scope.questions[i].id_question==$scope.statistique[j].id_question)
                    {
                     
                     doc.text("* "+$scope.statistique[j].option+" : "+$scope.statistique[j].nombre,45,m);
                     m=m+8;
                    }
                  }}
                }
                doc.save('PDF'+$scope.Titre+'.pdf');
             });
            });
            }
    });
     
  });
  }
})
   
}
export{ExporterController};