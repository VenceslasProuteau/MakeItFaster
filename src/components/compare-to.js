'use strict';

export default class CompareTo {
    constructor() {
        this.require = 'ngModel',
        this.scope = {
            otherModelValue: "=compareTo"
        }
    }

    link(scope, element, attributes, ngModel) {
        console.log(ngModel);
        ngModel.$validators.compareTo = function(modelValue) {
            return modelValue === scope.otherModelValue;
        };

        scope.$watch("otherModelValue", function() {
            ngModel.$validate();
        });
    }
}
