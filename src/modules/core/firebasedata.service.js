'use strict';

import FIREBASEURL from './module';

export default class firebaseDataService {
	constructor(FIREBASEURL) {
		this.root = new Firebase(FIREBASEURL);
		this.users = this.root.child('users');
		return this;
	}
}

