import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './nav/app-routes';
import NavBarComponent from './nav/nav-bar.component';

function App() {
  let urlPaths=["/", "/home", "/5"];
  return (
    <div>
      <p>I'm outside the router. No routing for me.</p>
      <Router>
        <NavBarComponent urlPaths={urlPaths} />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
