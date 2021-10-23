import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header/Header';
import LandingBackground from "../../assets/LandingBackground.jpg";
import './Landing.scss'

interface ILandingProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6080
const Landing: FunctionComponent<ILandingProps> = (props: ILandingProps) => (
  <main className="Landing">
    <Header />
    <div className="landing-background" style={{
      background: `url(${LandingBackground})`,
      height: 1039,
    }}>
      <h1 className="landing-heading">
        Hand-in-Hand <sup className="supertext">TM</sup><br />
        Partner with us to solve <br />
        problems around the world.
      </h1>
    </div>
  </main>
);

export default Landing;