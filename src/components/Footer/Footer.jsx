import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer className="py-3">
         <div className="social-icons mt-lg-3 mt-2 text-center">
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
               <Link className="footer-link__home" to="/"><li style={{ marginLeft: '15px', fontSize: '25px' }}>Home</li></Link>
               {/* <li style={{marginLeft: '15px', fontSize: '25px'}}>About us</li> */}
               <Link className="footer-link__buy" to="/products"><li style={{ marginLeft: '15px', fontSize: '25px' }}>Our Yachts</li></Link>
               {/* <li style={{marginLeft: '15px', fontSize: '25px'}}>Contacts</li> */}
            </ul>
            <p style={{ marginLeft: '15px', fontSize: '20px' }}>Bokonbaevo st., Kyrgyzstan, Registered in Bishkek no: 16720700</p>
         </div>
         <div className="social-icons mt-lg-3 mt-2 text-center">
            <ul>
               <li><a href="https://www.instagram.com/yachtclubmonaco/" target="_blank"><InstagramIcon color="secondary" /></a></li>
               <li><a href="https://twitter.com/yachtclubmonaco" target="_blank"><TwitterIcon color="secondary" /></a></li>
            </ul>
         </div>
         <div className="copy-bottom-txt text-center py-3">
            <h3>Get the latest from Navi Blue</h3>
            <p>
               © 2021 .Navi Blue, All Rights Reserved | Design by Fan4
           </p>
            {/* <img src="http://qrcoder.ru/code/?https%3A%2F%2Fnavi-blue.web.app%2F&2&0" width="66" height="66" border="0" title="QR код" /> */}
         </div>
      </footer>
   )
}

export default Footer