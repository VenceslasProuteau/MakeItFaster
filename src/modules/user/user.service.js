'use strict';

export default class UserService {

	constructor($firebaseAuth) {
		this.ref = new Firebase("https://incandescent-fire-9506.firebaseio.com");
		this.auth = $firebaseAuth(this.ref);
		return this.auth;
	}

}

UserService.$inject = ['$firebaseAuth'];