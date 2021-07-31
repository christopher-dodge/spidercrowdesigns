import React from 'react'
import SliderImage from './sliderImage.js'

function SliderContent(props) {
    return (
      <div id="slider-container">
        {SliderImage.map((slide, index) => (<div 
          key={index}
          className={index === props.activeIndex ? 'slides active' : 'inactive'}>
            <img className="slide-image" src={slide.source} alt={slide.alt} />
          </div>
        ))}
      </div>
    )
}

export default SliderContent;