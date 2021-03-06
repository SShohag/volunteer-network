import React, { useContext, useState } from "react";
import "./Event.css";
import logo from "../../logos/mainLogo1.png";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import RegisteredUsers from "../RegisteredUsers/RegisteredUsers";


const Event = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date());
  const { type } = useParams();
  const { register, handleSubmit, watch, errors } = useForm();

  const history = useHistory();

  const onSubmit = data => {
      console.log('from submitted', data);
      const registrationDetails = {details:data, registrationTime:new Date()};

      fetch('https://secure-sierra-97591.herokuapp.com/addRegistration', {
          method: 'POST',
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(registrationDetails)
      })
      .then( res => res.json())
      .then( data => {
          history.push('/reg');
          if(data){
              alert('You are successfully Registered')
          }
      })

    }

     

  return (
    <div className="register-container">
      <img src={logo} alt="" />
      <div className="registration-form">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                {errors.name && <span>name is required</span>}

                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />
                {errors.email && <span>Email is required</span>}

                <DatePicker selected={startDate} onChange={date =>setStartDate(date)}/> 

                <input name="description" ref={register({ required: true })} placeholder="Type Your Comment" />
                {errors.description && <span>Description is required</span>}

                <input name="type" defaultValue={type} ref={register({ required: true })} />
                {errors.type && <span>Type is required</span>}

                <input className="submitInput" type="submit" />
            </form>

      </div>
    </div>
  );
};

export default Event;
