'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import SpinnerAPI from './spinner.api';
import Spinner from './spinner';

export default angular.module('app.spinner', [])
	.service('SpinnerAPI', SpinnerAPI)
	.directive('spinner', () => new Spinner())
	.name;