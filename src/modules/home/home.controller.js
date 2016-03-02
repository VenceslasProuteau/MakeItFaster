'use strict';

export default class HomeController {

    constructor(resolvedUser) {
        this.user = resolvedUser;
    }

}

HomeController.$inject = ['resolvedUser'];
