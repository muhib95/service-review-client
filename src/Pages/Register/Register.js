import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import useTitle from '../../hook/useTitle';

const Register = () => {
    const {register,userUpdate}=useContext(UserContext);
    useTitle('Register');

    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const image=form.image.value;
        const email=form.email.value;
        const password=form.password.value;
        register(email,password)
		.then((result) => {
            handleUserUpdate(name,image);
			form.reset();
		})
		.catch((error) => {
			form.reset();
		
		});

    }
    const handleUserUpdate=(name,photoUrl)=>{
		const profile={
			displayName:name,
			photoURL:photoUrl
		}
		userUpdate(profile)
		.then(() => {
		
		}).catch((error) => {
			
		});

	}
   
    return (
        <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
           <img src='' alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl font-bold">Register</h1>
            <form onSubmit={handleRegister}  className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Img url</span>
                </label>
                <input name='image' type="text" placeholder="image" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <p>Already have an account <Link to='/login' className="label-text-alt link link-hover">Login</Link></p>
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;