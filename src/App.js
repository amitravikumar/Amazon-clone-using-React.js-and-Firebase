import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //Use effect only runs once when the component is launched or run.
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is ---->>', authUser);

      if(authUser){
          //The user is logged in/User was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      }else{
          //The user is loggeg out
          dispatch({ 
            type: 'SET_USER',
            user: null
          })
      }
    });
  },[])

  return (
      <Router>
        {/*BEM Convention for CSS*/}
        <div className="app">
          <Header />
           <Switch>
            <Route path="/login">
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
