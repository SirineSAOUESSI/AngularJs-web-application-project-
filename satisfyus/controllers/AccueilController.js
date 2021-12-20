import {agent} from '../models/agent.js';
import {client} from '../models/client.js';
import {admin} from '../models/admin.js';
function AccueilController($scope,$http,apiUrl)
{
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
     
        $scope.user=new client();
        if($scope.status=='Admin')
        {

            $scope.user=new admin();
       /***************************List Statistique*******************************************/
       $scope.List_Statistique=[];
       data();
       function data(){
           $http.get(apiUrl+'events/ListEvents_EnCour.php').then((response)=>{
          $scope.List_Statistique=response.data;
          $scope.N=response.data;
          $scope.nombre_enquete_enCours=($scope.N).length;
          console.log($scope.List_Statistique);
           $scope.list_Reponse=new Array();
           $scope.list_titre=new Array();
           for(let i=0;i<$scope.List_Statistique.length;i++)
           {
              $scope.list_Reponse[i]=$scope.List_Statistique[i].id_enquete;
              $scope.list_titre[i]=$scope.List_Statistique[i].title;
           }
           var enquete=
           {
                   listenquete:$scope.list_Reponse
           }
           $http.post(apiUrl+'statistique/CountStatistique.php',enquete).then((response)=>{
              $scope.Nombre_Reponse_Totale=response.data;
              console.log($scope.Nombre_Reponse_Totale);
              $http.post(apiUrl+'statistique/CountStatistique_parQuestion.php',enquete).then((response)=>{
                     $scope.Nombre_question=response.data;
                     console.log($scope.Nombre_question);
                for(let j=0;j< $scope.Nombre_Reponse_Totale.length;j++)
                {

                       let nb=0;
                     for(let i=0;i<$scope.Nombre_question.length;i++)
                     {
                            if($scope.Nombre_Reponse_Totale[j].id_enquete==$scope.Nombre_question[i].id_enquete)
                            {
                                  nb++;
                            }

                     }  
                     $scope.list_Reponse[j]={nombre:$scope.Nombre_Reponse_Totale[j].nbr/nb,id_enquete:$scope.Nombre_Reponse_Totale[j].id_enquete,titre:$scope.list_titre[j]}  
                }
                
                 /****************Trie List <<list_Reponse>> ************************ */
                 let index=0;
                  for(let i=0;i<($scope.list_Reponse.length)-1;i++)
                  {
                         if($scope.list_Reponse[i].nombre<$scope.list_Reponse[i+1].nombre)
                         {
                                index=$scope.list_Reponse[i].nombre;
                                $scope.list_Reponse[i].nombre=$scope.list_Reponse[i+1].nombre;
                                $scope.list_Reponse[i+1].nombre=index

                         }
                  }
                  $scope.enquete_populaire=new Array();
                  $scope.Nombre_reponse=new Array();
                  if($scope.list_Reponse.length>3)
                  {
                      $scope.nb=3
                  }
                  else{
                    $scope.nb=$scope.list_Reponse.length
                  }
                  for(let i=0;i<$scope.nb;i++)
                  {
                     $scope.enquete_populaire[i]=$scope.list_Reponse[i].titre;
                     $scope.Nombre_reponse[i]=$scope.list_Reponse[i].nombre;
                  }
                  $scope.Nombre_reponse[$scope.Nombre_reponse.length]=$scope.list_Reponse[0].nombre+2;
                 /********************************************************************* */
                 console.log($scope.enquete_populaire);
                 console.log($scope.Nombre_reponse)
                 /****************************Statistique********************************/
                 $scope.type1="chart-bar";
                 $scope.chart = {
                   labels: $scope.enquete_populaire,
                   series: ['A', 'B'],
                   data: $scope.Nombre_reponse,
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
                    type:$scope.type1         
                       }
                       $scope.nb_rep=$scope.Nombre_reponse;
                       $scope.nb_rep.length=$scope.nb_rep.length-1;
                       $scope.type2="chart-doughnut";
                       $scope.chart2 = {
                       labels : $scope.enquete_populaire,
                       colors: [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                       data :$scope.nb_rep ,
                       type:$scope.type2
                    }
                 /********************************************************************* */
            
                 })
          })
       });
       }
       /****************************************************************************************/
       /************************************Nombre Events****************************/
       $http.get(apiUrl+'events/ListEvents.php').then((response)=>{
              $scope.List_Events=response.data;
              $scope.Nombre_Events=$scope.List_Events.length;
       })
       /***************************************************************************** */
 /***************************List Eventst termine *******************************************/
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
        }
       else if($scope.status=='Client')
       {
        $http.post(apiUrl+'client/AfficherClient.php',use).then((response)=>{
            $scope.user=response.data;
            $scope.user= $scope.user[0];
            console.log($scope.user);
            var client={
                idclient:$scope.user.id_client
            }
            /****************List Enquete En Cours*/
        $http.post(apiUrl+'EventsClient/ListEnquete_Cours.php',client).then((response)=>{
          $scope.Events_client=response.data;
          console.log($scope.Events_client);
          $scope.list_Reponse=new Array();
          $scope.list_titre=new Array();
          for(let i=0;i<$scope.Events_client.length;i++)
          {
             $scope.list_Reponse[i]=$scope.Events_client[i].id_enquete;
             $scope.list_titre[i]=$scope.Events_client[i].title;
          }
          var enquete=
          {
                  listenquete:$scope.list_Reponse
          }
          $http.post(apiUrl+'statistique/CountStatistique.php',enquete).then((response)=>{
             $scope.Nombre_Reponse_Totale=response.data;
             console.log($scope.Nombre_Reponse_Totale);
             $http.post(apiUrl+'statistique/CountStatistique_parQuestion.php',enquete).then((response)=>{
                    $scope.Nombre_question=response.data;
                    console.log($scope.Nombre_question);
               for(let j=0;j< $scope.Nombre_Reponse_Totale.length;j++)
               {

                      let nb=0;
                    for(let i=0;i<$scope.Nombre_question.length;i++)
                    {
                           if($scope.Nombre_Reponse_Totale[j].id_enquete==$scope.Nombre_question[i].id_enquete)
                           {
                                 nb++;
                           }

                    }  
                    $scope.list_Reponse[j]={nombre:$scope.Nombre_Reponse_Totale[j].nbr/nb,id_enquete:$scope.Nombre_Reponse_Totale[j].id_enquete,titre:$scope.list_titre[j]}  
               }
               
                /****************Trie List <<list_Reponse>> ************************ */
                let index=0;
                 for(let i=0;i<($scope.list_Reponse.length)-1;i++)
                 {
                        if($scope.list_Reponse[i].nombre<$scope.list_Reponse[i+1].nombre)
                        {
                               index=$scope.list_Reponse[i].nombre;
                               $scope.list_Reponse[i].nombre=$scope.list_Reponse[i+1].nombre;
                               $scope.list_Reponse[i+1].nombre=index

                        }
                 }
                 $scope.enquete_populaire=new Array();
                 $scope.Nombre_reponse=new Array();
                 if($scope.list_Reponse.length>3)
                 {
                     $scope.nb=3
                 }
                 else{
                   $scope.nb=$scope.list_Reponse.length
                 }
                 for(let i=0;i<$scope.nb;i++)
                 {
                    $scope.enquete_populaire[i]=$scope.list_Reponse[i].titre;
                    $scope.Nombre_reponse[i]=$scope.list_Reponse[i].nombre;
                 }
                 $scope.Nombre_reponse[$scope.Nombre_reponse.length]=$scope.list_Reponse[0].nombre+2;
                /********************************************************************* */
                console.log($scope.enquete_populaire);
                console.log($scope.Nombre_reponse)
                /****************************Statistique********************************/
                $scope.type1="chart-bar";
                $scope.chart = {
                  labels: $scope.enquete_populaire,
                  series: ['A', 'B'],
                  data: $scope.Nombre_reponse,
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
                   type:$scope.type1         
                      }
                      $scope.nb_rep=$scope.Nombre_reponse;
                      $scope.nb_rep.length=$scope.nb_rep.length-1;
                      $scope.type2="chart-doughnut";
                      $scope.chart2 = {
                      labels : $scope.enquete_populaire,
                      colors: [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                      data :$scope.nb_rep ,
                      type:$scope.type2
                   }
                /********************************************************************* */
           
                })
         })
        $http.post(apiUrl+'EventsClient/ListEnquete.php',client).then((response)=>{
          $scope.ListEvents=response.data;
          console.log($scope.ListEvents);
          $scope.List_Termine=new Array();
          let m=0;
          /*************List Enquete Termine**************** */
           for(let i=0;i<$scope.ListEvents.length;i++)
            {
        
            let j=0;
            let test=true;
            while((j<$scope.Events_client.length)&&(test==true))
            {
                if(($scope.Events_client[j].id_enquete==$scope.ListEvents[i].id_enquete))
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
      
          $scope.List_Termine=$scope.List_Termine
          $scope.nombre_enquete_enCours=$scope.Events_client.length;
          $scope.Nombre_Events=$scope.List_Termine.length+$scope.Events_client.length;
        });
        });
           
        });

       }
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
                  $scope.Events_agent=response.data;
                  console.log($scope.Events_agent);
                  $scope.list_Reponse=new Array();
          $scope.list_titre=new Array();
          for(let i=0;i<$scope.Events_agent.length;i++)
          {
             $scope.list_Reponse[i]=$scope.Events_agent[i].id_enquete;
             $scope.list_titre[i]=$scope.Events_agent[i].title;
          }
          var enquete=
          {
                  listenquete:$scope.list_Reponse
          }
          $http.post(apiUrl+'statistique/CountStatistique.php',enquete).then((response)=>{
             $scope.Nombre_Reponse_Totale=response.data;
             console.log($scope.Nombre_Reponse_Totale);
             $http.post(apiUrl+'statistique/CountStatistique_parQuestion.php',enquete).then((response)=>{
                    $scope.Nombre_question=response.data;
                    console.log($scope.Nombre_question);
               for(let j=0;j< $scope.Nombre_Reponse_Totale.length;j++)
               {

                      let nb=0;
                    for(let i=0;i<$scope.Nombre_question.length;i++)
                    {
                           if($scope.Nombre_Reponse_Totale[j].id_enquete==$scope.Nombre_question[i].id_enquete)
                           {
                                 nb++;
                           }

                    }  
                    $scope.list_Reponse[j]={nombre:$scope.Nombre_Reponse_Totale[j].nbr/nb,id_enquete:$scope.Nombre_Reponse_Totale[j].id_enquete,titre:$scope.list_titre[j]}  
               }
               
                /****************Trie List <<list_Reponse>> ************************ */
                let index=0;
                 for(let i=0;i<($scope.list_Reponse.length)-1;i++)
                 {
                        if($scope.list_Reponse[i].nombre<$scope.list_Reponse[i+1].nombre)
                        {
                               index=$scope.list_Reponse[i].nombre;
                               $scope.list_Reponse[i].nombre=$scope.list_Reponse[i+1].nombre;
                               $scope.list_Reponse[i+1].nombre=index

                        }
                 }
                 $scope.enquete_populaire=new Array();
                 $scope.Nombre_reponse=new Array();
                 if($scope.list_Reponse.length>3)
                 {
                     $scope.nb=3
                 }
                 else{
                   $scope.nb=$scope.list_Reponse.length
                 }
                 for(let i=0;i<$scope.nb;i++)
                 {
                    $scope.enquete_populaire[i]=$scope.list_Reponse[i].titre;
                    $scope.Nombre_reponse[i]=$scope.list_Reponse[i].nombre;
                 }
                 $scope.Nombre_reponse[$scope.Nombre_reponse.length]=$scope.list_Reponse[0].nombre+2;
                /********************************************************************* */
                console.log($scope.enquete_populaire);
                console.log($scope.Nombre_reponse)
                /****************************Statistique********************************/
                $scope.type1="chart-bar";
                $scope.chart = {
                  labels: $scope.enquete_populaire,
                  series: ['A', 'B'],
                  data: $scope.Nombre_reponse,
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
                   type:$scope.type1         
                      }
                      $scope.nb_rep=$scope.Nombre_reponse;
                      $scope.nb_rep.length=$scope.nb_rep.length-1;
                      $scope.type2="chart-doughnut";
                      $scope.chart2 = {
                      labels : $scope.enquete_populaire,
                      colors: [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                      data :$scope.nb_rep ,
                      type:$scope.type2
                   }
                /********************************************************************* */
           
                })
         })
        $http.post(apiUrl+'EventsAgent/ListEnquete.php',agent).then((response)=>{
          $scope.ListEvents=response.data;
          console.log($scope.ListEvents);
          $scope.List_Termine=new Array();
          let m=0;
          /*************List Enquete Termine**************** */
           for(let i=0;i<$scope.ListEvents.length;i++)
            {
        
            let j=0;
            let test=true;
            while((j<$scope.Events_agent.length)&&(test==true))
            {
                if(($scope.Events_agent[j].id_enquete==$scope.ListEvents[i].id_enquete))
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
      
          $scope.List_Termine=$scope.List_Termine
          $scope.nombre_enquete_enCours=$scope.Events_agent.length;
          $scope.Nombre_Events=$scope.List_Termine.length+$scope.Events_agent.length;
        });
                 
          });
           
        });
       }
      

    })



};
export{AccueilController};