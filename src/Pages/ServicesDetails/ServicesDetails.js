import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import useTitle from '../../hook/useTitle';
import ServiceReview from '../ServiceReview/ServiceReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ServicesDetails = () => {
    const ref = useRef(null);
    const {user}=useContext(UserContext);

    const notify = () =>  toast.success("Review added !", {
      position: toast.POSITION.TOP_CENTER
    });

    useTitle('Service details');
    const a=useLoaderData();
    const [reviews,setReviews]=useState([]);
    const [t,sT]=useState(false);
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const { _id,name,price,ratings,dis,img}=a[0];
    console.log(_id);
 
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?id=${_id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
      },[_id,t])
    const handleClick = event => {
        const review=ref.current.value;
        const email=user?.email||'undefined';
        const displayName=user?.displayName||'undefined';
        const photoURL=user?.photoURL||'undefined';

        const obj={
            displayName:displayName,
            email:email,
            photoURL:photoURL,
            name:name,
            review:review,
            serviceID:_id,
            dt:date+" "+time

        };
        fetch('http://localhost:5000/review', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if(data.acknowledged){
             notify()
                sT(true)
                ref.current.value='';
        
            }
          })

        

        
      };

    
      console.log(reviews);

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
    <h2 className='text-3xl text-red-500'>Here Reviews</h2>
    {
        user?.email?
        
        <div>
        <label htmlFor="message" className='text-xl'>Write review</label>
        <textarea className="textarea textarea-primary block" ref={ref} id="message" name="message" />
  
        <button  className="btn btn-active btn-primary mt-3" onClick={handleClick}>Click</button>
      </div>
       
        
        :
        <>
        <h2 className='text-lg text-orange-700'>Please Login for Review <Link to='/login' className="text-blue-700 label-text-alt link link-hover">Login</Link></h2>
        </>


    }
</div>
<h2>All Reviews for this service</h2>

   <h2>{reviews.length}</h2>
   <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-16'>
   {
    reviews.map(rev=><ServiceReview key={rev._id} rev={rev}></ServiceReview>)
   }
   </div>

   <ToastContainer />

        </div>
    );
};

export default ServicesDetails;