import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Volunteer = (props) => {
  const { img, name, type } = props.client;

  const history = useHistory()
  const handleVolunteer = (type)=>{
    history.push(`/event/${type}`);
  }

  return (
    <div className="mb-3" style={{float:'left', margin:'5px'}}>
      <Card style={{ width: "18rem", marginTop:'30px' }}>
        <Card.Img variant="top" src={img} />
        <Button onClick={()=>handleVolunteer(type)} className="rounded" style={{width: "18rem", }} variant="primary">{name}</Button>
      </Card>
    </div>
  );
};

export default Volunteer;
