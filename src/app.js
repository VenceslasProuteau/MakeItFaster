'use strict';

// import all common scss
import './styles/common.scss';

// import modules 
import angular from 'angular';
import angularfire from 'angularfire';
import uirouter from 'angular-ui-router';
import toaster from 'angularjs-toaster';

import routing from './app.config';

import core from './modules/core/module';
import main from './modules/main/module';
import login from './modules/login/module';
import home from './modules/home/module';
import history from './modules/history/module';
import geolocation from './modules/geolocation/module';
import user from './modules/user/module';
import account from './modules/account/module';

import 'lodash';
import 'angular-simple-logger';
import 'angular-google-maps';
import 'ng-file-upload';

var Firebase = require('firebase');

// import components
import components from './components/module';

angular.module('app', [angularfire, toaster, uirouter, login, home, history, geolocation, user, account, core, components, main])
    .config(routing)
    .run(runApp)


runApp.$inject = ['$rootScope', '$location', '$state', 'SpinnerAPI'];

function runApp($rootScope, $location, $state, SpinnerAPI) {
    $rootScope.$state = $state;
    $rootScope.SpinnerAPI = SpinnerAPI;
    
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
        // could do better, only used for back button for now ... 
        $rootScope.previousState = fromState.name;
        $rootScope.currentState = toState.name;

    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if (error === "AUTH_REQUIRED") {
            $state.go("login");
        }
    });

}

