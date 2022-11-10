import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = () => {
    const [services,setServices]=useState([]);
    const [load,setLoad]=useState(false)
    useTitle('Services');
    useEffect(()=>{
        setLoad(true)
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setLoad(false)
            setServices(data)
        })
       
    },[])
    
  
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-4'>
           {
            services.map(service=><ServiceItem key={service._id} service={service}></ServiceItem>)
           }
        </div>
              {
                  load?
                  <div className="container mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400" ></div>
                  :
                  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 hidden" ></div>

                }
        </div>
        
    );
};

export default Services;