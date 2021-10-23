import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as Languages } from "../../assets/Languages.svg";

const Header = () => (
  <div className="top-bar">
    <div className="primary-bar" />
    <div className="light-bar">
      <div>
        <Logo />
      </div>
      <div className="light-bar">
        <strong className="strongtext margin-right">Donate to World Vision</strong>
        <button className="margin-right" type="button">Partner</button>
        <button className="margin-right" type="button">Log in</button>
        <Languages />
      </div>
    </div>
    <div className="dark-purple-bar">
      Global Issues | Poorest Countries | Top 10 Rated Projects | Disaster Areas | Local Map
    </div>
  </div>
);

export default Header;
