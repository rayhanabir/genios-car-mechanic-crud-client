import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';


const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        
        axios.post('http://localhost:5000/services', data)
        .then(res =>{
            if(res.data.insertedId){
                alert("services added successfully")
                reset()
            }
        })
        
    };
    return (
        <div className="add-service">
         
             <h3>please add a service</h3>  
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })}placeholder="name" />
            <textarea {...register("description")} placeholder="description"/>
            <input type="number" {...register("price")} placeholder="price"/>
            <input {...register("img")} placeholder="image url"/>
            <input type="submit" />
        </form>
         </div>
       
    );
};

export default AddServices;