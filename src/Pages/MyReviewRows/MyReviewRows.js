import React from 'react';

const MyReviewRows = ({myReview,handleDelete}) => {
    const {_id,displayName,name,review}=myReview;
    console.log(myReview);
    return (
        <tbody>
      
        <tr>
          <th>
            <label>
              <button onClick={()=>handleDelete(_id)}  className="btn btn-warning">X</button>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
            
              <div>
                <div className="font-bold">{name?name:'no name'}</div>
                
              </div>
            </div>
          </td>
          <td>
            {
                review?review:'no review'
            }
            <br/>
            
          </td>
          <td>{displayName?displayName:'no user name'}</td>
          <th>
            <button  className="btn btn-info">Update</button>
          </th>
        </tr>
       
       
        
        
        
       
      </tbody>
    );
};

export default MyReviewRows;