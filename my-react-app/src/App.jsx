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
