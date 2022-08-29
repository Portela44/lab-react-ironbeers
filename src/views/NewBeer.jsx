import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';

export default function NewBeer() {
  const [beer, setBeer] = useState({
    name:"",
    tagline:"",
    description:"",
    first_brewed:"",
    brewer_tips:"",
    attenuation_level:0,
    contributed_by:""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBeer(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBeer = await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`,beer);
      navigate(`/${newBeer.data.data.id}`);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>Create a new beer: </h1>
      <form className="beerForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={beer.name} onChange={handleChange}/>
        <label>Tagline</label>
        <input type="text" name="tagline" value={beer.tagline} onChange={handleChange}/>
        <label>Description</label>
        <input className="descriptionInput"type="text" name="description" value={beer.description} onChange={handleChange}/>
        <label>First Brewed</label>
        <input type="text" name="first_brewed" value={beer.first_brewed} onChange={handleChange}/>
        <label>Brewer Tips</label>
        <input type="text" name="brewer_tips" value={beer.brewer_tips} onChange={handleChange}/>
        <label>Attenuation Level</label>
        <input type="number" name="attenuation_level" value={beer.attenuation_level} onChange={handleChange}/>
        <label>Contributed By</label>
        <input type="text" name="contributed_by" value={beer.contributed_by} onChange={handleChange}/>
        <button className="addNew-btn" type="submit">ADD NEW</button>
      </form>
    </div>
  )
}
