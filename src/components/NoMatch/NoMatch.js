import React from 'react';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className="no-match" >
            <h3> Sorry your page not found </h3>
            <h4 style={{color:'red'}}> Error 404!!! </h4>
        </div>
    );
};

export default NoMatch;