'use strict';

export default class UserService {

	constructor($firebaseAuth, $firebaseObject) {
		this.$firebaseObject = $firebaseObject;
		this.ref = new Firebase("https://incandescent-fire-9506.firebaseio.com/users");
		this.auth = $firebaseAuth(this.ref);
	}

	create(user) {
		this.ref.child(user.uid).set({
			mail: user.mail,
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

UserService.$inject = ['$firebaseAuth', '$firebaseObject'];