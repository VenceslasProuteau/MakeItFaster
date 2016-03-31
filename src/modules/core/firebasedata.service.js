'use strict';

import FIREBASEURL from './module';

export default class firebaseDataService {
	constructor(FIREBASEURL) {
		this.root = new Firebase(FIREBASEURL);
		this.users = this.root.child('users');
		this.stores = this.root.child('stores');
		this.markers = this.root.child('markers');
		this.starredStores = this.root.child('starred');
	}
}

