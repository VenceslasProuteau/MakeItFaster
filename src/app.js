'use strict';

// import all common scss
import './styles/common.scss';

import angular from 'angular';
import angularfire from 'angularfire';
import uirouter from 'angular-ui-router';
import toaster from 'angularjs-toaster';

import routing from './app.config';
import login from './modules/login/module';
import home from './modules/home/module';
import history from './modules/history/module';
import geolocation from './modules/geolocation/module';
import user from './modules/user/module';
import header from './modules/header/module';

import CompareTo from './components/compare-to';

var Firebase = require('firebase');

angular.module('app', [angularfire, toaster, uirouter, login, home, history, geolocation, user, header])
    .config(routing)
    .run(runApp)
    .directive('compareTo', () => new CompareTo);


runApp.$inject = ['$rootScope', '$location', '$state', 'UserService'];

function runApp($rootScope, $location, $state, UserService) {
    $rootScope.$state = $state;
    
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
        // could do better, only used for back button for now ... 
        $rootScope.previousState = fromState.name;
        $rootScope.currentState = toState.name;

    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if (error === "AUTH_REQUIRED") {
            $state.go("app.login");
        }
    });

}

