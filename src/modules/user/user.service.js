'use strict';

export default class UserService {

	constructor($firebaseObject, firebaseDataService) {
		this.$firebaseObject = $firebaseObject;
		this.ref = firebaseDataService.users;
	}

	create(user) {
		this.ref.child(user.uid).set({
			mail: user.email,
			firstName: user.firstName,
			lastName: user.lastName
		});
	}

	getUser(userId) {
		return this.$firebaseObject(this.ref.child(userId))
			.$loaded()
			.then((user) => this.user = user);
	}

}

UserService.$inject = ['$firebaseObject', 'firebaseDataService'];