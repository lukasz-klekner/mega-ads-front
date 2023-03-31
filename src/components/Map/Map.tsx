import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { SimpleAdItem } from "types"

import "../../utils/marker-icon"

import "leaflet/dist/leaflet.css"
import "./Map.css"
import { useEffect, useState } from "react"
import { useSearchContext } from "../../context/searchContext"

export const Map = () => {
    const [ads, setAds] = useState<SimpleAdItem[]>([])
    const searchContext = useSearchContext()

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3001/ad/search')
            const data = await response.json()

            setAds(data)
        })()
    }, [searchContext?.search])

    return (
        <div className="map">
            <MapContainer center={[50.2, 18.99]} zoom={20}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                 />
                 {
                    ads.map(({ _id, lat, lng}) => (
                        <Marker key={_id.toString()} position={[lat, lng]}>
                            <Popup>
                                <p>{_id.toString()}</p>
                            </Popup>
                        </Marker>
                    ))
                 }
            </MapContainer>
        </div>
    )
}