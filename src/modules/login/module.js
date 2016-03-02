'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import LoginController from './login.controller';
import LoginAPI from './login.api';
import routing from './login.routes';

export default angular.module('login', [uirouter])
    .config(routing)
    .controller('LoginController', LoginController)
    .service('LoginAPI', LoginAPI)
    .name;
