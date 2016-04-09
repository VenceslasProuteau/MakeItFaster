'use strict';

import loginStyles from './login.scss';

export default class LoginDirective {

    constructor() {
    	this.restrict = 'E';
        this.template = require('./login-signin.tpl.html');
        this.scope = {
        	action: '='
        };
        this.controller = 'LoginController';
        this.controllerAs = 'loginCtrl';
    }

    link(scope) {
    	scope.loginStyles = loginStyles;
    }
}