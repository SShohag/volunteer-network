import React, { useContext } from 'react';
import './Login.css'
import googleLogo from '../../logos/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location =  useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){

        firebase.initializeApp(firebaseConfig);
    }

    const handleRegistration = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
        
            const {displayName, email} = result.user;
            const signInUser = {name:displayName, email}
            setLoggedInUser(signInUser)
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }
    return (
        <div className="google-login">
            <button className="googleBtn" onClick={handleRegistration} > <img className="googleLogo" src={googleLogo} alt=""/> login With Google </button>
            <br/>
            <p>Don't have account <a href=""> create an account</a> </p>
        </div>
    );
};

export default Login;