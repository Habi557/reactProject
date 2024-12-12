import {React, useState} from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Input

} from 'reactstrap';
import { ImHome3 } from "react-icons/im";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { header } from '../css/header.css'





function Header(args) {
  
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
     
      <div className="Navbar" >
        {/* <div>
          <FaLinkedin className='linkedIcon' />
          <div>
            <input />
          </div>
        </div> */}
        <div>
        <Nav>
          <NavItem className={activeLink === 'home' ? 'active' : ''}> 
            <div className="Icon">
              <Link id="RouterNavLink" style={null} to="/home" onClick={()=> handleClick('home')}>
                <ImHome3 />
                <div className="Iconname">Home</div>
              </Link>
            </div>

          </NavItem>
          <NavItem className={activeLink === 'network' ? 'active' : ''}>
            <div className="Icon">
              <Link id="RouterNavLink" style={null} to="/post" onClick={()=> handleClick('network')}>
                <MdPeopleAlt />
                <div className="Iconname">My Network</div>
              </Link>
            </div>
          </NavItem>
          <NavItem className={activeLink === 'jobs' ? 'active' : ''}>
            <div className="Icon">
              <Link id="RouterNavLink" style={null} to="/post"onClick={()=> handleClick('jobs')} >
                <MdOutlineWork />
                <div className="Iconname">Jobs</div>
              </Link>
            </div>
          </NavItem>
          <NavItem className={activeLink === 'messagings' ? 'active' : ''}>
            <div className="Icon">
              <Link id="RouterNavLink" style={null} to="/post" onClick={()=> handleClick('messagings')}>
                <BiSolidMessageRoundedDots />
                <div className="Iconname">Messagings</div>
              </Link>
            </div>
          </NavItem>
          <NavItem className={activeLink === 'notification' ? 'active' : ''}>
            <div className="Icon">
              <Link id="RouterNavLink" style={null} to="/post" onClick={()=> handleClick('notification')}>
                <IoMdNotifications />
                <div className="Iconname">Notification</div>
              </Link>
            </div>
          </NavItem>

        </Nav>
        </div>
      </div>
    </>
  );
}

export default Header;