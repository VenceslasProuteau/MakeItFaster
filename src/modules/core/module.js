'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import firebaseDataService from './firebasedata.service';

export default angular.module('app.core', [uirouter])
    .constant('FIREBASEURL', 'https://incandescent-fire-9506.firebaseio.com')
	.constant('PROTECTED_PATHS', ['main'])
    .service('firebaseDataService', firebaseDataService)
    .name;
