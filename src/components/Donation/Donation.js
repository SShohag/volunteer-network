import React from 'react';
import fakeData from '../../fakeData'

const Donation = () => {
    const handleAddVolunteer = () => {
        fetch('https://secure-sierra-97591.herokuapp.com/addVolunteer', {
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