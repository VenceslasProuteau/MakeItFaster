'use strict';

export default class LoginController {

    constructor($state, $timeout, LoginAPI, toaster, SpinnerAPI) {
        this.$state = $state;
        this.$timeout = $timeout;

        this.LoginAPI = LoginAPI;
        this.toaster = toaster;
        this.SpinnerAPI = SpinnerAPI;
    }

    login(user) {
        this.SpinnerAPI.show();
    	this.LoginAPI.login(user).then((response) => {
    		this.$state.go('app.home');
            this.SpinnerAPI.hide();
    	}).catch((error) => {
    		this.toaster.pop('error', "Connexion", "Adresse mail ou mot de passe invalide");	
    	}).finally(() => this.SpinnerAPI.hide());
    }

    signup(user) {
        this.SpinnerAPI.show();
    	this.LoginAPI.signup(user)
    		.then((response) => {
    			let self = this;
    			this.$timeout(function () {
				    self.toaster.pop('success', 'Inscription', 'Votre compte a bien été créé !');
				 }, 0);
    			this.$state.go('login');
                this.SpinnerAPI.hide();
    		}).catch((error) => {
    			this.toaster.pop('error', 'Inscription', 'Un compte a dejà été créé avec cette adresse email');
    		}).finally(() => this.SpinnerAPI.hide());
    }
}

LoginController.$inject = ['$state', '$timeout', 'LoginAPI', 'toaster', 'SpinnerAPI'];
