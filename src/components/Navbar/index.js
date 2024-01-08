import React from 'react'
import './navbar.css'
// import Hamburger from './Components/Hamburger';
// import { Link } from 'react-router-dom';
function Navbar() {

    // const [showNavbar, setShowNavbar] = React.useState(false);
  
    // const handleShowNavbar = () => {
    //   setShowNavbar(!showNavbar);
    // };
  
    return (
      <nav className="navbar-outer-container">
        <div className="navbar-inner-container">
          <div className="logo">
            <img src="../../../../logo.png" alt="" height={35}/>
          </div>
          {/* <div className="navbar-menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div> */}
          {/* <div className={`navbar-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <Link to="/dashboard">Home</Link>
              </li>
              <li>
                <Link to="/userProfile">Blogs</Link>
              </li>
              <li>
                <Link to="/userProfile">Projects</Link>
              </li>
              <li>
                <Link to="/userProfile">About</Link>
              </li>
              <li>
                <Link to="/userProfile">Contact</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
  )
}

export default Navbar