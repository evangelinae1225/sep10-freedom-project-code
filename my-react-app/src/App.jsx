import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './assets/not-av.jpg';


// function App() {
//   return <img src={logo} alt="Logo" />;
// }

function HelloWorld() {
  return  <div className="container text-center"> 
    <div className="row">
      <div className="col-6">
      <a href="./large-tech.html"> <img src={logo} alt="Company Logo" width="100px" /> </a>
      </div>
      <div className="col-6">
      <a href="./future-tech.html"> <img src={logo} alt="Company Logo" width="100px" /> </a>
      
    </div>
    </div>
    <div className="row text-center">
      <div className="col-8 text-center d-flex justify-content-center">
      <h1>Freedom Project</h1>
      </div>
    </div>
    <div className="row d-flex justify-content-center">
      <div className="col-3">
      <a href="./bio-tech.html"> <img src={logo} alt="Company Logo" width="100px" /> </a>
      </div>
      <div className="col-3">
      <a href="./sim-tech.html"> <img src={logo} alt="Company Logo" width="100px" /> </a>
      </div>
    </div>
    
   </div>;
}

const root = createRoot(document.getElementById('root'));
root.render(<HelloWorld />);



export default App
