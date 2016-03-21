'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import StoresService from './stores.service';

export default angular.module('app.stores', [uirouter])
    .service('StoresService', StoresService)
    .name;
