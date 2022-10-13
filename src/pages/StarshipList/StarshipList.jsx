import { useEffect, useState } from "react";
import { getStarshipsList } from "../../services/api-calls";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(()=> {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipsList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <h3>Starship List</h3>
      {starshipList.length ? 
      <>
        {starshipList.map(starship => 
          <div key = {starship.name}>
            <Link to = '/starship' state={{starship}}>{starship.name}</Link>
            <br/>
          </div>
        )}
      </> 
      : 
      <>
        <h4>Loading starships...</h4>
      </>}
    </>
  )
}

export default StarshipList