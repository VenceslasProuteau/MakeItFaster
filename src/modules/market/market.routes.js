'use strict';

import marketTemplate from './index.tpl.html';
import productsTemplate from './products/products.tpl.html';
import subcategoryTemplate from './subcategories/subcategory-products.tpl.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('app.market', {
            url: '/market/:id',
            data: {
                breadcrumbTitle: 'Market'
                /*hasActions: true*/
            },
            views: {
                'content@app': {
                    template: marketTemplate,
                    controller: 'MarketController',
                    controllerAs: 'marketCtrl'
                }
            },
            resolve: {
                resolvedCategories: function ($stateParams, CategoriesService) {
                    return CategoriesService.getCategories($stateParams.id);
                    resolvedCategories.$inject = ['$stateParams', 'CategoriesService'];
                },
                resolvedMarket: function ($stateParams, StoresService) {
                    return StoresService.getStore($stateParams.id);
                    resolvedMarket.$inject = ['$stateParams', 'StoresService'];
                }
            }
        })
        .state('app.market.products', {
            url: '/products/:catId',
            views: {
                'detail': {
                    template: productsTemplate,
                    controller: 'ProductsController',
                    controllerAs: 'productsCtrl'
                }
            },
            resolve: {
                resolvedSubCategories: function ($stateParams, CategoriesService) {
                    return CategoriesService.getSubCategories($stateParams.catId);
                    resolvedSubCategories.$inject = ['$stateParams', 'CategoriesService'];
                }
            }
        })
        .state('app.market.products.subcategory', {
            url: '/:subcategoryId',
            views: {
                'subcategory': {
                    template: subcategoryTemplate,
                    controller: 'SubCategoryProductsController',
                    controllerAs: 'subCatCtrl'
                }
            },
            resolve: {
                resolvedSubCategoriesProducts: function ($stateParams, ProductsService) {
                    return ProductsService.getProducts($stateParams.subcategoryId);
                    resolvedSubCategoriesProducts.$inject = ['$stateParams', 'ProductsService'];
                }
            }
        });
}