/**
 * Created by Lunes on 2015-12-03.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider','settings'];


    function config($stateProvider,$urlRouterProvider,settings) {

        var tplt = settings.tplt;
        var addr = settings.addr;

        var allStates = [
            {
                name:'about',
                url:addr.about,
                templateUrl:tplt.about
            },
            {
                name:'portfolio',
                url:addr.portfolio,
                templateUrl:tplt.portfolio
            },
            {
                name:'bookAnApp',
                url:addr.bookAnApp,
                templateUrl:tplt.bookAnApp
            }
        ];

        angular.forEach(allStates,function(state,key){
            $stateProvider.state(state);
        });

        $urlRouterProvider.when('', addr.portfolio);
        $urlRouterProvider.when('/', addr.portfolio);




    }
})();