import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';
import './slide.css'

function UncontrolledExample() {
  return (
    <div>
      <div className='phrase'>
      <img src='img/phrase.png'></img>
      </div>
    <div className='carousel-container'>
      <Carousel className='carousel' interval={3000} style={{ width: '1100px' }}>
        <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ objectFit: 'cover', borderRadius: '15px', transition: 'border-radius 0.5s' }}
              img src="http://tdinteriorsinc.com/wp-content/uploads/2013/03/landscape-7-800x400.jpg"
              alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ objectFit: 'cover', borderRadius: '15px', transition: 'border-radius 0.5s' }}
              src="http://tdinteriorsinc.com/wp-content/uploads/2013/03/landscape-7-800x400.jpg"
              alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ objectFit: 'cover', borderRadius: '15px', transition: 'border-radius 0.5s' }}
              src="http://tdinteriorsinc.com/wp-content/uploads/2013/03/landscape-7-800x400.jpg"
              alt="Third slide"
            />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}

export default UncontrolledExample;