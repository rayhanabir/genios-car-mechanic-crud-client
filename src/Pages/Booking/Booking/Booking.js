import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId}= useParams();
    return (
        <div>
            <h3>this is booking :{serviceId}</h3>
        </div>
    );
};

export default Booking;