'use strict';

export default class SubCategoryProductsController {

    constructor(resolvedSubCategoriesProducts) {
    	this.products = resolvedSubCategoriesProducts;
    }

}

SubCategoryProductsController.$inject = ['resolvedSubCategoriesProducts'];