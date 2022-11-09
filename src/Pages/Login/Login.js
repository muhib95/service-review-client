import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from '../../hook/useTitle';

const Login = () => {
    const {handleGoogleLogin,logIn}=useContext(UserContext);
    useTitle('Login');
    const provider=new GoogleAuthProvider();

 const handleLogin=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    logIn(email,password)
		.then((result) => {
            console.log(result);
			form.reset();
		
		})
		.catch((error) => {
			form.reset();
		});

 }
    const googleLogIn=()=>{
handleGoogleLogin(provider)
.then((result) => {
    console.log(result);
  }).catch((error) => {
console.error(error);
  });

    }
    return (
        
              <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold">Log In</h1>
      <form  onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <p>New User <Link to='/register' className="label-text-alt link link-hover">Register</Link></p>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={googleLogIn}  className="btn btn-primary">Google</button>
    </div>
  </div>
  
</div>
       
    );
};

export default Login;