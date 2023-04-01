export const getCoords = async (address: string): Promise<{
    lat: number,
    lng: number
}> => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    const data = await response.json()

    const { lat, lon: lng } = data[0]

    return {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
    }
}