import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    console.log(fakeData)
    const [volunteers, setVolunteer] = useState(fakeData)
    return (
        <div className="volunteer">
            {
                volunteers.map(client => <Volunteer key={client.key} client={client}></Volunteer> )
            }
        </div>
    );
};

export default Home;