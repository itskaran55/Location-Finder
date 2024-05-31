import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

// If I want to use a Font Awesome icon
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import the desired Font Awesome icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component

const cutomIcon = L.icon({
    iconUrl: `https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png`,
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -41]
})

const Map = ({ lat, lon }) => {
    return (
        <>
            <div>
                <MapContainer center={[lat, lon]} zoom={15} style={{ height: "100vh", width: "100%" }}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[lat, lon]} icon={cutomIcon} >
                        <Popup>
                            Karan is here.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}

export default Map
