'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app.history', {
            url: '/history',
            template: require('./history.tpl.html'),
            controller: 'HistoryController',
            controllerAs: 'historyCtrl',
            resolve: {
            }
        });
}
