'use strict';

export default class HeaderController {

    constructor($scope, UserService, $state, $firebaseObject, resolvedUser) {
        this.UserService = UserService;
        this.$state = $state;
        this.visibleMenu = false;
        
        const user = $firebaseObject(UserService.ref.child('users').child(resolvedUser.uid));
      	user.$bindTo($scope, 'user');
    }

    logout() {
    	this.UserService.auth.$unauth();
    	this.$state.go('login');
    }

    changeView(view) {
        this.$state.go(view);
        this.visibleMenu = false;
    }
}

HeaderController.$inject = ['$scope', 'UserService', '$state', '$firebaseObject', 'resolvedUser'];
