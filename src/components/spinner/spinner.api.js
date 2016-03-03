'use strict';

export default class SpinnerAPI {
	constructor() {
		this.pendingSpinners = 0;
	}

	visible() {
		return this.pendingSpinners > 0;
	}
	
	show() {
        this.pendingSpinners += 1;
        return this.pendingSpinners;
    }

    hide() {
    	if (this.pendingSpinners > 0) { this.pendingSpinners -= 1; }
        return this.pendingSpinners;
    }

    reset() {
    	this.pendingSpinners = 0;
        return this;
    }
}