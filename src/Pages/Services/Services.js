import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = () => {
    const [services,setServices]=useState([]);
    useTitle('Services');
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-4'>
           {
            services.map(service=><ServiceItem key={service._id} service={service}></ServiceItem>)
           }
        </div>
    );
};

export default Services;