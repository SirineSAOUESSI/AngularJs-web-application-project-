import{Authn} from './Controllers/AuthController.js';
var aut=angular.module('Authen',[]);
var base_url = window.location.origin;
var pathparts = location.pathname ;
var NameApplication=pathparts.split('/');
var URL=base_url +'/'+NameApplication[1];
aut.value('Url',URL+'/serverside/');
aut.controller('AuthController',Authn);
