'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import AccountController from './account.controller';
import routing from './account.routes';

export default angular.module('app.account', [uirouter])
    .config(routing)
    .controller('AccountController', AccountController)
    .name;
