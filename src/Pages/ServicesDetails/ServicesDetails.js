import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const a=useLoaderData();
    const { _id,name,price,ratings,dis,img}=a[0];
    console.log(_id);
    return (
        <div className='mt-7'>
            <h1>Service Details</h1>
            <div className="card card-compact ">
  <figure><img src={img} alt='' /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{dis}</p>
    <div className="card-actions justify-end">
        <p>Price: {price}</p>
        <p>Ratings: {ratings}</p>
        
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesDetails;