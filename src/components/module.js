'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import Spinner from './spinner/module';
import CompareTo from './compare-to';

export default angular.module('app.components', [Spinner])
	.directive('compareTo', () => new CompareTo)
	.name;