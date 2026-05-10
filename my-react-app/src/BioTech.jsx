import React from 'react';
import { Link } from 'react-router-dom';
// Import the specific image for this page
import tissueChips from './assets/3d-tissue-chips.jpg'; 

function BioTech() {
  return (
    <div className="container-fluid bg-1 min-vh-100" id="home" style={{ color: '#ffffff' }}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">Freedom Project</Link>
      </nav>

      <h1 className="text-center">Bio-Tech</h1>

      <div className="container text-center">
        <div className="row align-items-center">
          <h2> Tissue chips </h2>
          <div className="col-12 col-md-6">
            <img 
              src={tissueChips} 
              alt="Tissue chips" 
              width="500px" 
              className="img-fluid mx-auto d-block rounded" 
            />
          </div>
          <div className="col-12 col-md-6 text-start">
            <p>Tissue chips mimic real human tissues and are used to test how space radiation would affect actual human cells.</p>
            <p>It's important to use Tissue Chips because we can study the effects of space travel on human cells, so that in the future, when we go to explore space, we know what to expect and are protected from such issues.</p>
            <p>Tissue Chips were originally made for biological research to test things such as the effect of drugs on the human body, without using actual people directly, but it was eventually led to being used by NASA to study the effects cells have in space.</p>
            <p>These are better than some other Chip models because they use real human cells to study, which makes it more authentic.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Back to Main Page
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default BioTech;
