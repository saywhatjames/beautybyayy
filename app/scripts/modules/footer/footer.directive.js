/**
 * Created by james.magpantay on 3/16/2016.
 */
/**
 * Created by james.magpantay on 3/16/2016.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .directive('bbaFooter',footer);

    footer.$inject = ['settings'];


    function footer(settings) {
        var directive = {
            restrict: 'E',
            templateUrl: settings.tplt.footer
        };

        return directive;

    }
})();