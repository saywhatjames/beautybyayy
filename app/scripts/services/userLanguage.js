(function () {
    'use strict';

    angular
        .module('app')
        .factory('userLanguage', userLanguage);
    userLanguage.$inject = ['$window','$rootScope', 'settings', '$cookies'];
    function userLanguage($window,$rootScope, settings, $cookies) {


        var _domain = $window.location.hostname.replace('www', '');
        var _language = $cookies.get('language');
        var lang = _language;

        var userLanguage = {
            setLang: setLang,
            lang:lang
        };

        userLanguage.setLang();

        return userLanguage;


        function setLang (value) {
            if (angular.isUndefined(value)) {
                if (!_language || !settings.supportedLanguages[_language]) {
                    var defaultLanguage = ($window.navigator.language || $window.navigator.browserLanguage).substr(0, 2);
                    if (!(defaultLanguage in settings.supportedLanguages)) {
                        defaultLanguage = settings.defaultLanguage;
                    }
                    _language = defaultLanguage;
                    setLangCookie(_language);
                }
            } else {
                _language = value;
                setLangCookie(value);
            }

            $rootScope.$broadcast('langChange');

            function setLangCookie(value) {
                $window.document.cookie = 'language=' + value + ';domain=' + _domain + ';path=' + '/';
                if (settings.isLocal) {
                    $cookies.put('language', value, '/');
                }

                userLanguage.lang = value;

            }
        }
    }

})();