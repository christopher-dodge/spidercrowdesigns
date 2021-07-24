import React from 'react'
import SliderImage from './sliderImage.js'
// import image1 from '../../images/spider-crow-pic-1.JPG';
// import image2 from '../../images/spider-crow-pic-2.JPG';
// import image3 from '../../images/spider-crow-pic-3.JPG';
// import image4 from '../../images/spider-crow-pic-4.JPG';
// import image5 from '../../images/spider-crow-pic-5.JPG';
// import image6 from '../../images/spider-crow-pic-6.JPG';
// import image7 from '../../images/spider-crow-pic-7.JPG';
// import image8 from '../../images/spider-crow-pic-8.JPG';
// import image9 from '../../images/spider-crow-pic-9.JPG';
// import image10 from '../../images/spider-crow-pic-10.JPG';
// import image11 from '../../images/spider-crow-pic-11.JPG';
// import image12 from '../../images/spider-crow-pic-12.JPG';
// import image13 from '../../images/spider-crow-pic-13.JPG';
// import image14 from '../../images/spider-crow-pic-14.JPG';
// import image15 from '../../images/spider-crow-pic-15.JPG';
// import image16 from '../../images/spider-crow-pic-16.JPG';
// import image17 from '../../images/spider-crow-pic-17.JPG';
// import image18 from '../../images/spider-crow-pic-18.JPG';

function SliderContent(props) {
    // const imagesMap = SliderImage.map((image, index) => '<img className="slider-image" src="' + image[index].source + '" alt="" />');
    // console.log(imagesMap);
    
    // console.log(SliderImage[0].source);
    // console.log(imageSource1);
    // console.log(SliderImage[0]);

    // const imageSource1 = SliderImage[0].source; 
    // const imageSource2 = SliderImage[1].source; 
    // const imageSource3 = SliderImage[2].source;

    // <img className="slide-image" src={imageSource1} alt="" />
    // <img className="slide-image" src={imageSource2} alt="" />
    // <img className="slide-image" src={imageSource3} alt="" />

    return (
      <div id="slider-container">
        {SliderImage.map((slide, index) => (<div 
          key={index}
          className={index === props.activeIndex ? 'slides active' : 'inactive'}>
            <img className="slide-image" src={slide.source} alt="" />
            <h3 className="slide-title">{slide.title}</h3>
            <p className="slide-description">{slide.description}</p>
          </div>
        ))}
      </div>
    )
}

export default SliderContent;