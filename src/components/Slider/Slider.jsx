import React from 'react';
import {Link} from 'react-router-dom';
import './Slider.css'

const slides = [
    "/images/banner-img-1.jpg",
    "/images/banner-img-2.jpg",
    "/images/banner-img-3.jpg",
    "/images/banner-img-4.jpg",
]

function Slider() {
    return (
      <div className='slider-container'>
          <img src={slides[2]} alt='banner'/>
          <Link to='/store'><button className='slider-btn'>Explore Now</button></Link>
      </div>
   )
}

export default Slider;