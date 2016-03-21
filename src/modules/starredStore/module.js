'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import StarredStoreService from './starredStore.service';

export default angular.module('app.starredstore', [uirouter])
    .service('StarredStoreService', StarredStoreService)
    .name;
