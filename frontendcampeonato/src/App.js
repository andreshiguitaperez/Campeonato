import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListaUsuariosComponente from "./component/user/ListaUsuariosComponente";
import CrearUsuarioComponente from "./component/user/CrearUsuarioComponente";
import EditarUsuarioComponente from "./component/user/EditarUsuarioComponente";



function App() {
  return (
      <div className="container">
        <Router>
          <div className="col-md-6">
            <Switch>
              <Route path="/" exact component={ListaUsuariosComponente} />
              <Route path="/usuario" component={ListaUsuariosComponente} />
              <Route path="/add-user" component={CrearUsuarioComponente} />
              <Route path="/edit-user" component={EditarUsuarioComponente} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}


export default App;
