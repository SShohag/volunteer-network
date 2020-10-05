import React, { useEffect, useState } from 'react';
import "./VolunteerList.css"
import volunteerLogo from "../../logos/mainLogo.png"
import deleteBtn from '../../logos/delete.png'

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect (() => {
        fetch('https://secure-sierra-97591.herokuapp.com/registeredInfo')
        .then(res => res.json())
        .then( data => setVolunteers(data))
    },[] )
    console.log(volunteers)
    return (
        <div className="volunteerList">
            <img src={volunteerLogo} alt=""/>
            <h3 style={{textAlign: 'center'}} > Volunteer Register List </h3>
            <br/>
            {
                volunteers.map(userList => 
                <div className="userList"> 
                    <li>{userList.details.name} {userList.details.email} {userList.registrationTime} {userList.registrationTime} {userList.details.type}</li>
                    <button><img src={deleteBtn} alt=""/></button>
                </div> )
            }
        </div>
    );
};

export default VolunteerList;