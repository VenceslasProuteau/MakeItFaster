'use strict';

export default class ProductsController {

    constructor(resolvedSubCategories) {
    	this.subcategories = resolvedSubCategories;
    }

}

ProductsController.$inject = ['resolvedSubCategories'];