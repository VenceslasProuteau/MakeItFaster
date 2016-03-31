class UserMarkerObject {

    constructor(datas) {
        const options = {
            zoom: 15,
            $id: 500,
            isUserMarker: true,
            options: {
                icon: 'https://cdn4.iconfinder.com/data/icons/gnome-desktop-icons-png/PNG/64/Gnome-Stock-Person-64.png'
            },
            coords: {
                longitude: datas.longitude,
                latitude: datas.latitude
            },
            visible: false
        };

        Object.assign(this, options);
    }

}

export {UserMarkerObject};
