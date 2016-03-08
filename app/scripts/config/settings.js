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
                portfolio:'views/portfolio.html',
                bookAnApp: 'views/bookAnApp.html'
            }

        })



})();