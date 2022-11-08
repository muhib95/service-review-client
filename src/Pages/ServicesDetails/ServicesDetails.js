import React, { useContext, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const ServicesDetails = () => {
    const ref = useRef(null);
    const {user}=useContext(UserContext);
    const a=useLoaderData();
    // let today = new Date();
    // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(user)
    const { _id,name,price,ratings,dis,img}=a[0];
    console.log(_id);
    const handleClick = event => {
        const review=ref.current.value;
        const obj={
            review:review,
            serviceID:_id

        };
        fetch('http://localhost:5000/review', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if(data.acknowledged){
                alert('Successful');
        
            }
          })

        console.log(obj);
      };
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
<div>
    <h2>Reviews</h2>
    {
        user?.email?
        
        <div>
        <label htmlFor="message">My Textarea</label>
        <textarea className="textarea textarea-primary block" ref={ref} id="message" name="message" />
  
        <button  className="btn btn-active btn-primary mt-3" onClick={handleClick}>Click</button>
      </div>
       
        
        :
        <>
        <h2>nai</h2>
        </>


    }
</div>
        </div>
    );
};

export default ServicesDetails;