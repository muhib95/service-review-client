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
    return (
        <div>
            <h1>All my reviews</h1>
            <h2>{myReviews.length}</h2>
            {
            myReviews.map(myReview=><MyReviewRows key={myReview._id} myReview={myReview}></MyReviewRows>)    
            }
        </div>
    );
};

export default MyReview;