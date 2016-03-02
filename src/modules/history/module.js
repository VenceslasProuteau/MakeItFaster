'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import HistoryController from './history.controller';
import routing from './history.routes';

export default angular.module('app.history', [uirouter])
    .config(routing)
    .controller('HistoryController', HistoryController)
    .name;
