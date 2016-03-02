'use strict';

export default class LoginAPI {

	constructor(UserService, $q, $state) {
		this.UserService = UserService;
		this.$q = $q;
	}

	login(user) {
		let deferred = this.$q.defer();

		this.UserService.$authWithPassword({
			email: user.mail,
			password: user.password
		}).then((authData) => {
			this.UserService.user = authData;
			deferred.resolve();
		}).catch((error) => deferred.reject(error));

		return deferred.promise;
	}

	logout() {
		this.auth.$unauth();
	}

	signup(user) {
		let deferred = this.$q.defer();

		this.UserService.$createUser({
		  email: user.mail,
		  password: user.password
		}).then(function(userData) {
		  deferred.resolve();
		}).catch((error) => deferred.reject(error));

		return deferred.promise;
	}


}

LoginAPI.$inject = ['UserService', '$q', '$state', '$firebaseAuth'];