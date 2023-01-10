import { useEffect, useState } from 'react';
import { FeelingItem } from "./FeelingItem";
import './Feelings.css'

export const Feelings = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, [])
  
    const fetchData = function(){
      const request = fetch("https://d-oro.github.io/NVC/feelings.json")
      .then(response => response.json())
      .then(data => setData(data));
    }

    return(
        <div className="feelingsBox">
            <div className="feelingsRow">
              <FeelingItem feelings={data} />
            </div>
        </div>
    )
};