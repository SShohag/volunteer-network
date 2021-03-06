import React, { useContext, useEffect, useState } from 'react';
import './RegisteredUsers.css'
import { UserContext } from '../../App';
import logo from '../../logos/extraVolunteer.png'
import { Button } from 'react-bootstrap';

const RegisteredUsers = () => {
    const [regUsers, setRegUser] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://secure-sierra-97591.herokuapp.com/registeredUser?email='+loggedInUser.email)
        .then( res => res.json())
        .then( data => setRegUser(data))
    },[])

    const handleCancel = (id) => {
        // console.log(id)
        fetch(`https://secure-sierra-97591.herokuapp.com/cancel/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then( result => {
            console.log('Cancel successfully')
        })
        // console.log('someone Click', id)
    }

    return (
        <div>
            {
                regUsers.map(user=> 
                    
                <div className="regUser">
                    <div>
                        <img className="regUser-img" src={logo} alt=""/>
                    </div>  
                    <div className="userDetails">
                        <h4>{user.details.type}</h4>
                        <h6>{(new Date(user.registrationTime).toDateString("dd/MM/yyyy"))}</h6>
                        <Button onClick={ ()=> handleCancel(user._id)} className="cancel" variant="secondary">Cancel</Button>
                    </div>
                </div>)
            }
             {/* <li> Name: {user.details.name} Email :{user.details.email} Volunteer List : {user.details.type} Registration Date: {(new Date(user.registrationTime).toDateString("dd/MM/yyyy"))} </li> */}
        </div>
    );
};

export default RegisteredUsers;