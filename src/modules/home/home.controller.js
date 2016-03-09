'use strict';

export default class HomeController {

    constructor($window, GeolocationService, toaster) {

    	this.userMarker = {};
    	this.markers = [];
    	var self = this;

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
