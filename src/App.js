import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';


function App() {
  return (
      <Router>
        {/*BEM Convention for CSS*/}
        <div className="app">
          <Header />
           <Switch>
            <Route path="/login">
              <h1>This is the login page and I am a software dev</h1>
              <Login />
            </Route>
            <Route path="/Checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
           </Switch>
        </div>
      </Router>  
  );
}

export default App;
