import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

export default function Beers() {
    const [beers, setBeers] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
                console.log(response.data);
                setBeers(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    },[]);

    return (
        <div className="beerList">
            {beers && beers.map(beer => {
                return (
                    <div className="beer" key={beer._id}>
                        <div className="beerImg">
                            <Link to={`/:id`}>
                                <img src={beer.image_url} alt="{beer.name}"></img>
                            </Link>
                        </div>
                        <div className="beerInfo">
                            <h3>{beer.name}</h3>
                            <p>{beer.tagline}</p>
                            <h5>Created by: <span>{beer.name}</span></h5>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
