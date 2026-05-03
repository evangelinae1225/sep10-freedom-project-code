import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
// Images: 
import logo from './assets/not-av.jpg';
import bio from './assets/logos/bio-tech.png';
import future from './assets/logos/future-tech.png';
import large from './assets/logos/large-tech.png';
import sim from './assets/logos/simslogo.png';
import freedom from './assets/logos/freedomlogo2.png';



// function App() {
//   return <img src={logo} alt="Logo" />;
// }

function HelloWorld() {
  return  <div className="container text-center"> 
    <div className="row m-md-2">
      <div className="col-8 col-sm-12 col-md-5 col-md-12">
      <a href="./index.html"> <img src={freedom} alt="Freedom Project Logo" width="250px" className = "mx-auto d-block"/> </a>
      </div>
    </div>

    <div className="row m-md-2">
      <div className=" col-8 col-sm-12 col-md-5 col-lg-3 ">
      <a href="./large-tech.html"> <img src={large} alt="Large Technology" width="250px" className = "mx-auto d-block"/> </a>
      </div>

      <div className=" col-8 col-sm-12  col-md-5 col-lg-3 ">
      <a href="./bio-tech.html"> <img src={bio} alt="Bio Technology" width="250px" className = "mx-auto d-block"/> </a>
      </div>

      <div className=" col-8  col-sm-12 col-md-5 col-lg-3 ">
      <a href="./sim-tech.html"> <img src={sim} alt="Simulation Technology" width="250px" className = "mx-auto d-block"/> </a>
      </div>

      <div className="col-8 col-sm-12 col-md-5 col-lg-3">
      <a href="./future-tech.html"> <img src={future} alt="Future Technology" width="250px" className = "mx-auto d-block"/> </a>
      </div>
      
    </div>
    </div>}
    

const root = createRoot(document.getElementById('root'));
root.render(<HelloWorld />);



export default App
