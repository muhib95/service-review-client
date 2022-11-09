import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceItem = ({service}) => {
    const { _id,name,price,ratings,dis,img}=service;
    console.log(_id);
    return (
        
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><PhotoProvider>
      <PhotoView src={img}>
      <img src={img} alt='' />
      </PhotoView>
    </PhotoProvider></figure>
  
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{dis.slice(0,50)}</p>
    <div className="card-actions justify-end">
        <p>Price: {price}</p>
        <p>Rating: {ratings}</p>
        <Link to={`/servicesdetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
      
    </div>
  </div>
</div>
        

    );
};

export default ServiceItem;