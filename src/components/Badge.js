import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/Logo.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';

class Badge extends React.Component {
  render() {
    return (
    <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="cabecera de presentación" />
        </div>

        <div className="Badge__section-name">
          <img
          className="Badge__avatar"
          src={this.props.avatarUrl}
          alt="Lucía Sánchez Hernández SEO y Frontend" />
          <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
        </div>

        <div className="Badge__section-social" >
          <a href="https://twitter.com/Lu_San2">
            <img src={twitter} alt="Twitter de Lucía Sánchez" width="20" height="22"/></a>
          <a href="https://medium.com/@sanchezhla"><p> &nbsp; &nbsp; SEO Specialist &nbsp; &nbsp;</p></a>
          <a href="https://www.linkedin.com/in/luciasanchezh/">
          <img src={linkedin} alt="Linkedin de Lucía Sánchez" width="20" height="18"/></a>
        </div>



        <div className="Badge__footer">
          <p>#ReactLover</p>
        </div>
    </div>)
  }
}

export default Badge;
