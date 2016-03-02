'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import UserService from './user.service';

export default angular.module('app.user', [uirouter])
    .service('UserService', UserService)
    .name;
