import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/Logo.svg';

class Badge extends React.Component {
  render() {
    return (
    <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="cabecera de presentación" />
          <img src={confLogo} alt="flowers" justify-content left />
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
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">
          <p>#ReactLover</p>
        </div>
    </div>)
  }
}

export default Badge;
