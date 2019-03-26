angular.module('app.routes', ['highcharts-ng','ionic'])



  .run(function($ionicPlatform, $ionicPopup) {
        $ionicPlatform.ready(function() {
            if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
        });
    })

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  console.log('routas....................')
  $stateProvider
    

    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      cache:false,
      controller:'loginCtrl'
    })


    .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller:'menuCtrl'
    })
              .state('menu.slarelevantes', {
            url: '/page11',
            views: {
              'side-menu21': {
                templateUrl: 'templates/slarelevantes.html',
                controller:'slarelevantesCtrl'
              }
            }
          })

             .state('menu.puestosyagentes', {
              url: '/page36',
              views: {
              'side-menu21': {
                templateUrl: 'templates/puestosyagentes.html',
                controller:'puestosyagentesCtrl'
                }
              }
              
            })

             .state('menu.encuestas', {
              url: '/encuestas',
              views: {
              'side-menu21': {
                templateUrl: 'templates/encuestas.html',
                controller:'encuestasCtrl'
                }
              }
              
            })

              .state('menu.marcadorpredictivo', {
              url: '/marcadorpredictivo',
              views: {
              'side-menu21': {
                templateUrl: 'templates/marcadorpredictivo.html',
                controller:'marcadorpredictivoCtrl'
                }
              }
              
            })

               .state('menu.indicadores', {
              url: '/indicadores',
              views: {
              'side-menu21': {
                templateUrl: 'templates/indicadores.html',
                controller:'indicadoresCtrl'
                }
              }
              
            })




    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');


});



