'use strict';

export default class UserService {

	constructor($firebaseObject, $q, $firebaseAuth, firebaseDataService) {
		this.$firebaseObject = $firebaseObject;
		this.$q = $q;
		this.ref = firebaseDataService.users;
		this.firebaseAuthObject = $firebaseAuth(firebaseDataService.root);
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

	changePassword(user) {
		const deferred = this.$q.defer();

		this.firebaseAuthObject
			.$changePassword({
				email: user.mail,
				oldPassword: user.oldPwd,
				newPassword: user.newPwd
			}).then(function() {
				deferred.resolve();
			}).catch(function(error) {
				deferred.reject(error);
			});
		return deferred.promise;
	}

}

UserService.$inject = ['$firebaseObject', '$q', '$firebaseAuth', 'firebaseDataService'];