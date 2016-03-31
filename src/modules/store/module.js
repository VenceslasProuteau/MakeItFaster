'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import StoreService from './store.service';

export default angular.module('app.store', [uirouter])
    .service('StoreService', StoreService)
    .name;
