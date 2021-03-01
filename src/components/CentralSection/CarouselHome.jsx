import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../assets/Images/carousel1.jpg';
import carousel2 from '../../assets/Images/carousel2.jpg';
import carousel3 from '../../assets/Images/carousel3.jpg'

const CarouselHome = () => {
    return (
        <Carousel style={{marginTop: '40px'}}>
            <Carousel.Item interval={5000} style={{transition: '3s', height: '500px', objectFit:'contain'}}>
                <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>UNITED SPIRIT</h2>
                    <p>UNITED SPIRIT is the epitome of high-velocity vintage yachts. Delivered by Swedish Gotaverken shipyard in 1939 </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500} style={{transition: '3s', height: '500px',objectFit:'contain' }}>
                <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                <h2>UNITED SPIRIT</h2>
                    <p>UNITED SPIRIT is the epitome of high-velocity vintage yachts. Delivered by Swedish Gotaverken shipyard in 1939 </p>  
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{transition: '3s', height: '500px',objectFit:'contain' }}>
                <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome