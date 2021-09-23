import React from 'react'
import "react-slideshow-image/dist/styles.css"
import { Slide } from 'react-slideshow-image';
import Seperator from '../../common/seperator/Seperator'
import './slider.css'
const Slider = () => {
    const slideImages = [
        'images/certificate1.png',
        'images/certificate2.png',
    ];
    return (
        <div className="slider">
            <Seperator />
            <Slide easing="ease">
                <div className="each-slide">
                {/* <img src= {{'backgroundImage': `url(${slideImages[0]})`}} alt="slider" /> */}
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    {/* <img src= {{'backgroundImage': `url(${slideImages[1]})`}} alt="slider" /> */}
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slider
