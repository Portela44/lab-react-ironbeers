import React from 'react'
import beerspng from "../assets/beers.png"
import newbeerpng from "../assets/new-beer.png"
import randombeerpng from "../assets/random-beer.png"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className='main-menu'>
      <div className="beer-link">
        <img className="menu-img" src={beerspng} alt="beers.png" />
        <Link to="/beers">Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia enim perspiciatis quas voluptas excepturi temporibus accusamus repudiandae illum, eius adipisci obcaecati dignissimos, aspernatur est quidem quibusdam asperiores rem quam inventore!</p>
      </div>
      <div className="beer-link">
        <img className="menu-img" src={randombeerpng} alt="random-beer.png" />
        <Link to="/random-beer">Random Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia enim perspiciatis quas voluptas excepturi temporibus accusamus repudiandae illum, eius adipisci obcaecati dignissimos, aspernatur est quidem quibusdam asperiores rem quam inventore!</p>
      </div>
      <div className="beer-link">
        <img className="menu-img" src={newbeerpng} alt="new-beer.png" />
        <Link to="/new-beer">New Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia enim perspiciatis quas voluptas excepturi temporibus accusamus repudiandae illum, eius adipisci obcaecati dignissimos, aspernatur est quidem quibusdam asperiores rem quam inventore!</p>
      </div>      
    </div>
  )
}
