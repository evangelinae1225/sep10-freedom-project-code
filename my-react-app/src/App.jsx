import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


// import logo from './logo.png'; // Relative path from component

// function App() {
//   return <img src={logo} alt="Logo" />;
// }

function HelloWorld() {
  return <button type="button" class="btn btn-primary">Primary</button>;
}

const root = createRoot(document.getElementById('root'));
root.render(<HelloWorld />);

export default App
