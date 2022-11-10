import React, { useState } from 'react';
import useTitle from '../../hook/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const [service,setService]=useState({});
    useTitle('Add service');
    const notify = () =>  toast.success("Services added !", {
        position: toast.POSITION.TOP_CENTER
      });
    //   service add here...
    const handleSubmit=(event)=>{
        event.preventDefault();
        fetch('https://b6a11-service-review-server-side-muhib95.vercel.app/service', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
          })
          .then((response) => response.json())
      .then((data) => {
        
        if(data.acknowledged){
            notify()
            event.target.reset();
    
        }
      })
    }

    const handleOnBlur=(event)=>{
        const field=event.target.name;
        const value=event.target.value;
        const newService={...service};
        newService[field]=value;
        setService(newService);
        
        }
        
    return (
        <div>
              
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-6'>
            <input name='img' onBlur={handleOnBlur} type="text" placeholder="image" className="input input-bordered input-primary w-full " />
            <input name='name' onBlur={handleOnBlur} type="text" placeholder="title" className="input input-bordered input-primary w-full " />
            <input name='dis' onBlur={handleOnBlur} type="text" placeholder="discription" className="input input-bordered input-primary w-full " />
            <input name='price' onBlur={handleOnBlur} type="text" placeholder="price" className="input input-bordered input-primary w-full " />
            <input name='ratings' onBlur={handleOnBlur} type="text" placeholder="review" className="input input-bordered input-primary w-full" />
                </div>
          
               
            <button className="btn btn-primary mt-7" type="submit">add user</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddService;