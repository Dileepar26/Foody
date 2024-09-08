import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from "../assets/bannerImage.jpg"
import "../styles/Home.css"
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="headerContainer">
        <h1>Foody</h1>
        <p>food for everyone</p>
        <Link to="/Menu"><button>ORDER NOW</button></Link>
      </div>
    </div>
  )
}

export default Home