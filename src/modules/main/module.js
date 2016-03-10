'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import MainController from './main.controller';
import routing from './main.routes';

export default angular.module('app.main', [uirouter])
    .config(routing)
    .controller('MainController', MainController)
    .run(modalMaskEventConfig)
    .run(toggleOffCanvasButtonConfig)
    .run(hideCanvas)
    .name;





modalMaskEventConfig.$inject = ['$rootScope'];
/**
 *
 * Part of the main modal mask
 *
 */
function modalMaskEventConfig($rootScope) {

    //
    // Modal Mask Hack
    // Can be a separate component...
    //
    // @description
    // Unify the modal mask behaviour between all the modals
    // (like global spinners, offcanvas menu or other lamba modals).
    //
    // TODO #REFACTO : can be a separate component
    //

    $rootScope.isModalMaskVisible = false;
    $rootScope.isBodyAsideVisible = false;

    $rootScope.$on('main:modalMask:isModalMaskVisible', function ($event, value) {
        $rootScope.isModalMaskVisible = value;
    });

    $rootScope.onModalMaskClick = function () {
        $rootScope.$broadcast('main:modalMask:isModalMaskVisible', false);
    };

}


toggleOffCanvasButtonConfig.$inject = ['$rootScope'];
/**
 *
 * Part of the navbar
 *
 */
function toggleOffCanvasButtonConfig($rootScope) {
    // Following the main#modalMaskEventConfig

    $rootScope.showTheOffCanvas = function () {
        $rootScope.$emit('main:modalMask:isModalMaskVisible', true);

        $rootScope.isAsideOffcanvasVisible = true;

        // Wait for it to close the offcanvas
        $rootScope.$on('main:modalMask:isModalMaskVisible', function ($event, value) {
            if (value) { return; }

            $rootScope.isAsideOffcanvasVisible = value;
        });
    };
}


hideCanvas.$inject = ['$rootScope'];
/**
 *
 * hideCanvas when you change state
 *
 */
function hideCanvas($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {

        // we avoid to broadcast isModal
        if(toParams.blockCanvas) {
            return;
        }

        $rootScope.$broadcast('main:modalMask:isModalMaskVisible', false);
        $rootScope.isBodyAsideVisible = false;
    });
}
