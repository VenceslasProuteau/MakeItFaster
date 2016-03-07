'use strict';

export default class UserService {

	constructor($firebaseAuth, $firebaseObject) {
		this.$firebaseObject = $firebaseObject;
		this.ref = new Firebase("https://incandescent-fire-9506.firebaseio.com");
		this.auth = $firebaseAuth(this.ref);
	}

	setToDb(user) {
		this.ref.child("users").child(user.uid).set({
			mail: user.mail
		});
	}

	getUser(userId) {
		const obj = this.$firebaseObject(this.ref.child('users').child(userId));
		const self = this;
		
		return obj.$loaded().then((response) => response);
	}

}

UserService.$inject = ['$firebaseAuth', '$firebaseObject'];