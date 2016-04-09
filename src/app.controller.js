'use strict';

import appStyles from './app.scss';

export default class AppCOntroller {

	constructor($state) {
	    this.appStyles = appStyles;
	    this.loginState = () => {
	        if (state.current.name === 'login' || $state.current.name === 'signup') {
	            return this.appStyles['layouLogin'];
	        }
	    }
	}
}

	