import React, { useContext, useState } from 'react';
import './Event.css'
import logo from '../../logos/mainLogo1.png'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Event = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [startDate, setStartDate] = useState(new Date())
    const {type} = useParams();
    return (
        <div className="register-container">
            <img src={logo} alt=""/>
            <div className="registration-form">
                <form action="">
                    <input type="text" Value={loggedInUser.name} placeholder="Full Name"/>
                    <br/>
                    <input type="text" value={loggedInUser.email} placeholder="Username or email"/>
                    <br/>
                    <DatePicker selected={startDate} onChange={date =>setStartDate(date)}/>
                    <br/>
                    <input type="text" placeholder="Description"/>
                    <br/>
                    <input type="text" value={type} />
                    <br/>
                    <br/>
                    <Link><button className="btn btn-primary w-100" type="submit">Registration</button></Link>
                    
                </form>
                
            </div>
        </div>
    );
};

export default Event;