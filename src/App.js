import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
      <Router>
        {/*BEM Convention for CSS*/}
        <div className="app">
           <Switch>
            <Route path="/Checkout">
               <Header />
                <h1> hey I am, the checkout page. Lets code this complete.</h1>
            </Route>
            <Route path="/">
              <Header />
               {/* Header*/}
               <Home />
               {/* Home */}
            </Route>
           </Switch>
        </div>
      </Router>  
  );
}

export default App;
