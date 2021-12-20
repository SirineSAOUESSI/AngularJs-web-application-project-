import {reponse} from '../models/reponse.js';
function StatistiqueController($scope,apiUrl,$http,$uibModal,Auth,$location,$document,$rootScope)
{
  $scope.base = $document[0].baseURI;
  
/*****************************Afficher Statistique Event************************************/
$http.get(apiUrl+'uploads/Afficher_Id_statistic.php').then((response)=>{
  $scope.listz=response.data;
console.log($scope.listz);

 $scope.Event_i={id_enquete:$scope.listz};

 
 if($scope.Event_i!=undefined)
 {
    $scope.statistic_Event=$scope.Event_i;
 }
 var enquete={
  id:$scope.Event_i.id_enquete
 
   }
   /******************** List Questions*******************/
 $http.post(apiUrl+'enquete/question/AfficherQuestion_ParOption.php',enquete).then((response)=>{
  $scope.list=response.data;
  console.log($scope.list);
  let p=0;
  $scope.list_Question=new Array();
    for(let y=0;y<$scope.list.length;y++)
    {
       if($scope.list[y].Type_statistic!="")
       {
        $scope.list_Question[p]=$scope.list[y];
        p++;
       }
    }
    $scope.Options=new Array();
    let j=0;
    $scope.listeNom_enquete=new Array();
    for(let i=0;i<$scope.list_Question.length;i++)
    {
     
      $scope.Options[j]=$scope.list_Question[i].id_question;
      $scope.listeNom_enquete[i]=$scope.list_Question[i].Label;
      j++;
    }
      var reponse={questions:$scope.Options};
    
      $http.post(apiUrl+'enquete/option/AfficherOptions.php',reponse).then((response)=>{
        $scope.lisOption=response.data;
        console.log($scope.lisOption);
       
       
        /********List Option de  tous les Questions********/
        $scope.Option_Id=new Array();
          let m=0;
        for(let i=0;i<$scope.lisOption.length;i++)
        { 
          /********List Option par Question********/
          for(let j=0;j<$scope.lisOption[i].length;j++)
          {
            $scope.Option_Id[m]=$scope.lisOption[i][j].id_option;
            m++;
          }
        }
          console.log($scope.Option_Id);
            var option={options:$scope.Option_Id};
            $http.post(apiUrl+'enquete/reponse/AfficherNombreReponse.php',option).then((response)=>{
             $scope.NombreReponse=response.data;
            console.log($scope.NombreReponse);
    
           
            /***********Afficher Statistique*****************/
              $http.post(apiUrl+'statistique/AfficherSatistique.php',enquete).then((response)=>{
              $scope.statistiques_Enquete=response.data;
              console.log($scope.statistiques_Enquete);
              /**********************Ajouter Statistique en table statistique ***********************************/
              /***************Si statistique n'existe pas  *******/
              if($scope.statistiques_Enquete.length==0)
              {
                
                for(let q=0;q<$scope.NombreReponse.length;q++)
                {
                  var statistique=
                  {
                    idquestion:$scope.NombreReponse[q].id_question,
                    id_enquete:$scope.Event_i.id_enquete,
                    option:$scope.NombreReponse[q].value,
                    nbr:$scope.NombreReponse[q].nbr
                  } 
                $http.post(apiUrl+'statistique/AjouterStatistique.php',statistique).then((response)=>{
                  $scope.statistiques_Enquete=response.data;
                  console.log($scope.statistiques_Enquete);
    
                });
                }
              }
              /***************Si statistique existe en fait la modification **********/
               else if($scope.statistiques_Enquete.length==$scope.NombreReponse.length)
               {
                for(let q=0;q<$scope.NombreReponse.length;q++)
                {
                  var statistique=
                  {
                    idquestion:$scope.NombreReponse[q].id_question,
                    id_enquete:$scope.Event_i.id_enquete,
                    option:$scope.NombreReponse[q].value,
                    nbr:$scope.NombreReponse[q].nbr
                  } 
                $http.post(apiUrl+'statistique/ModifierStatistique.php',statistique).then((response)=>{
                  $scope.statistiques_Enquete=response.data;
                  console.log($scope.statistiques_Enquete);
    
                });
                }
               }
               /***************Si statistique existe  mais pas complet  **********/
               else{
                $http.post(apiUrl+'statistique/SupprimerSatistique.php',enquete).then((response)=>{
                  $scope.statistiques_Enquete=response.data;
                  console.log($scope.statistiques_Enquete);});
                  for(let q=0;q<$scope.NombreReponse.length;q++)
                  {
                    var statistique=
                    {
                      idquestion:$scope.NombreReponse[q].id_question,
                      id_enquete:$scope.Event_i.id_enquete,
                      option:$scope.NombreReponse[q].value,
                      nbr:$scope.NombreReponse[q].nbr
                    } 
                  $http.post(apiUrl+'statistique/AjouterStatistique.php',statistique).then((response)=>{
                    $scope.statistiques_Enquete=response.data;
                    console.log($scope.statistiques_Enquete);
      
                  });
                  }  
                }
            });



            });
             
          
         
         
        
        
      
      });
    
    console.log($scope.Options);

    /**************************AFFICHER SATISTIQUE D'UNE ENQUETE********************/
    $http.post(apiUrl+'statistique/AfficherSatistique.php',enquete).then((response)=>{
      $scope.statistiques_Enquete=response.data;
      //console.log($scope.statistiques_Enquete);
      $scope.List_Statistic=new Array();
      $scope.table_statistique=new Array();
      let ques1=0;
     for(let index=0;index<$scope.list_Question.length;index++)
     {
      $scope.Stat2=new Array();
      let ques2=0;
       for(let k=0;k<$scope.statistiques_Enquete.length;k++)
       {
         if ($scope.list_Question[index].id_question==$scope.statistiques_Enquete[k].id_question)
         {
           //console.log($scope.statistiques_Enquete[k].length);
          $scope.Stat2[ques2]=$scope.statistiques_Enquete[k];
          ques2++;
         }

       }
       $scope.table_statistique[index]=$scope.Stat2;
       
       $scope.Stat2.push({type_statistic:$scope.list_Question[index].Type_statistic});
       $scope.List_Statistic[ques1]=$scope.Stat2;
       ques1++;
     }
    
  
      
        /*******************AFFICHER STATISTIQUE********************************/
       console.log($scope.List_Statistic);
       console.log($scope.table_statistique);
       /********************** Table statistique*************/
       
    
       $scope.Array_Statistic=new Array();
       let ind=0;
       /*********Liste des questions *********/
        for(let i1=0;i1<$scope.List_Statistic.length;i1++)
       {
    
            var index1=($scope.List_Statistic[i1].length)-1;
            console.log($scope.List_Statistic[i1][index1]);
             $scope.choix_question=[];
             $scope.Nombre=[];
             $scope.NombreTotale=parseInt(0);
             for(let x=0;x<($scope.List_Statistic[i1].length)-1;x++)
             {
                $scope.choix_question[x]=$scope.List_Statistic[i1][x].option;
                $scope.Nombre[x]=parseInt($scope.List_Statistic[i1][x].nombre);
                $scope.NombreTotale=$scope.NombreTotale+parseInt($scope.List_Statistic[i1][x].nombre);
        
             }
             var totale=$scope.Nombre.length;
             /****Nombre de reponse totale*****/
             $scope.Nombre[totale]=$scope.NombreTotale;
            
             /*********************Type de chart*************************/
            if($scope.List_Statistic[i1][index1].type_statistic=="Bar chart")
            {
            $scope.type="chart-bar";
            $scope.chart = {
              labels: $scope.choix_question,
              series: ['A', 'B'],
              data: $scope.Nombre,
              colors: [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
              options:  {
                scales: {
                    yAxes:[{
                        ticks: {
                            beginAtZero: true
                        }
                          }]
                        }
                        },
               type:$scope.type         
                  }
            }
            else if($scope.List_Statistic[i1][index1].type_statistic=="Line chart") 
            {
              $scope.type="chart-line";
              $scope.chart = {
              labels : $scope.choix_question,
              series : ['Series A'],
              data : $scope.Nombre,
              onClick : function (points, evt) {
                console.log(points, evt);
              },
              datasetOverride : [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }],
              options : {
                scales: {
                  yAxes:[{
                      ticks: {
                          beginAtZero: true
                      }
                        }]
                      }
              },
              type:$scope.type 
            }
            }
            else if($scope.List_Statistic[i1][index1].type_statistic=="Doughnut chart") 
            {
              $scope.type="chart-doughnut";
              $scope.chart = {
              labels : $scope.choix_question,
              data : $scope.Nombre,
              type:$scope.type 
            }
            }
            else if($scope.List_Statistic[i1][index1].type_statistic=="Pie chart") 
            {
              $scope.type="chart-pie";
              $scope.chart = {
              labels : $scope.choix_question,
              data : $scope.Nombre,
              type:$scope.type 
            }
            }
            else if($scope.List_Statistic[i1][index1].type_statistic=="Polar area") 
            {
              $scope.type="chart-polar-area";
              $scope.chart = {
              labels : $scope.choix_question,
              data : $scope.Nombre,
              type:$scope.type 
            }
            }
            else if($scope.List_Statistic[i1][index1].type_statistic=="Horizontal bars") 
            {
              $scope.type="chart-horizontal-bar";
              $scope.chart = {
              labels : $scope.choix_question,
              data : $scope.Nombre,
              options : {
                scales: {
                  xAxes:[{
                      ticks: {
                          beginAtZero: true
                      }
                        }]
                      }
              },
              type:$scope.type 
            }
            }
            else if($scope.List_Statistic[i1][index1].type_statistic=="Bubble chart") 
            {
              $scope.type="chart-bubble";
              
              $scope.chart = {
               series : ['Series A', 'Series B'],
               colors: [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
              labels : $scope.choix_question,
              data : $scope.Nombre,
              type:$scope.type 
            }
            }
            else if($scope.List_Statistic[i1][index1].type_statistic=="Radar chart") 
            {
              $scope.type="chart-radar";
              
              $scope.chart = {
               series : ['Series A', 'Series B'],
              labels : $scope.choix_question,
              data : $scope.Nombre,
              type:$scope.type 
            }
            }
       //$scope.Stat2.push({type_statistic:$scope.list_Question[index].Type_statistic});
         
          $scope.table_statistique[i1].length=$scope.table_statistique[i1].length-1;
          $scope.table_statistique[i1].push({option:"totale",nombre:$scope.NombreTotale});

          $scope.Array_Statistic[ind]=$scope.chart;
          ind++;
        }
       
       
    });

  

});


});


}
function ctrStatistiqueController($scope,$http,apiUrl,$rootScope)
{


}
export {StatistiqueController,ctrStatistiqueController};