import React, { useEffect, useState } from 'react';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect (() => {
        fetch('https://secure-sierra-97591.herokuapp.com/registeredUser')
        .then(res => res.json())
        .then( data => setVolunteers(data))
    },[] )
    return (
        <div>
            <h2> totla : {volunteers.length} </h2>
        </div>
    );
};

export default VolunteerList;