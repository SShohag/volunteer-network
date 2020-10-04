import React, { createContext, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Event from './components/Event/Event';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';
import Donation from './components/Donation/Donation';
import RegInformation from './components/RegInformation/RegInformation';
import VolunteerList from './components/VoluteerList/VolunteerList';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      
      <Switch>
        <Route path='/home'>
          <Header></Header>
          <Home></Home>
        </Route>
        <PrivateRoute path='/event/:type'>
        <Event></Event>
        </PrivateRoute>
        <Route path='/login'>
        <Header></Header>
          <Login></Login>
        </Route>
        <PrivateRoute path='/donation'>
          <Donation></Donation>
        </PrivateRoute>
        <Route path='/reg' >
            <Header></Header>
          <RegInformation></RegInformation>
        </Route>
        <Route path='/volunteerList'>
          <VolunteerList></VolunteerList>
        </Route>
        <Route exact path='/'>
        <Header></Header>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
