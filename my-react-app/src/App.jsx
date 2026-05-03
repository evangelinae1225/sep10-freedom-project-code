import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './assets/not-av.jpg';
import bio from './assets/logos/bio-tech.png';
import future from './assets/logos/future-tech.png';
import large from './assets/logos/large-tech.png';
import sim from './assets/logos/simslogo.png';
import freedom from './assets/logos/freedom-project.png';


// function App() {
//   return <img src={logo} alt="Logo" />;
// }

function HelloWorld() {
  return  <div className="container text-center"> 
    <div className="row m-md-2">
      <div className="col-6">
      <a href="./large-tech.html"> <img src={large} alt="Large Technology" width="350px" /> </a>
      </div>
      <div className="col-6">
      <a href="./future-tech.html"> <img src={future} alt="Future Technology" width="350px" /> </a>
      
    </div>
    </div>
    <div className="row text-center m-md-2">
      <div className="col-8">
      <img src={freedom} alt="Company Logo" width="400px" />
      </div>
    </div>
    <div className="row d-flex justify-content-center m-md-2">
      <div className="col-3">
      <a href="./bio-tech.html"> <img src={bio} alt="Bio Technology" width="400px" /> </a>
      </div>
      <div className="col-3">
      <a href="./sim-tech.html"> <img src={sim} alt="Simulation Technology" width="400px" /> </a>
      </div>
    </div>
    
   </div>;
}

const root = createRoot(document.getElementById('root'));
root.render(<HelloWorld />);



export default App
