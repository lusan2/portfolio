import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/Logo.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    render() {
        return(
         <div>
             <Navbar />
             <div className="BadgeNew__hero">
             </div>
             <div className="container">
                 <div className="row">
                     <div className="col">
                         <Badge firstName = "Lucía A." lastName="Sánchez H." twitter="Lu_San2" jobTitle="Frontend Developer Junior" avatarUrl="https://secure.gravatar.com/avatar/9fcf7ea3f01e02a5b2665fbbfa399e6a?s=100&r=g" />
                     </div>
                 </div>
             </div>
         </div>
        )
    }
}

export default BadgeNew;
