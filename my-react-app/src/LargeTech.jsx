import React from 'react';
import { Link } from 'react-router-dom';
// Import images
import spacexImg from './assets/space-x.png';
import jamesWebImg from './assets/jame-web.jpg';

function LargeTech() {
  return (
    <div className="container-fluid bg-1 min-vh-100" id="home" style={{ color: '#ffffff' }}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">Freedom Project</Link>
      </nav>

      <h1 className="text-center">Large-Tech</h1>

      <div className="container text-center">
        <div className="row align-items-center">
          <h2> Space X </h2>
          <div className="col-12 col-md-6">
            <img src={spacexImg} alt="Space X" width="500px" className="img-fluid mx-auto d-block rounded" />
          </div>
          <div className="col-12 col-md-6 text-start">
            <p>
              <a href="https://www.spacex.com/vehicles/falcon-9" target="_blank" rel="noreferrer" style={{ color: '#0dcaf0' }}>Space X</a> 
              is a company that makes a lot of Technology for space exploration.
            </p>
            <p>The linked webpage shows the first orbital reusable rocket called the Falcon 9, which is very important in progression because it allows us to reduce costs of space exploration and progress further.</p>
            <p>This website also showed models of the rocket and what each part does.</p>
            <p>There are also rockets and inventions on this website, but Falcon 9 is the most notable.</p>
          </div>
        </div>

        <div className="row mt-5 align-items-center">
          <h2> James Webb Telescope </h2>
          <div className="col-12 col-md-6 text-start order-2 order-md-1">
            <p>The James Webb Telescope was an improvement over the Hubble Telescope because it orbits much faster than it.</p>
            <p>The James Webb Telescope helps us look back 13.5 billion years ago to see the earliest galaxies in the universe.</p>
            <p>The telescope also folds up to fit into a rocket, which allows it to be launched into space. This helps us learn more about how to send larger objects into space because we can't have anything too large or too heavy.</p>
            <p>It also has SPF protection of 1 million, so it can survive the sun's, Earth's, and moon's radiation.</p>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <img src={jamesWebImg} alt="James Webb Telescope" width="500px" className="img-fluid mx-auto d-block rounded" />
            
          </div>
          
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                      Back to Main Page
                    </Link>
                  </div>
      </div>
    </div>
  );
}

export default LargeTech;
