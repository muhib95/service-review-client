import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';
import useTitle from '../../hook/useTitle';
import MyReviewRows from '../MyReviewRows/MyReviewRows';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReview = () => {
    const {user}=useContext(UserContext);
    useTitle('My review');
    const notify = () =>  toast.success("Delete success !", {
      position: toast.POSITION.TOP_CENTER
    });
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
            notify();

         }
          })
          
  
        }
  
       
      }
    return (
      <div>
        {myReviews.length===0?
        <h2 className='text-4xl text-red-700 flex justify-center'>No reviews were Added</h2>
        :
        <>
        <div>
            <h1 className='text-2xl text-red-500'>All my reviews</h1>
            <h2>Numbers of Review= {myReviews.length}</h2>
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
        </>
}
<ToastContainer />
      </div>
   
    );
};

export default MyReview;