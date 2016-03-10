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




/**
 *
 * Part of the main modal mask
 *
 * @ngInject
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

/**
 *
 * Part of the navbar
 *
 * @ngInject
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

/**
 *
 * hideCanvas when you change state
 *
 * @ngInject
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
