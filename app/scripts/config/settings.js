/**
 * Created by Lunes on 2015-12-03.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .constant('settings',{
            addr:{
                about:'/about',
                portfolio:'/portfolio',
                bookAnApp:'/bookanapp'
            },
            tplt:{
                beautyByAyy:'views/beautyByAyy.html',
                about:'views/about.html',
                portfolio:'scripts/modules/portfolio/portfolio.html',
                bookAnApp: 'views/bookAnApp.html',
                header:'scripts/modules/header/header.html',
                footer:'scripts/modules/footer/footer.html'
            },
            supportedLanguages: {en: 'English', fr: 'Français'},		//used for Lang selector component
            defaultLanguage: 'en',
            enCode: 'en',
            frCode: 'fr'

        })





})();