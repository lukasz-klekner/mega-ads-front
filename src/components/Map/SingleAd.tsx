import { useEffect, useState } from "react";
import { AdItem } from "types";

interface SimpleAdProps {
    _id: string;
}

export const SimpleAd = ({ _id }: SimpleAdProps) =>{
    const [ad, setAd] = useState<AdItem | null>(null)

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/ad/${_id}`)
            const data = await response.json()

            setAd(data)
        })()
    }, [])

    if(ad === null){
        return <p>Wczytywanie ...</p>
    }

    return (
        <>
            <h2>{ad.name}</h2>
            <p>{ad.description}</p>
            {ad.price && <p>{ad.price} zł</p>}
            <hr/>
            <a href={ad.url} target="_blank" rel="noreferrer">Otwórz ogłoszenie</a>
        </>

    )
}