// import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import HomeService from '../HomeService/HomeService';
import img from '../../asset/home.png'

const Home = () => {
    // const services=useLoaderData();
    const [services,setServices]=useState([]);
    useTitle('Home');
	// home service part here...
    useEffect(()=>{
        fetch('https://b6a11-service-review-server-side-muhib95.vercel.app/')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    
    return (
        <div>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Welcome to The Clean Teeth</h1>
      <p className="py-6">Specially designed for patients seeking dentistry abroad, we offer you bespoke expertise at a price that is unbelievably affordable. We have an elite team of carefully selected specialists from all fields of dentistry.</p>
      
    </div>
  </div>
</div>
<div>
    <h2 className='text-6xl my-2'>Services</h2>
<div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-4'>
  
  {
services.map(service=><HomeService key={service._id} service={service}></HomeService>)
  }
</div>
</div>

<div className='w-full flex justify-center'>
    <Link to='/services'><button className="btn btn-primary mb-5 ">See All</button></Link>

</div>
<div>
<section className="p-6 text-gray-100">
	<form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900">Send</button>
		</div>
	</form>
</section>
</div>
<div className='my-8'>
<section className="bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What dental services are available on the Clean teeth?</summary>
				<div className="px-4 pb-4">
					<p>Complete exams, x-rays, and dental cleaningsman and woman Fillings, root canals, and extractions Cosmetic dentistry, such as whitening, porcelain and composite veneers</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How to find an Clean teeth dentist</summary>
				<div className="px-4 pb-4">
					<p>Call my mobile number or you can come to the address</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Dental costs?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Show the service page. The prices are very cheap.</p>
				</div>
			</details>
		</div>
	</div>
</section>
</div>

        </div>
    );
};

export default Home;