'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import StarredStoresService from './starredStores.service';

export default angular.module('app.starredstores', [uirouter])
    .service('StarredStoresService', StarredStoresService)
    .name;
