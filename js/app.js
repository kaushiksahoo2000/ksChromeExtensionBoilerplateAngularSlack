angular.module('angularSlackChromeExtension', ['ui.router', 'angularSlackChromeExtension.controllers'])
  .config(function($stateProvider){

  $stateProvider

  .state('index', {
    url:'/index',
    templateUrl: './index.html',
    controller: 'IndexCtrl'
  })

  })
