import React from 'react'
import hero from './assets/hero.webp'
import second from './assets/second.webp'
import './home.css'
const Home = () => {
  return (
    <div className='homeContainer'>
        <div className="image">
            <img src={hero} alt="hero" className="heroImage" width='800' />
        </div>

        <div className="greeting">
            <h1 className="welcome">"Welcome"</h1>
            <div className="button-Container">
                <div className="overlay"></div>
                <div className="submit">SUBMIT REQUEST NOW</div>
            </div>
        </div>

        <div className="second">
          <img src={second} alt="people" className="secondImage" width='230' />
          <h2 className="strengh">Strength And <br/> Stability With <br/> Liberty Bank</h2>
        </div>
    </div>
  )
}

export default Home