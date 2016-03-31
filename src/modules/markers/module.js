'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import MarkersService from './markers.service';

export default angular.module('app.markers', [uirouter])
    .service('MarkersService', MarkersService)
    .name;
