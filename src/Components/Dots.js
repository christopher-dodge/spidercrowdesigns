import React from 'react'
import SliderImage from './sliderImage'

function Dots(props) {
// console.log("From Dots: " + activeIndex)
// console.log("From Dots: " + onclick)
// console.log("From Dots: " + SliderImage)

  return (
    <div className="all-dots">
      {SliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${
            props.activeIndex === index ? "dot active-dot" : "dot"
          }`}
          onClick={(event) => props.onclick((event.target.value = index))}
        ></span>
      ))}
    </div>
  )
}

export default Dots;