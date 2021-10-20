import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import { SiDiscord } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import mistlogo from './Mistlogo.png';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
             <div style={{ borderTop: "1px solid #fff ", marginLeft: 60, marginTop: 85, marginRight: 0, marginBottom: 20 }}></div>

           <div className='socialmedia'>
           <li className='icons'> Discord < SiDiscord className='discordlogo' /> </li> 
           <li className='icons'> Instagram < AiOutlineInstagram className='instagramlogo' /></li>
           <li className='icons'> Twitter < FiTwitter className='twitterlogo' /></li>
           <li className='icons'> LinkedIn < FiLinkedin className='linkedinlogo' /></li>
           <li className='icons'> Facebook < FiFacebook className='facebooklogo' /></li>
          </div>
          <p className='last'> Made With ❤️ from <img src={mistlogo} alt='mistlogo' className='mistlogo' /></p>
          </ul>
          
        </nav>
    </>
  );
}

export default Navbar;