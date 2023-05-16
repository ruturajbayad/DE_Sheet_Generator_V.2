import React from 'react'
import Video from '../../videos/video.mp4';
import './hero.css'; 
const Herosection = () => {
  return (
     <div className="main">
      <div className='HeroBg'></div>
        <video className="VideoBg" autoPlay loop muted src={Video} />
        <div className="content">
              <h1>DE Sheet Generator</h1>
              <p>
                This is a website that helps to create a DE subject Sheet online 
              </p>
        </div>
        
    </div>
  )
}

export default Herosection