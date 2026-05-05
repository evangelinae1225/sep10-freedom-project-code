import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

// Images
import bio from './assets/logos/bio-tech.png';
import future from './assets/logos/future-tech.png';
import large from './assets/logos/large-tech.png';
import sim from './assets/logos/simslogo.png';
import freedom from './assets/logos/freedomlogo2.png';

// Webpages 
import FutureTech from './FutureTech'; 
import BioTech from './BioTech'; 
import LargeTech from './LargeTech'; 
import SimTech from './SimTech'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/future-tech" element={<FutureTech />} />
        <Route path="/bio-tech" element={<BioTech />} />
        <Route path="/large-tech" element={<LargeTech />} />
        <Route path="/sim-tech" element={<SimTech />} />
        
      </Routes>
    </Router>
  );
}

// 1. The "Homepage" Content
function HelloWorld() {
  return (
    <div className="container text-center"> 
      <div className="row m-md-2">
        <div className="col-12">
          <Link to="/"> 
            <img src={freedom} alt="Freedom Project Logo" width="250px" className="mx-auto d-block"/> 
          </Link>
        </div>
      </div>

      <div className="row m-md-2">
        <div className="col-8 col-sm-12 col-md-5 col-lg-3">
          <Link to="/large-tech"> 
            <img src={large} alt="Large Technology" width="250px" className="mx-auto d-block"/> 
          </Link>
        </div>

        <div className="col-8 col-sm-12 col-md-5 col-lg-3">
          <Link to="/bio-tech"> 
            <img src={bio} alt="Bio Technology" width="250px" className="mx-auto d-block"/> 
          </Link>
        </div>

        <div className="col-8 col-sm-12 col-md-5 col-lg-3">
          <Link to="/sim-tech"> 
            <img src={sim} alt="Simulation Technology" width="250px" className="mx-auto d-block"/> 
          </Link>
        </div>

        <div className="col-8 col-sm-12 col-md-5 col-lg-3">
          <Link to="/future-tech"> 
            <img src={future} alt="Future Technology" width="250px" className="mx-auto d-block"/> 
          </Link>
        </div>
      </div>
      
      <h1 className="mt-4"> Overview </h1>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row justify-content-center">
          <div className="card col-12 col-md-3 m-2" style={{ width: "18rem", backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}>
            <div className="card-body">
              <p className="card-text">Humans have always wanted to travel and see the stars, but after humans sent the first Satellite named "Sputnik", space seemed closer to our reach.</p>
            </div>
          </div>

          <div className="card col-12 col-md-3 m-2" style={{ width: "18rem", backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}>
            <div className="card-body">
              <p className="card-text">Space Exploration has developed exponentially over the years, not only have humans visited the moon, but we are also trying to visit other space objects, such as Mars. We as well developed high tech telescopes to look at the universe around us.</p>
            </div>
          </div>

          <div className="card col-12 col-md-3 m-2" style={{ width: "18rem", backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}>
            <div className="card-body">
              <p className="card-text">Space Exploration is always learning something new about the stars around us, and new technologies are being invented to reach our goals and satisfy our curiosity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

// // 2. The Main App with Routing
// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Main Home Route */}
//         <Route path="/" element={<HelloWorld />} />
        
//         {/* Placeholder Routes for your other pages */}
//         <Route path="/large-tech" element={<div className="text-center"><h1>Large Tech Page</h1></div>} />
//         <Route path="/bio-tech" element={<div className="text-center"><h1>Bio Tech Page</h1></div>} />
//         <Route path="/sim-tech" element={<div className="text-center"><h1>Simulation Tech Page</h1></div>} />
//         <Route path="/future-tech" element={<div className="text-center"><h1>Future Tech Page</h1></div>} />
//       </Routes>
//     </Router>
//   );
// }

// 3. Render the App
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
