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
		})
		.then((response) => deferred.resolve(response))
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
			const storedUser = angular.extend({}, user, response);
			this.UserService.setToDb(storedUser);

			deferred.resolve(response);
		})
		.catch((error) => deferred.reject(error));

		return deferred.promise;

	}


}

LoginAPI.$inject = ['UserService', '$q'];