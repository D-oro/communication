import './Needs.css'
import { useEffect, useState } from 'react';

export const NeedItem = ({needs}) => {

    const [selectedNeeds, setSelectedNeeds] = useState([]);

    useEffect(() => {
        setSelectedNeeds([])
    }, [])

    const handleNeedsClick = (event) => {
        let clickedNeed = event.currentTarget.textContent
        const copySelectedNeeds = [...selectedNeeds]

        if(selectedNeeds.length > 0){
            copySelectedNeeds.push(", ")
        }
        copySelectedNeeds.push(clickedNeed)
        setSelectedNeeds(copySelectedNeeds)
    }

    const resetNeeds = () => {
        setSelectedNeeds("")
    }

    const needItems = needs.map((need, index) => {
        return(
            <div className="needsRow">
                <span key={index} className="needsItem" onClick={handleNeedsClick}>{need}</span>
            </div>
        )
    })

        return(
            <div>
                <h1>Needs</h1>
                {needItems}
                <h2>I have a need for {selectedNeeds}</h2>
                <button onClick={resetNeeds}>reset</button>
            </div>
        )
};