import { MapContainer, TileLayer } from "react-leaflet"

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
            </MapContainer>
        </div>
    )
}