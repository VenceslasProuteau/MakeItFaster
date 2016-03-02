'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import HeaderController from './header.controller';

export default angular.module('app.header', [])
    .controller('HeaderController', HeaderController)
    .name;
