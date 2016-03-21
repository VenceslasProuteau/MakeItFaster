'use strict';

export default class HomeController {

    constructor($window, GeolocationService, toaster) {


        this.stores = [

            {
                name: 'Carrefour Issy-Gare SNCF',
                quartier: 'Gare SNCF',
                ville: 'Issy les moulineaux',
                adresse: '1 rue de la gare',
                imageURL: '',
                coords: {
                    latitude: 40.891304999999996,
                    longitude: 1.3729866999999998
                }
            },
            {
                name: 'Carrefour Issy-Epinettes',
                quartier: 'Epinettes',
                ville: 'Issy les moulineaux',
                adresse: '7 rue des peupliers',
                imageURL: '',
                coords: {
                    latitude: 40.891304999999996,
                    longitude: 1.3929866999999998
                }
            },
            {
                name: 'Carrefour Fleury',
                quartier: 'Val fleury',
                ville: 'Meudon sur seine',
                adresse: '1 rue de Fleury',
                imageURL: '',
                coords: {
                    latitude: 40.891304999999996,
                    longitude: 1.3529866999999998
                }
            }

        ];

    	this.userMarker = {};
    	this.markers = [];
    	const self = this;

		GeolocationService.getPosition()
			.then((response) => {
				console.log(response);
		    	self.centerMap = GeolocationService.formatMarker({
		    		isUserPosition: true,
		    		coords: {
		    			latitude: response.latitude, //Position initial de la carte
		    			longitude: response.longitude
		    		},
		    		options: {
		    			icon: 'http://maps.gpsvisualizer.com/google_maps/icons/google/blue.png'
		    		}
		    	});

		    	self.userMarker = angular.copy(self.centerMap);
		    	self.markers = GeolocationService.getMarkers();
		    	self.markers.push(self.userMarker);

    		}).catch((error) => {
    			toaster.pop('error', 'erreur');
    		});

    }

    clickMarker(marker) {
       alert(marker.email); //Affichera l'email du point sur lequel on a cliqué
    }

    centerStore(storeCoords) {
        this.centerMap.coords = storeCoords;
    }
/*
    maPosition(position) {
    	this.map = {
    	   center: {
    		latitude: position.coords.latitude, //Position initial de la carte
    		longitude: position.coords.longitude
    	   },
    	   zoom: 11 // de 0 à 19, 0 étant la valeur de zoom la plus forte
    	};

    	this.markers = [{
    		coord: {
    			latitude: position.coords.latitude,
    			longitude: position.coords.longitude,
    		},
    		email: "netapsys@netapsys.fr",
    	    icon: "//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    	    id: 413
    	}]
	}*/
}

HomeController.$inject = ['$window', 'GeolocationService', 'toaster'];
