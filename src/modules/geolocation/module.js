'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import GeolocationService from './geolocation.service';

export default angular.module('app.geolocation', [uirouter])
	.service('GeolocationService', GeolocationService)
    .name;
