'use strict';

import historyTemplate from './history.tpl.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app.history', {
            url: '/history',
            template: historyTemplate,
            controller: 'HistoryController',
            controllerAs: 'historyCtrl'
        });
}
