'use strict';

import styles from './spinner.scss';

export default class Spinner {
    constructor() {
    	this.restrict = 'E';
        this.template = require('./spinner.tpl.html');
    }

    link(scope) {
    	scope.styles = styles;
    }
}
