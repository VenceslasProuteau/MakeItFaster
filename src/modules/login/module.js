'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import LoginController from './login.controller';
import LoginAPI from './login.api';
import routing from './login.routes';
import LoginDirective from './login.directive';

import loginStyles from './login.scss';

export default angular.module('login', [uirouter])
    .config(routing)
    .controller('LoginController', LoginController)
    .directive('loginDirective', () => new LoginDirective())
    .service('LoginAPI', LoginAPI)
    .name;
