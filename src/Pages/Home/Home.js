import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    const services=useLoaderData();
    
    return (
        <div>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src='https://placeimg.com/260/400/arch' alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-4'>
  
    {
services.map(service=><HomeService key={service._id} service={service}></HomeService>)
    }
</div>
<div className='w-full flex justify-center'>
<button className="btn btn-primary  ">See All</button>
</div>

        </div>
    );
};

export default Home;