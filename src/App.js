import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import User from './Pages/Usuario/User';
import routesConfig from './routesConfig';

function App() {
  return (
    <div>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/Usuarios">Usuario</Link>
      </div>
      {routesConfig.map((value, key) => {
        return <Route key={key} 
                path={value.path} 
                component={value.component} 
                exact={value.exact}>
               </Route>
      })}
    </div>
  );

}

export default App;
