import './Needs.css'
import { useEffect, useState } from 'react';

export const Needs = ({data}) => {

    const [selectedNeeds, setSelectedNeeds] = useState([]);

    useEffect(() => {
        setSelectedNeeds([])
    }, [])


    const handleNeedsClick = (event) => {
        let clickedFeeling = event.currentTarget.textContent
        const copySelectedNeeds = [...selectedNeeds]

        if(selectedNeeds.length > 0){
            copySelectedNeeds.push(", ")
        }
        copySelectedNeeds.push(clickedFeeling)
        setSelectedNeeds(copySelectedNeeds)
    }

    const resetNeeds = () => {
        setSelectedNeeds("")
    }


        return(
            <div>
                <table className="needsBox">
                    <tbody>
                        <tr className="needsRow">
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[0]}</td>
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[1]}</td>
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[2]}</td>
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[3]}</td>
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[4]}</td>
                        </tr>
                        <tr className="needsRow">
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[5]}</td>
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[6]}</td>
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[7]}</td>
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[8]}</td>
                            <td className="needsItem" onClick={handleNeedsClick}>{data.needs[9]}</td>
                        </tr>
                    </tbody>
                </table>
                <p>I have a need for {selectedNeeds}</p><button onClick={resetNeeds}>reset</button>
            </div>
        )
};