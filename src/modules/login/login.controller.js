'use strict';

export default class LoginController {

    constructor($state, LoginAPI, toaster, $timeout) {
        this.LoginAPI = LoginAPI;
        this.$state = $state;
        this.$timeout = $timeout;
        this.toaster = toaster;
    }

    login(user) {
    	this.LoginAPI.login(user).then((response) => {
    		this.$state.go('app.home');
    	}).catch((error) => {
    		this.toaster.pop('error', "Connexion", "Adresse mail ou mot de passe invalide");	
    	});
    }

    signup(user) {
    	this.LoginAPI.signup(user)
    		.then((response) => {
    			let self = this;
    			this.$timeout(function () {
				    self.toaster.pop('success', 'Inscription', 'Votre compte a bien été créé !');
				 }, 0);
    			this.$state.go('login');
    		}).catch((error) => {
    			this.toaster.pop('error', 'Inscription', 'Un compte a dejà été créé avec cette adresse email');
    		});
    }
}

LoginController.$inject = ['$state', 'LoginAPI', 'toaster', '$timeout'];
