import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const[service, setService] = useState({})
    const {serviceId}= useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data =>setService(data))
    },[])
    return (
        <div>
            <h3>this is booking :{serviceId}</h3>
            <h2>{service.name}</h2>
        </div>
    );
};

export default Booking;