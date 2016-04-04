'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import StoreService from './store.service';
import StoreController from './store.controller';
import routing from './store.routes';

export default angular.module('app.store', [uirouter])
    .controller('StoreController', StoreController)
    .service('StoreService', StoreService)
    .config(routing)
    .name;
