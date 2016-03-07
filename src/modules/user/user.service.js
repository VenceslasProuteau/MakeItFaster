'use strict';

export default class UserService {

	constructor($firebaseAuth) {
		this.ref = new Firebase("https://incandescent-fire-9506.firebaseio.com");
		this.auth = $firebaseAuth(this.ref);
	}

	setToDb(user) {
		this.ref.child("users").child(user.uid).set({
			mail: user.mail
		});
	}
}

UserService.$inject = ['$firebaseAuth'];