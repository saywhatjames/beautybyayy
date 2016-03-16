/**
 * Created by james.magpantay on 12/29/2015.
 */

(function () {

    angular
        .module('app')
        .controller('rootController', rootController);

    rootController.$inject = ['$scope', '$rootScope','$state', '$window','$translate','userLanguage'];

    function rootController($scope, $rootScope, $state, $window,$translate,userLanguage) {
        var vm = this;

        //Make the these service (objects) available for template all over the page, even we can bind the service attribute with ngModel directly.

        vm.router = $state;

        vm.showSpinner = showSpinner;
        vm.hideSpinner = hideSpinner;


        vm.configureLang = configureLang;
        vm.configureBehaviour = configureBehaviour;
        vm.init = init;

        vm.viewportWidth = $window.innerWidth;
        vm.selectedLang = userLanguage.setLang();


        vm.init();

        function init(){

            /*
             * If a click was not stop-propagation, it will reach the root and echo as 'outsideClick'.
             * So all component in the page can listen the outside clicking events.
             */
            /*  $window.onclick = function () {
             $rootScope.$broadcast('outsideClick');

             };*/

            vm.configureLang();
            vm.configureBehaviour();

        }

        function showSpinner(){
            vm.loading = true;
        }

        function hideSpinner(){
            vm.loading = false;
        }

        function configureLang(lang){
            vm.selectedLang = userLanguage.lang;
            $translate.use(vm.selectedLang);
            $scope.$on('langChange', function(event,data) {
                vm.selectedLang = userLanguage.lang;
                $translate.use(vm.selectedLang);
            });
        }



        function configureBehaviour(){
            $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                if (toState.resolve) {
                    vm.showSpinner();
                }
                $window.scrollTo(0,0);
            });
            $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                if (toState.resolve) {
                    vm.hideSpinner();
                }
            });

            $scope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                if (toState.name === 'userManagement') {
                    return $state.go('unauthorized');
                }
                return error;
            });
        }







    }
})();