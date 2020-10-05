import React, { useEffect, useState } from 'react';
// import fakeData from '../../fakeData'
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    // console.log(fakeData)
    const [volunteers, setVolunteer] = useState([]);

    useEffect(()=> {
        fetch('https://secure-sierra-97591.herokuapp.com/volunteers')
        .then( res => res.json())
        .then( data => setVolunteer(data))
    })

    return (
        <div className="volunteer">
            {
                volunteers.map(client => <Volunteer key={client.key} client={client}></Volunteer> )
            }
        </div>
    );
};

export default Home;