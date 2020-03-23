import React from 'react';

import './styles/Navbar.css';
import logo from '../images/Logo.svg';

class Navbar extends React.Component{
    render() {
        return(
         <div className="Navbar">
            <div className="conteiner-fluid">
                 <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo" width="160" height="54" />
                    <span className="font-weight-light"> We can make </span>
                   <span className="font-weight-bold"> Something nice!</span>
              </a>
             </div>
            </div>
        );
    }
}

export default Navbar;
