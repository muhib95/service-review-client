import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';
import MyReviewRows from '../MyReviewRows/MyReviewRows';

const MyReview = () => {
    const {user}=useContext(UserContext);
    const email=user?.email||'undefined';
    const [myReviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews?email=${email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[email])
   
    const handleDelete=(id)=>{
        const process=window.confirm('Are you want to delete');
        if(process){
          fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
          })
          .then(res => res.json()) 
          .then(data => {
         console.log(data);
         if(data.deletedCount>=0){
            const remain=myReviews.filter(dr=>dr._id!==id)
            setReviews(remain);
            alert('Delete order succesfully')

         }
          })
          
  
        }
  
       
      }
    return (
        <div>
            <h1>All my reviews</h1>
            <h2>{myReviews.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          <label>
            <h2>My all reviews</h2>
          </label>
        </th>
        <th>Service name</th>
        <th>Review</th>
        <th>User name</th>
        <th></th>
      </tr>
    </thead>
    {
            myReviews.map(myReview=><MyReviewRows key={myReview._id} myReview={myReview} handleDelete={handleDelete}></MyReviewRows>)    
            }
    <tfoot>
      <tr>
        <th></th>
        <th>Service name</th>
        <th>Review</th>
        <th>User name</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
          
        </div>
    );
};

export default MyReview;