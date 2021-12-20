function Routes ($routeProvider,$locationProvider){
  
    $routeProvider
    .when('/accueil', {
        title: 'Home',
        templateUrl: 'views/Accueil.html',
        controller:'AccueilController'
      
    }).when('/admins', {
        title: 'Gestion admin',
        templateUrl: 'views/Admins.html',
        controller:'AdminController'
      
    }).when('/clients', {
         title: 'Gestion client',
        templateUrl: 'views/Clients.html',
        controller:'ClientController'
      
    }).when('/agents', {
        title: 'Gestion agent',
        templateUrl: 'views/Agents.html',
        controller:'AgentController'
      
    }).when('/enquete', {
        title: 'Creation d un enquête',
        templateUrl: 'views/Enquêtes.html',
        controller:'FormController'
      
    }).when('/gestionEnquete', {
        title: 'Gestion d enquête',
        templateUrl: 'views/GestionEnquete.html',
        controller:'HiqEnqController'
      
    }).when('/modifierEnquete', {
        title: 'Modifier Enquête',
        templateUrl: 'views/ModifierEnquêtes.html',
        controller:'ModifierFormController'
      
    }).when('/repondreEnquete', {
        title: 'Repondre Enquete',
        templateUrl: 'views/RepondreEnquêtes.html',
        controller:'ModifierFormController'
      
    }).when('/AffecterEnquete', {
        title: 'Les Agents',
        templateUrl: 'views/AffecterEnquetes.html',
        controller:'AgentEspace'
      
    }).when('/EnqueteCours', {
        title: 'Enquete en cour',
        templateUrl: 'views/EnqueteCours.html',
       controller:'EventsController'
      
    }).when('/EnqueteTermine', {
        title: 'Enquete terminées',
        templateUrl: 'views/EnqueteTermine.html',
        controller:'EventsController'
      

    })
    .when('/enquetes', {
        title: 'Enquetes',
        templateUrl: 'views/Enquetes_Agent.html',
        controller:'Agent_EnquetesController'
      

    })
    .when('/Enquetescours', {
        title: 'enquete en cours',
        templateUrl: 'views/SondageEnCours.html',
        controller:'Client_EnquetesController'
      

    }).when('/Enquetestermine', {
        title: 'enquete terminé',
        templateUrl: 'views/SondageTermine.html',
        controller:'Client_EnquetesController'
      

    }).when('/AgentsTermine', {
        title: 'Agents terminées',
        templateUrl: 'views/AgentsTermine.html',
        controller:'AgentEspace'
      
    }).when('/statistic', {
        title: 'statistique',
        templateUrl: 'views/popup/enquete/statistic_Event.html',
        controller:'StatistiqueController'
      
    }).when('/statistiques', {
        title: 'Gestion statistique',
        templateUrl: 'views/Statistiques.html',
        controller:'Agent_EnquetesController'
      
    })
    .when('/messages', {
        title: 'Messages',
        templateUrl: 'views/Messages.html',
        controller:'MessagesController'
      
    }).when('/exporter', {
        title: 'Exporter',
        templateUrl: 'views/Exporter.html',
        controller:'ExporterController'
      
    })
    .when('/Profile', {
        templateUrl: 'views/Profile.html',
        controller:'NavbarController'
      
    });

  $locationProvider.html5Mode(true);
}

export {Routes};
