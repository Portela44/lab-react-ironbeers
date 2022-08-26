import React from 'react'
import { Link } from 'react-router-dom'
import homepng from "../assets/home.png"

export default function Header() {
  return (
    <div className="Header">
        <Link to="/">
            <img className="header-btn" src={homepng} alt="home.png" />
        </Link>
    </div>
  )
}
