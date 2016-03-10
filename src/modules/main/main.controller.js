'use strict';

export default class MainController {

    constructor($state, $rootScope, $firebaseObject, UserService, resolvedUser) {
        this.$state = $state;
        this.UserService = UserService;

		const user = $firebaseObject(UserService.ref.child('users').child(resolvedUser.uid));
		user.$bindTo($rootScope, 'user');
    }

    logout() {
        this.UserService.auth.$unauth();
        this.$state.go('login');
    }

}

MainController.$inject = ['$state', '$rootScope', '$firebaseObject', 'UserService', 'resolvedUser'];
