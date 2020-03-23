import React from 'react';

import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component{
    render() {
        return(
         <div>
             <Navbar />
             <div className="BadgeNew__hero"></div>
             <div className="container">
                 <div className="row">
                     <div className="col-6">
                         <Badge
                         firstName = "Lucía A."
                         lastName="Sánchez H."
                         twitter="Lu_San2"
                         jobTitle="Frontend Developer Jr."
                         avatarUrl="https://secure.gravatar.com/avatar/9fcf7ea3f01e02a5b2665fbbfa399e6a?s=100&r=g"
                         />
                     </div>
                     <div className="col-6">
                     <BadgeForm />
                     </div>
                 </div>
             </div>
         </div>
        );
    }
}

export default BadgeNew;
