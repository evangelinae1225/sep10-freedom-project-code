import React from 'react';
import { Link } from 'react-router-dom';
// Import images
import spaceEngineImg from './assets/space-engine.jpg';
import nasaEyesImg from './assets/nasa-eyes.webp';

function SimTech() {
  return (
    <div className="container-fluid bg-1 min-vh-100" id="home" style={{ color: '#ffffff' }}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">Freedom Project</Link>
      </nav>

      <h1 className="text-center">Sim-Tech</h1>

      <div className="container text-center">
        <div className="row align-items-center">
          <h2> Space Engine </h2>
          <div className="col-12 col-md-6">
            <img src={spaceEngineImg} alt="Space Engine" width="500px" className="img-fluid mx-auto d-block rounded" />
          </div>
          <div className="col-12 col-md-6 text-start">
            <p> 
              <a href="https://spaceengine.org/" target="_blank" rel="noreferrer" style={{ color: '#0dcaf0' }}>Space Engine </a> 
              is a virtual simulation where you can explore space, land on any planet, and even alter the speed of time.
            </p>
            <p> This app is perfect for anyone wanting to explore space and answer questions they may have, such as what would happen if Earth were as big as Jupiter?</p>
            <p> This helps with a greater understanding of how celestial bodies function and how they would react in different situations, with a visual representation. </p>
            <p> This app is also free which makes it more accessible to a wider audience. </p>
          </div>
        </div>

        <div className="row mt-5 align-items-center">
          <h2> NASA's Eyes </h2>
          <div className="col-12 col-md-6 text-start order-2 order-md-1">
            <p> On this <a href="https://science.nasa.gov/eyes/" target="_blank" rel="noreferrer" style={{ color: '#0dcaf0' }}>Section</a> of NASA's website, you can look at many 3D models of things, such as a recreation of a rover landing or tracking asteroids. </p>
            <p> It's easy to use, especially since the instructions are seen in the Simulation, so you can know how to explore around the simulation. </p>
            <p> You can learn more about how rovers land on different atmospheres or explore different planets. On this website, it also shows signals we get from space to earth in real time. </p>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <img src={nasaEyesImg} alt="NASA's Eyes" width="400px" className="img-fluid mx-auto d-block rounded" />
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

export default SimTech;
