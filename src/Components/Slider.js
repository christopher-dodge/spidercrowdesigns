import React, {useEffect, useState} from 'react';
import SliderImage from './sliderImage';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';
import './Slider.css'

const length = SliderImage.length - 1;
// console.log(length);
// console.log(SliderImage);


function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log("This is the activeIndex: " + activeIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <Arrows 
        previousSlide={() => 
          setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
        }
        nextSlide={() => 
          setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
        }
      />
      <Dots 
        activeIndex={activeIndex} 
        onclick={(activeIndex) => setActiveIndex(activeIndex)} 
      />
    </div>
  )
}

export default Slider;