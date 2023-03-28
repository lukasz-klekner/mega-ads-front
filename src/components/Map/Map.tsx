import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import "../../utils/marker-icon"

import "leaflet/dist/leaflet.css"
import "./Map.css"

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[50.2, 18.99]} zoom={20}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                 />
                 <Marker position={[50.2, 18.99]}>
                    <Popup>
                        <p>IT focus</p>
                    </Popup>
                 </Marker>
            </MapContainer>
        </div>
    )
}