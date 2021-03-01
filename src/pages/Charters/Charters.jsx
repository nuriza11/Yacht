import React from 'react'
import './Charters.css'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const Charters = () => {
    return (
        <div>
            <h1 className='title-charter'>CHARTERS</h1>
            <div className='charter'>
                <Roll left>
                    <div className='charter-img'>
                    </div>
                </Roll>
                <div className='charter-desc'>
                    <Fade right>
                        <h1>Croatia</h1>
                        <span>Croatia has long been a unique tourist pearl of the Adriatic coast for all lovers of sea travel. The reason for this was the mild climate, the rapid development of the country's tourism infrastructure and a very favorable location. Tourists choose Croatia also because here you can find entertainment for every taste and budget.</span>
                    </Fade>

                </div>
            </div>
            <div className='charter'>
                <div className='charter-desc'>
                <Fade left>
                    <h1>Greece</h1>
                    <span>Greece is one of the favorite countries for beach holidays and exciting sea trips. Charter tourists take these places with special awe.There are many small Greek islands along the Turkish coastline. People come here to enjoy the remains of a fascinating centuries-old history and incredible landscapes. The charter options in Greece are truly endless.</span>
                </Fade>

                </div>
                <Roll right>
                    <div className='charter-img1'>
                    </div>
                </Roll>
            </div>
            <div className='charter'>
                <Roll left>
                    <div className='charter-img2'>
                    </div>
                </Roll>
                <div className='charter-desc'>
                    <Fade right>
                        <h1>Martinique</h1>
                        <span>Renting a watercraft in Martinique is a dream for experienced yachtsmen and even beginners. Discovered by Christopher Columbus, the island has become an ideal starting point for an exciting cruise, even in the winter season. Enjoy the trade winds, the beauty of the turquoise waters, sunbathing. This direction creates all conditions for a comfortable and varied vacation.</span>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Charters