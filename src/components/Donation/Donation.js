import React from 'react';
import fakeData from '../../fakeData'

const Donation = () => {
    const handleAddVolunteer = () => {
        fetch('http://localhost:8080/addVolunteer', {
            method: 'POST',
            headers:{ 
                'Content-type':'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <button onClick={handleAddVolunteer}>Add Volunteer </button>
        </div>
    );
};

export default Donation;