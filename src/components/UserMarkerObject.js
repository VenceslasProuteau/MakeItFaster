class UserMarkerObject {

    constructor(datas, mapObject) {
        mapObject.then((maps) => {
            const options = {
                zoom: 15,
                $id: 500,
                isUserMarker: true,
                options: {
                    icon: {
                        path: maps.SymbolPath.CIRCLE,
                        fillColor: '#008bb3',
                        fillOpacity: 0.8,
                        scale: 8,
                        strokeColor: 'red',
                        strokeWeight: 0.2
                    }
                },
                coords: {
                    longitude: datas.longitude,
                    latitude: datas.latitude
                },
                visible: false
            }
            console.log(options);
            Object.assign(this, options);
        });

        
    }

}

export {UserMarkerObject};
