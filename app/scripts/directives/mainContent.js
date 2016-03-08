/**
 * Created by Lunes on 2015-12-03.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .directive('mainContent',mainContent);

    mainContent.$inject = ['settings'];


    function mainContent(settings) {
        var directive = {
            restrict: 'E',
            templateUrl: settings.tplt.beautyByAyy
        };

        return directive;

    }
})();