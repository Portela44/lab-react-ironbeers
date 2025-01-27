import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function RandomBeer() {
  const [beer, setBeer] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
        setBeer(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getData();
  },[]);
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
        </div>
      )}
    </div>
  )
}
