import { useEffect, useState } from 'react';
import { NeedItem } from "./NeedItem";
import './Needs.css'

export const Needs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, [])
  
    const fetchData = function(){
      const request = fetch("https://d-oro.github.io/NVC/needs.json")
      .then(response => response.json())
      .then(data => setData(data));
    }

    return(
        <div className="needsBox">
          <div className="needsRow">
            <NeedItem needs={data} />
          </div>
        </div>
    )
}
