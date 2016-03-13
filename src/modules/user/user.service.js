'use strict';

export default class UserService {

	constructor($firebaseAuth, $firebaseObject) {
		this.$firebaseObject = $firebaseObject;
		this.ref = new Firebase("https://incandescent-fire-9506.firebaseio.com");
		this.auth = $firebaseAuth(this.ref);
	}

	save(user) {
		this.ref.child("users").child(user.uid).set({
			mail: user.mail,
			firstName: user.firstName,
			lastName: user.lastName,
			uid: user.uid
		});
	}

	getUser(userId) {
		return this.$firebaseObject(this.ref.child('users').child(userId))
			.$loaded().then((user) => this.user = user);
	}

}

UserService.$inject = ['$firebaseAuth', '$firebaseObject'];