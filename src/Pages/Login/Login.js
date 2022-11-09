import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from '../../hook/useTitle';

const Login = () => {
    const {handleGoogleLogin,logIn}=useContext(UserContext);
    useTitle('Login');
    const [load,setLoad]=useState(false)
    const provider=new GoogleAuthProvider();
    let navigate=useNavigate();
    let location=useLocation();
    let from=location.state?.from.pathname || "/";

 const handleLogin=(event)=>{
    event.preventDefault();
    setLoad(true)
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    logIn(email,password)
		.then((result) => {
      setLoad(false)
			form.reset();
      // console.log(result.user.email);
      const currentUser={
        email:result.user.email
       };
       fetch('http://localhost:5000/jwt',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(currentUser)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        localStorage.setItem('user-token',data.token)
        navigate(from,{replace:true});
      })

      // navigate(from, { replace: true });
      
		})
		.catch((error) => {
      setLoad(false)
			form.reset();
		});

 }
    const googleLogIn=()=>{
      setLoad(true)
handleGoogleLogin(provider)
.then((result) => {
  setLoad(false)
  navigate(from, { replace: true });
    console.log(result);
  }).catch((error) => {
    setLoad(false)
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
                {
                  load?
                  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400" ></div>
                  :
                  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 hidden" ></div>

                }
                
                
               
              </div>

               
              
              
      
        
       
    );
};

export default Login;