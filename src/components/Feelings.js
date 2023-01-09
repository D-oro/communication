import './Feelings.css'
import { useEffect, useState } from 'react';

export const Feelings = ({data}) => {

    const [selectedFeelings, setSelectedFeelings] = useState([]);

    useEffect(() => {
        setSelectedFeelings([])
    }, [])


    const handleFeelingsClick = (event) => {
        let clickedFeeling = event.currentTarget.textContent
        const copySelectedFeelings = [...selectedFeelings]

        if(selectedFeelings.length > 0){
            copySelectedFeelings.push(", ")
        }
        copySelectedFeelings.push(clickedFeeling)
        setSelectedFeelings(copySelectedFeelings)
    }

    const resetFeelings = () => {
        setSelectedFeelings("")
    }

        return(
            <div>
                <table className="feelingsBox">
                    <tbody>
                        <tr className="feelingsRow">
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[0]}</td>
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[1]}</td>
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[2]}</td>
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[3]}</td>
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[4]}</td>
                        </tr>
                        <tr className="feelingsRow">
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[5]}</td>
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[6]}</td>
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[7]}</td>
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[8]}</td>
                            <td className="feelingsItem" onClick={handleFeelingsClick}>{data.feelings[9]}</td>
                        </tr>
                    </tbody>
                </table>
                <p>I'm feeling {selectedFeelings}</p><button onClick={resetFeelings}>reset</button>
            </div>
        )
};