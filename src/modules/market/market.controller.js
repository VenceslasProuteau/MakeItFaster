'use strict';

export default class MarketController {

    constructor(resolvedMarket, resolvedCategories) {
        this.market = resolvedMarket;
        this.categories = resolvedCategories;
    }

}

MarketController.$inject = ['resolvedMarket', 'resolvedCategories'];