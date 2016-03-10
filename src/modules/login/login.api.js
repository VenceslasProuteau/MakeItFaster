'use strict';

export default class LoginAPI {

	constructor(UserService, $q) {
		this.UserService = UserService;
		this.$q = $q;
	}

	login(user) {
		const deferred = this.$q.defer();

		this.UserService.auth.$authWithPassword({
			email: user.mail,
			password: user.password
		}, {rememberMe: true})
		.then((user) => {
			const storedUser = this.UserService.getStoredUser(user.uid);
			deferred.resolve(storedUser);
		})
		.catch((error) => deferred.reject(error));

		return deferred.promise;
	}

	logout() {
		this.UserService.auth.$unauth();
	}

	signup(user) {
		const deferred = this.$q.defer();

		return this.UserService.auth.$createUser({
		  email: user.mail,
		  password: user.password
		})
		.then((response) => {
			const storedUser = Object.assign({}, user, response);
			this.UserService.setToDb(storedUser);
			deferred.resolve();
		})
		.catch((error) => deferred.reject(error));

		return deferred.promise;

	}


}

LoginAPI.$inject = ['UserService', '$q'];