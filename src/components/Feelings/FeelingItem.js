import { useEffect, useState } from 'react';
import './Feelings.css'

export const FeelingItem = ({feelings}) => {

    const [selectedFeelings, setSelectedFeelings] = useState([]);

    useEffect(() => {
        setSelectedFeelings([])
    }, [])

    const handleFeelingsClick = ((event) => {
        let clickedFeeling = event.currentTarget.textContent
        const copySelectedFeelings = [...selectedFeelings]

        if(selectedFeelings.length > 0){
            copySelectedFeelings.push(", ")
        }
        copySelectedFeelings.push(clickedFeeling)
        setSelectedFeelings(copySelectedFeelings)
    })

    const resetFeelings = (() => {
        setSelectedFeelings([])
    })

    const feelingItems = feelings.map((feeling, index) => {
        return(
            <div className="feelingsRow">
                <span key={index} className="feelingsItem" onClick={handleFeelingsClick}>{feeling}</span>
            </div> 
        )
    })

        return(
            <div>
                <h1>Feelings</h1>
                {feelingItems}
                <h2>I'm feeling {selectedFeelings}</h2>
                <button onClick={resetFeelings}>reset</button>
            </div>
        )
};