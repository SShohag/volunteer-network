import React, { useEffect, useState } from 'react';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect (() => {
        fetch('http://localhost:8080/registeredUser')
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