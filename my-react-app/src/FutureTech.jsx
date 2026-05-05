import React from 'react';
import { Link } from 'react-router-dom';
import robot from './assets/logos/robot.png'; // Import images directly
import spaceship from './assets/logos/spaceship.png';

function FutureTech() {
  return (
    <div className="container-fluid bg-1 min-vh-100" id="home" style={{ color: '#ffffff' }}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">Freedom Project</Link>
      </nav>

      <h1 className="text-center">Future-Tech</h1>

      <div className="container text-center">
        <div className="row">
          <h2> Robot Rovers </h2>
          <div className="col-12 col-md-6">
            <img src={robot} alt="Robot" width="500px" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <p>There are already things such as rovers on mars... but what if those robots got an upgrade and can be used with VR headsets or a fullbody suit even</p>
            <p>Looks like a Mech</p>
            <p>Could help with Mars missions because we would be able to walk around mars without actually being there</p>
          </div>
        </div>

        <div className="row mt-5">
          <h2> 3D-Printed Rockets </h2>
          <div className="col-12 col-md-6">
            <p>Sending rockets to space is expensive, so using 3D printed parts will make it much cheaper... solar panels would allow for the space ship to not use fuel costs.</p>
            <p>The 3d prints will probably be much more accurate and faster</p>
          </div>
          <div className="col-12 col-md-6">
            <img src={spaceship} alt="Spaceship" width="500px" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureTech;
