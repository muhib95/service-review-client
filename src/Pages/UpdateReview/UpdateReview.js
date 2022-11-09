import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';

const UpdateReview = () => {
    const review=useLoaderData();
    useTitle('Update review');
    const [update,setUpdate]=useState(review);

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(update);
        fetch(`http://localhost:5000/reviews/${review._id}`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>=0){
                    alert('review updated');
            }
           
        })
       
    
    }
        
    
    const handleChange=(event)=>{
        const value=event.target.value;
        const field=event.target.name;
        const newUpdate={...update};
        newUpdate[field]=value;
        setUpdate(newUpdate);
    
    }
    // console.log(update);
// console.log(review);
    return (
        <div>
             <form onSubmit={handleSubmit}>
           
            <label htmlFor="review">Your review<input onChange={handleChange} className="input input-bordered input-primary w-full mt-3"  type="text" name="review" id="" placeholder='review update'/></label><br/>
            <button className="btn btn-secondary mt-2" type="submit">Add update</button>
           </form>
        </div>
    );
};

export default UpdateReview;