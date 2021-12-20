
import {agent} from '../models/agent.js';
import {client} from '../models/client.js';
import {admin} from '../models/admin.js';
function MessagesController($scope,$http,apiUrl, Messages)
 {
     /***********************List Clients***************************/
     $http.get(apiUrl+'client/ListClients.php').then((response)=>{
      $scope.listClient=response.data;
      console.log($scope.listClient);
      });
     /************************************************************ */
    /***********************List Agents***************************/
       $http.get(apiUrl+'agent/ListAgents.php').then((response)=>{
       $scope.listAgents=response.data;
       console.log($scope.listAgents);
        });
    /************************************************************ */
    /***********************Liste Admins***************************/
       $http.get(apiUrl+'admin/ListAdmins.php').then((response)=>{
        $scope.listAdmins=response.data;
        console.log($scope.listAdmins);
         });
     /************************************************************ */
     /********Intialiser Liste  */
  

     /************************ */
  $http.get(apiUrl+'Profile.php').then((response)=>{
        $scope.auth=response.data;
        $scope.res=$scope.auth.split(',');
        $scope.id=$scope.res[0];
        $scope.etat=$scope.res[1];
        var use={
            id:$scope.id
        }
        $scope.cli={};
        $scope.agen={};
        $scope.admi={};
     /***************************User Admin************************************ */  
        if($scope.etat=='Admin')
        {
    
        // Keep an Array of Messages
       
        $scope.message=function(objet)
        {   $scope.objet=objet
            $scope.messages=[];
            /*********************************************************************/
            /* if($scope.cli.selected!=undefined){$scope.personne=$scope.cli.selected; $scope.id_personne=$scope.cli.selected.id_client;}
             else if($scope.agen.selected!=undefined){$scope.personne=$scope.agen.selected;$scope.id_personne=$scope.agen.selected.id_agent;}
             else{$scope.personne=$scope.admi.selected;
                $scope.id_personne=$scope.personne.id_admin}*/
                if($scope.objet.id_admin!=undefined){$scope.personne=$scope.objet; $scope.id_personne=$scope.objet.id_admin;}
                else if($scope.objet.id_client!=undefined){$scope.personne=$scope.objet;$scope.id_personne=$scope.objet.id_client;}
                else{$scope.personne=$scope.objet;
                   $scope.id_personne=$scope.objet.id_agent}  
            /*********************************************************************/
            $scope.nom=$scope.personne.Prenom+" "+$scope.personne.Nom;
            $scope.user=new admin();
            $http.post(apiUrl+'admin/AfficherAdmin.php',use).then((response)=>{
                $scope.user=response.data;
                $scope.user= $scope.user[0];
                Messages.user({id: $scope.user.id_admin, name: $scope.user.Prenom+" "+$scope.user.Nom});
                var affiche={
                    emetteur:$scope.user.id_admin,
                    recepteur:$scope.id_personne
                }
                $http.post(apiUrl+'messagerie/AfficherMessagerie.php',affiche).then((response)=>{
                    $scope.messagerie=response.data;;
                    console.log($scope.messagerie);
                     for(let i=0;i<$scope.messagerie.length;i++)
                     {
                           if($scope.messagerie[i].emetteur==$scope.user.id_admin)
                           {
                            $scope.messages.push({data:$scope.messagerie[i].message, user:{id: $scope.user.id_admin, name: $scope.user.Prenom+" "+$scope.user.Nom}})
                           }
                           else
                           {
                            $scope.messages.push({to:$scope.messagerie[i].recepteur,data:$scope.messagerie[i].message, user:{id:  $scope.id_personne, name:$scope.personne.Prenom+" "+$scope.personne.Nom} })
                           }
                     }
              
                //{to:$scope.id_personne,data:"sirine", user: Messages.user()}
                $scope.me = {name:$scope.user.Prenom+" "+$scope.user.Nom};
                // Set User Data
                Messages.user($scope.me);
                // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                // Get Received Messages and Add it to Messages Array.
                // This will automatically update the view.
               // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
               var chatmessages = document.querySelector(".chat-messages");
               Messages.receive(function(msg,isPrivate) {
                   $scope.rec=msg;
                   console.log($scope.rec);
                   if($scope.rec.user.id==$scope.id_personne)
                   {
                   $scope.messages.push(msg);
                   console.log($scope.messages);
              setTimeout(function() {
                chatmessages.scrollTop = chatmessages.scrollHeight;
                 }, 10);}
                });

              // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              // Send Messages
              // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              $scope.send = function(to) {
                 Messages.send({ to:$scope.id_personne,data: $scope.textbox, user: Messages.user()});
                 var messg=
                 { to:$scope.id_personne,
                   data: $scope.textbox,
                   user: Messages.user().id
                  }
                  $http.post(apiUrl+'messagerie/AjouterMessagerie.php',messg).then((response)=>{
                    $scope.res=response.data;
                    console.log($scope.res);
                     });
                 $scope.messages.push({to:$scope.id_personne,data: $scope.textbox, user: Messages.user()});
                 $scope.status = "sending";
                 $scope.textbox = "";
               setTimeout(function() { 
                  $scope.status = "" 
                 }, 1200 );
                  };
                })
            });
    }
    }
    else if($scope.etat=='Client')
    {  
        $scope.message=function(objet)
        {
        $scope.objet=objet
        $scope.messages=[];
        /*********************************************************************/
        /*if($scope.cli.selected!=undefined){$scope.personne=$scope.cli.selected; $scope.id_personne=$scope.cli.selected.id_client;}
        else if($scope.agen.selected!=undefined){$scope.personne=$scope.agen.selected;$scope.id_personne=$scope.agen.selected.id_agent;}
        else{$scope.personne=$scope.admi.selected;$scope.id_personne=$scope.admi.selected.id_admin}*/
        if($scope.objet.id_admin!=undefined){$scope.personne=$scope.objet; $scope.id_personne=$scope.objet.id_admin;}
        else if($scope.objet.id_client!=undefined){$scope.personne=$scope.objet;$scope.id_personne=$scope.objet.id_client;}
        else{$scope.personne=$scope.objet;
           $scope.id_personne=$scope.objet.id_agent}
        /*********************************************************************/
        $scope.nom=$scope.personne.Prenom+" "+$scope.personne.Nom;
        $scope.user=new client();
            
        $http.post(apiUrl+'client/AfficherClient.php',use).then((response)=>{
            $scope.user=response.data;
            $scope.user= $scope.user[0];
            Messages.user({id:$scope.user.id_client, name:$scope.user.Prenom+" "+$scope.user.Nom});
            var affiche={
                emetteur:$scope.user.id_client,
                recepteur:$scope.id_personne
            }
            $http.post(apiUrl+'messagerie/AfficherMessagerie.php',affiche).then((response)=>{
                $scope.messagerie=response.data;;
                console.log($scope.messagerie);
                 for(let i=0;i<$scope.messagerie.length;i++)
                 {
                       if($scope.messagerie[i].emetteur==$scope.user.id_client)
                       {
                        $scope.messages.push({data:$scope.messagerie[i].message, user:{id: $scope.user.id_admin, name: $scope.user.Prenom+" "+$scope.user.Nom}})
                       }
                       else
                       {
                        $scope.messages.push({to:$scope.messagerie[i].recepteur,data:$scope.messagerie[i].message, user:{id:  $scope.id_personne, name:$scope.personne.Prenom+" "+$scope.personne.Nom} })
                       }
                 }
            $scope.me = {name:$scope.user.Prenom+" "+$scope.user.Nom};
            // Set User Data
            Messages.user($scope.me);
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // Get Received Messages and Add it to Messages Array.
            // This will automatically update the view.
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
           var chatmessages = document.querySelector(".chat-messages");
           Messages.receive(function(msg,isPrivate) {
            $scope.rec=msg;
            console.log($scope.rec);
            if($scope.rec.user.id==$scope.id_personne)
            {
           $scope.messages.push(msg);
           setTimeout(function() {
            chatmessages.scrollTop = chatmessages.scrollHeight;
           }, 10);}
          });
          // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          // Send Messages
          // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          $scope.send = function(to) {
          Messages.send({to:$scope.id_personne,data: $scope.textbox,user: Messages.user()});
          var messg=
          { to:$scope.id_personne,
            data: $scope.textbox,
            user: Messages.user().id
           }
           $http.post(apiUrl+'messagerie/AjouterMessagerie.php',messg).then((response)=>{
             $scope.res=response.data;
             console.log($scope.res);
              });
          $scope.messages.push({to:$scope.id_personne,data: $scope.textbox, user: Messages.user()});
          $scope.status = "sending";
          $scope.textbox = "";
          setTimeout(function() { 
            $scope.status = "" 
           }, 1200 );
            };})
        })}
   }
   else if($scope.etat=='Agent')
   {   
       $scope.message=function(objet)
       {$scope.objet=objet
        $scope.messages=[];
        /*********************************************************************/
        /*if($scope.cli.selected!=undefined){$scope.personne=$scope.cli.selected; $scope.id_personne=$scope.cli.selected.id_client;}
        else if($scope.agen.selected.length!=undefined){$scope.personne=$scope.agen.selected;$scope.id_personne=$scope.agen.selected.id_agent;}
        else{$scope.personne=$scope.admi.selected;$scope.id_personne=$scope.admi.selected.id_admin}*/
        if($scope.objet.id_admin!=undefined){$scope.personne=$scope.objet; $scope.id_personne=$scope.objet.id_admin;}
        else if($scope.objet.id_client!=undefined){$scope.personne=$scope.objet;$scope.id_personne=$scope.objet.id_client;}
        else{$scope.personne=$scope.objet;
           $scope.id_personne=$scope.objet.id_agent}
        /*********************************************************************/
        $scope.nom=$scope.personne.Prenom+" "+$scope.personne.Nom;
        $scope.user=new agent();
            
        $http.post(apiUrl+'agent/AfficherAgent.php',use).then((response)=>{
            $scope.user=response.data;
            $scope.user= $scope.user[0];
            Messages.user({id: $scope.user.id_agent, name: $scope.user.Prenom+" "+$scope.user.Nom});
            var affiche={
                emetteur:$scope.user.id_agent,
                recepteur:$scope.id_personne
            }
            $http.post(apiUrl+'messagerie/AfficherMessagerie.php',affiche).then((response)=>{
                $scope.messagerie=response.data;;
                console.log($scope.messagerie);
                 for(let i=0;i<$scope.messagerie.length;i++)
                 {
                       if($scope.messagerie[i].emetteur==$scope.user.id_agent)
                       {
                        $scope.messages.push({data:$scope.messagerie[i].message, user:{id: $scope.user.id_admin, name: $scope.user.Prenom+" "+$scope.user.Nom}})
                       }
                       else
                       {
                        $scope.messages.push({to:$scope.messagerie[i].recepteur,data:$scope.messagerie[i].message, user:{id:  $scope.id_personne, name:$scope.personne.Prenom+" "+$scope.personne.Nom} })
                       }
                 } 
            $scope.me = {name:$scope.user.Prenom+" "+$scope.user.Nom};
            // Set User Data
            Messages.user($scope.me);
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // Get Received Messages and Add it to Messages Array.
            // This will automatically update the view.
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            var chatmessages = document.querySelector(".chat-messages");
            Messages.receive(function(msg,isPrivate) {
                $scope.rec=msg;
                console.log($scope.rec);
                if($scope.rec.user.id==$scope.id_personne)
                {
               $scope.messages.push(msg);
               console.log($scope.messages);
               setTimeout(function() {
                chatmessages.scrollTop = chatmessages.scrollHeight;
                }, 10);}
            });
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // Send Messages
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            $scope.send = function(to,text) {
                Messages.send({to:$scope.id_personne,data: $scope.textbox, user: Messages.user()});
                var messg=
                { to:$scope.id_personne,
                  data: $scope.textbox,
                  user: Messages.user().id
                 }
                 $http.post(apiUrl+'messagerie/AjouterMessagerie.php',messg).then((response)=>{
                   $scope.res=response.data;
                   console.log($scope.res);
                    });
                $scope.messages.push({to:$scope.id_personne,data: $scope.textbox, user: Messages.user()});
                $scope.status = "sending";
                $scope.textbox = "";
            setTimeout(function() { 
               $scope.status = "" 
            }, 1200 );
            };});

        });}

}
     });
 };
 export{MessagesController};