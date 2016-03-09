'use strict';

export default class GeolocationService {

	constructor($q, $window) {
		this.$q = $q;
		this.$window = $window;
        this.defaultMarker = {
            isUserPosition: false,
            id: 415,
            icon: '//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            coords: {},
            zoom: 11
        };
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
        }

        formatMarker(marker) {
            return angular.extend({}, this.defaultMarker, marker);
        }

        getMarkers() {
            let markers = [
                {
                    coords: {
                        latitude: 40.891304999999996,
                        longitude: 1.3529866999999998
                    },
                    email: "netapsys@netapsys.fr",
                    icon: "//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                    id: 412
                },{
                    coords: {
                        latitude: 35.891304999999996,
                        longitude: 1.3529866999999998
                    },
                    email: "netapsys@netapsys.fr",
                    icon: "//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                    id: 413
                }
            ];
            markers.forEach((value, key) => {
                markers[key] = this.formatMarker(value);
            });

            return markers;

            // get all markers from DB
            // and add markers to 
        }

}

GeolocationService.$inject = ['$q', '$window'];