'use strict';

export default class GeolocationService {

	constructor($q, $window) {
		this.$q = $q;
		this.$window = $window;
	}

		/**
	    * Obtains geo position coordinates.
	    * @param  {Object} options Position acquisition options.
	    * @return {Object}         Promise.
	    */
	   getPosition(options) {
	       var defaultOptions = {
               maximumAge: 60000,
               enableHighAccuracy: true,
               timeout: 15000
           };

	       var deferred = this.$q.defer();

	       if (this.$window.navigator.geolocation) {
	           this.$window.navigator.geolocation.getCurrentPosition(function (position) {
	           		console.log(position.coords);
	               deferred.resolve(position.coords);
	           }, function error() {
	               deferred.reject();
	           }, angular.extend({}, defaultOptions, options));
	       } else {
	           deferred.reject();
	       }

	       deferred.promise.catch(function () {
	           // handle errors no gps
	           // TODO prefer sent 'no gps' notification via a bus event ?
	           console.log('error geoloc');

	           return this.$q.reject('erreur geoloc');
	       });

	       return deferred.promise;
	   };

}

GeolocationService.$inject = ['$q', '$window'];