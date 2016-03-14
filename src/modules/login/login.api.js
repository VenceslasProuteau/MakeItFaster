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
			const storedUser = this.UserService.getUser(user.uid);
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

		// we create the user, that is stored in firebase securedDB
		this.UserService.auth.$createUser({
			email: user.signup.mail,
			password: user.signup.password
		})
		.then((userId) => {
			const storedUser = Object.assign({}, user.signup, userId);
			// we create the user in our own DB now, with basic informations, with userId key.
			this.UserService.create(storedUser);
			deferred.resolve();
		})
		.catch((error) => deferred.reject(error));

		return deferred.promise;

	}


}

LoginAPI.$inject = ['UserService', '$q'];