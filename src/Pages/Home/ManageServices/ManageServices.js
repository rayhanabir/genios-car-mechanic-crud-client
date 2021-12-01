import React, {useState, useEffect} from 'react';

const ManageServices = () => {
    const [mangeService, setManageService] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services/')
        .then(res =>res.json())
        .then(data=>setManageService(data))
    },[]);

    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url,{
            method:"delete"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount == 1){
                
                const remaining = mangeService.filter(service =>service._id !== id)
                setManageService(remaining)
                alert("deleted Succesfully")
            }
        })

    }
    return (
        <div>
            <h3>Manage Services</h3>

            {
                mangeService.map(service =><div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=> handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;