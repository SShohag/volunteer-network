import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className="no-match" >
            <h3> Sorry your page not found </h3>
            <h4 style={{color:'red'}}> Error 404!!! </h4>
            <p> go back to <Link to="/home">Home</Link> </p>
        </div>
    );
};

export default NoMatch;