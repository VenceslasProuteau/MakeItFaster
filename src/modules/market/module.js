'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import MarketController from './market.controller';
import ProductsController from './products/products.controller';
import SubCategoryProductsController from './subcategories/subcategoryProducts.controller';

import ProductsService from './products/products.service';
import CategoriesService from './categories/categories.service';
import SubCategories from './subcategories/subcategories.service';

import routing from './market.routes';

export default angular.module('app.market', [uirouter])
    .config(routing)
    .controller('MarketController', MarketController)
    .controller('ProductsController', ProductsController)
    .controller('SubCategoryProductsController', SubCategoryProductsController)
    .service('ProductsService', ProductsService)
    .service('CategoriesService', CategoriesService)
    .service('SubCategories', SubCategories)
    .name;
