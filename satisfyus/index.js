import {Menu,navbar} from './Controllers/layouts.js';
import{Routes} from './Routes.js';
import{file} from './controllers/directiveFileUpload.js';
import{serviceFile} from './controllers/serviceFileUpload.js';
import{AccueilController} from './Controllers/AccueilController.js';
import{AdminController,ctrAdminController} from './Controllers/AdminController.js';
import{ClientController,ctrClientController} from './Controllers/ClientController.js';
import{AgentController,ctrAgentController} from './Controllers/AgentController.js';
import {ServiceAuth} from './ServiceAuth.js';
import {FormRun} from './Controllers/FormRun.js';
import {FormController} from './Controllers/FormController.js';
import {ModifierFormController} from './Controllers/ModifierFormController.js';
import {HisEnqController,ctrEnqueteController} from './Controllers/HisEnqController.js';
import {StatistiqueController,ctrStatistiqueController} from './Controllers/StatistiqueController.js';
import {AgentEspace,ctrAgentEspaceController,ctrEditer_EventsController} from './Controllers/AgentEspace.js';
import {EnqueteCoursController,ctrModifierEnqueteAgent} from './Controllers/EnqueteCoursController.js';
import {Agent_EnquetesController} from './Controllers/Agent_EnquetesController.js';
import {Client_EnquetesController} from './Controllers/Client_EnquetesController.js';
import {EventsController,ctrEventController,ctrEventController_Termine} from './Controllers/EventsController.js';
import{MessagesController} from './controllers/MessagesController.js';
import{ExporterController} from './controllers/ExporterController.js';
var app=angular.module('home',['ngRoute','ui.bootstrap','builder', 'builder.components', 'validator.rules','ngSanitize','ui.select','chart.js','ui.utils','chat']);
var base_url = window.location.origin;
var pathparts = location.pathname ;
var NameApplication=pathparts.split('/')
var URL=base_url +'/'+NameApplication[1];
app.value('apiUrl',URL+'/serverside/');
app.config(Routes);
app.factory('Auth',ServiceAuth);
app.directive('fileModel',['$parse',file]);
app.service('fileUpload',['$http',serviceFile]);
app.controller('AccueilController',AccueilController);
angular.module('chat').constant( 'config', {
    rltm: {
        service: 'pubnub', 
        config: {
            publishKey: 'demo',
            subscribeKey: 'demo'
        }
    }
});
app.controller('MenuController',Menu);
app.controller('NavbarController',['$scope','$http','apiUrl','$document','Auth','fileUpload','$location',navbar]);
app.controller('AdminController',AdminController); 
app.controller('ctrAdminController',['$scope','fileUpload','apiUrl','$http','$uibModal','Auth','$location',ctrAdminController]);
app.controller('ClientController',ClientController);
app.controller('ctrClientController',['$scope','fileUpload','apiUrl','$http','$uibModal','Auth','$location','$document',ctrClientController]);
app.controller('AgentController',AgentController);
app.controller('ctrAgentController',['$scope','fileUpload','apiUrl','$http','$uibModal','Auth','$location','$rootScope',ctrAgentController]);
app.controller('ctrEditer_EventsController',ctrEditer_EventsController);
app.run(['$builder',FormRun]);
app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
app.controller('FormController',['$scope','$builder','$validator','$http','apiUrl',FormController]);
app.controller('ModifierFormController',['$scope','$builder','$validator','$http','apiUrl',ModifierFormController]);
app.controller('HiqEnqController',HisEnqController);
app.controller('ctrEnqueteController',ctrEnqueteController);
app.controller('AgentEspace',AgentEspace);
app.controller('ctrAgentEspaceController',ctrAgentEspaceController);
app.controller('StatistiqueController',StatistiqueController);
app.controller('ctrStatistiqueController',ctrStatistiqueController);
app.controller('EnqueteCoursController',EnqueteCoursController);
app.controller('ctrModifierEnqueteAgent',ctrModifierEnqueteAgent);
app.controller('EventsController',EventsController);
app.controller('ctrEventController',ctrEventController);
app.controller('ctrEventController_Termine',ctrEventController_Termine);
app.controller('Agent_EnquetesController',Agent_EnquetesController);
app.controller('Client_EnquetesController',Client_EnquetesController);
app.controller('MessagesController',['$scope','$http','apiUrl','Messages',MessagesController]);
app.controller('ExporterController',ExporterController);