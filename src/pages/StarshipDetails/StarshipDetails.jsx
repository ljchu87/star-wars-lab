import { useState, useEffect } from "react";
import { getDetails } from "../../services/api-calls";
import { Link, useLocation } from "react-router-dom";


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  
  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  return (
    <>
    <div class="detail-container">
      <h3>Starship Details</h3>
      {starshipDetails.name ?
        <>
        <div class="info-container">
          <h3>Name: {starshipDetails.name}</h3>
          <h3>Model: {starshipDetails.model}</h3>
          <Link to = '/'>Return</Link>
        </div>
      </>
      :
      <p>Loading details...</p>
    }
    </div>
  </>
);
}

export default StarshipDetails;
