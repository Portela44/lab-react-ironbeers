import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

export default function SingleBeer() {
  const { id } = useParams();
  const [beer, setBeer] = useState({});
  // const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
        setBeer(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getData();
  },[id]);
  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
  //     navigate("https://ih-beers-api2.herokuapp.com/beers")
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  return (
    <div>
      {beer && (
        <div className="singleBeer">
          <img src={beer.image_url} alt={beer.name} />
          <div className="details1">
            <h1>{beer.name}</h1>
            <span>{beer.attenuation_level}</span>
          </div>
          <div className="details2">
            <h2>{beer.tagline}</h2>
            <span>{beer.first_brewed}</span>
          </div>
          <p>{beer.description}</p>
          <h5>{beer.contributed_by}</h5>
          {/* <button onClick={handleDelete}>Delete</button> */}
        </div>
      )}
    </div>
  )
}
