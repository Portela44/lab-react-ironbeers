import React from 'react'
import beerspng from "../assets/beers.png"
import newbeerpng from "../assets/new-beer.png"
import randombeerpng from "../assets/random-beer.png"

export default function Home() {
  return (
    <div className='main-menu'>
      <div className="beer-link">
        <img className="menu-img" src={beerspng} alt="beers.png" />
        <a href="/beers">Beers</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia enim perspiciatis quas voluptas excepturi temporibus accusamus repudiandae illum, eius adipisci obcaecati dignissimos, aspernatur est quidem quibusdam asperiores rem quam inventore!</p>
      </div>
      <div className="beer-link">
        <img className="menu-img" src={randombeerpng} alt="random-beer.png" />
        <a href="/beers">Random Beer</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia enim perspiciatis quas voluptas excepturi temporibus accusamus repudiandae illum, eius adipisci obcaecati dignissimos, aspernatur est quidem quibusdam asperiores rem quam inventore!</p>
      </div>
      <div className="beer-link">
        <img className="menu-img" src={newbeerpng} alt="new-beer.png" />
        <a href="/beers">New Beer</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia enim perspiciatis quas voluptas excepturi temporibus accusamus repudiandae illum, eius adipisci obcaecati dignissimos, aspernatur est quidem quibusdam asperiores rem quam inventore!</p>
      </div>      
    </div>
  )
}
