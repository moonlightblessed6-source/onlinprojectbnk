import React from "react";
import {Footers} from './Footer'
import logo from '../../assets/Logo/logo.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";








const Footer = () => {

    return(
    <Footers>
     <div className="main-foort">
        <div >
           <div className="mainlogo" onClick={() => window.location.href = '/'}>
            <img src={logo} alt="logo" />
           </div>
            <p className="testban">Building financial strength together with personalized banking solutions for every member. Your trusted partner in financial growth.</p>
          <div className="socialmidai">
            <span><FaFacebookF/></span>
            <span><BsTwitterX/></span>
            <span><FaLinkedin/></span>
            <span><FaInstagram/></span>
          </div>
        </div>


        <div>
            <ul>
                <li>Quick Links</li>
                <li onClick={() => window.location.href = '/about-us'}>About us</li>
                <li onClick={() => window.location.href = '/our-service'}>Service</li>
                <li>Grants and Aids</li>
                <li onClick={() => window.location.href = '/contact-us'}>Contact</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Service</li>
                <li>Personal Banking</li>
                <li>Business Banking</li>
                <li>Loans & Credit</li>
                <li>Cards</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Member Service</li>
                <li onClick={() => window.location.href = '/login'}>Online Banking</li>
                <li>Mobile App</li>
                <li>ATM Locations</li>
                <li>Security Center</li>
            </ul>
        </div>
     </div>

    </Footers>
    )
}



export default Footer