import { SyntheticEvent, useState } from "react"

import { getCoords } from "../../utils/geocode"
import { Button } from "../Button/Button"
import "./AdForm.css"

export const AdForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        description: "",
        price: 0,
        url: "",
        address: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [adId, setAdId] = useState(null)

    const updateFormState = (key: string, value: string | number) => setFormState(form => ({
        ...form,
        [key] : value
    }))

    const onAddAd = async (event: SyntheticEvent) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            const { lat, lng } = await getCoords(formState.address)  

            const response = await fetch(`http://localhost:3001/ad`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formState,
                    lat,
                    lng
                })
            })
            const data = await response.json()

            setAdId(data._id.toString())
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <p>Adding an ad ...</p>
    }

    if(adId) {
        return <p>Your ad has just been added! :-)</p>
    }

    return (
        <form className="ad-form" onSubmit={onAddAd}>
            <h2>Add your own ad</h2>
            <p>
                <label>Name</label>
                <input 
                    name="name" 
                    required maxLength={99}
                    value={formState.name}
                    onChange={e => updateFormState("name", e.target.value)}
                />
            </p>
            <p>
                <label>Description</label>
                <textarea 
                    name="description" 
                    maxLength={999}
                    value={formState.description}
                    onChange={e => updateFormState("description", e.target.value)}
                />
            </p>
            <p>
                <label>Price</label>
                <input 
                    name="price" 
                    type="number" 
                    min={0} 
                    max={99}
                    value={formState.price}
                    onChange={e => updateFormState("price", Number(e.target.value))}
                />
            </p>
            <p>
                <label>Url</label>
                <input 
                    name="url" 
                    type="url"
                    value={formState.url}
                    onChange={e => updateFormState("url", e.target.value)}
                />
            </p>
            <p>
                <label>Address</label>
                <input 
                    name="address" 
                    required
                    value={formState.address}
                    onChange={e => updateFormState("address", e.target.value)}
                />
            </p>
            <Button content="Add an ad"/>                        
        </form>
    )
}