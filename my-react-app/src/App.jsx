import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './assets/not-av.jpg';


// function App() {
//   return <img src={logo} alt="Logo" />;
// }

function HelloWorld() {
  return  <div> 
    <a href="./large-tech.html"> <img src={logo} alt="Company Logo" width="100px" /> </a>
    <a href="./bio-tech.html"> <img src={logo} alt="Company Logo" width="100px" /> </a>
    <a href="./sim-tech.html"> <img src={logo} alt="Company Logo" width="100px" /> </a>
    <a href="./future-tech.html"> <img src={logo} alt="Company Logo" width="100px" /> </a>
   </div>;
}

const root = createRoot(document.getElementById('root'));
root.render(<HelloWorld />);



export default App
