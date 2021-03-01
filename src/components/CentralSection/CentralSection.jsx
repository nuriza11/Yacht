import React from 'react';
import './CentralSection.css';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import Main1Img from '../../assets/Images/main1.jpg';
import MainImg from '../../assets/Images/main.jpg';
import MainImgThird from '../../assets/Images/main3.jpg'

const CentralSection = () => {
    return (
        <div className="central-section">
            <Parallax className="custom-class" y={[-22, 4]} tagOuter="figure">
                <div className='container body'>
                    <div className='body-img'>
                        <img src={Main1Img} />
                    </div>
                    <div className='desc'>
                        <h1>BUY A YACHT</h1>
                        <span>Take a look at the superyachts on our website or get in touch with your requirements. If you don’t see your perfect yacht, let us know: we’ll move mountains to find her.</span>
                        <Link to='/products'>
                            <p>BROWSE YACHTS FOR SALE</p>
                        </Link>
                    </div>
                </div>
                <div className='container body'>
                    <div className='central-item'>
                        <h1>CHARTER A YACHT</h1>
                        <span>We’ll help you plan the ultimate charter. Get some inspiration by looking through our charter yachts and tell us what your dream charter looks like. We’ll do the rest.</span>
                    </div>
                    <div className='body-img'>
                        <img src={MainImg} />
                    </div>
                </div>
                <div className='container body'>
                    <div className='body-img'>
                        <img src={MainImgThird} />
                    </div>
                    <div className='desc'>
                        <h1>L'Art de Vivre la Mer</h1>
                        <span>The Yacht Club de Monaco plays a dynamic leading role in the life of Monaco’s main port, according to its statutes and mission which are for the Club to serve as “a link between those who love the sea and the interests of tourism and promoting the Principality”.</span>
                    </div>
                </div>
                {/* <CarouselHome/> */}
            </Parallax>
        </div>
    )
}

export default CentralSection;