import React, { createContext, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Event from './components/Event/Event';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/event/:type'>
        <Event></Event>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        {/* <Route path='*'>
          <NoMatch></NoMatch>
        </Route> */}
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
