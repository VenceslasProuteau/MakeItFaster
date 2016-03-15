'use strict';

export default class LoginAPI {

	constructor(UserService, $q, $firebaseAuth, firebaseDataService) {
		this.UserService = UserService;
		this.$q = $q;

		this.firebaseAuthObject = $firebaseAuth(firebaseDataService.root);
	}



	login(user) {
		const deferred = this.$q.defer();

		this.firebaseAuthObject.$authWithPassword(user, {rememberMe: true})
		.then((user) => {
			const storedUser = this.UserService.getUser(user.uid);
			deferred.resolve(storedUser);
		})
		.catch((error) => deferred.reject(error));

		return deferred.promise;
	}

	logout() {
		this.firebaseAuthObject.$unauth();
	}

	signup(user) {
		const deferred = this.$q.defer();

		// we create the user, that is stored in firebase securedDB
		this.firebaseAuthObject.$createUser(user.signup)
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

LoginAPI.$inject = ['UserService', '$q', '$firebaseAuth', 'firebaseDataService'];