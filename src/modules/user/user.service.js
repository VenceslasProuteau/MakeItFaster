'use strict';

export default class UserService {

	constructor($firebaseObject, $q, firebaseDataService) {
		this.$firebaseObject = $firebaseObject;
		this.$q = $q;
		this.ref = firebaseDataService.users;
	}

	create(user) {
		this.ref.child(user.uid).set({
			mail: user.email,
			firstName: user.firstName,
			lastName: user.lastName
		});
	}

	save(user) {
		const deferred = this.$q.defer();

		Object.assign(this.user, user);
		this.user.$save()
			.then((user) => deferred.resolve(user))
			.catch((error) => deferred.reject(error));

		return deferred.promise;
	}

	getUser(userId) {
		return this.$firebaseObject(this.ref.child(userId))
			.$loaded()
			.then((user) => this.user = user);
	}

}

UserService.$inject = ['$firebaseObject', '$q', 'firebaseDataService'];