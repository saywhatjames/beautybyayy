/**
 * Created by james.magpantay on 3/16/2016.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .directive('bbaHeader',header);

    header.$inject = ['settings'];


    function header(settings) {
        var directive = {
            restrict: 'E',
            templateUrl: settings.tplt.header
        };

        return directive;

    }
})();