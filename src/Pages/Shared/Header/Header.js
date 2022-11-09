import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../AuthContext/AuthContext';
import logo from '../../../asset/logo.jpg'

const Header = () => {
    const {user,logOut}=useContext(UserContext);
console.log(user?.email);
    const handleLogOut=()=>{
        logOut()
        .then(() => {
     
        }).catch((error) => {
          
        });

    }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
      {
      user?.email?
        <>
         <li><Link to='/myreview'>My Review</Link></li>
      <li><Link to='/addservice'>Add service</Link></li>
      <li><button onClick={handleLogOut}>Log out</button></li>
        </>
        :
        <>
              <li><Link to='/login'>Login</Link></li>
    <li><Link to='/register'>Register</Link></li>
        </>
      }
      <li><Link to='/blogs'>Blogs</Link></li>
      </ul>
    </div>
    <Link  to='/' className=" normal-case text-xl">
      <img className='w-16 hidden md:inline' src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      {
      user?.email?
        <>
         <li><Link to='/myreview'>My Review</Link></li>
      <li><Link to='/addservice'>Add service</Link></li>
      <li><button onClick={handleLogOut}>Log out</button></li>
        </>
        :
        <>
              <li><Link to='/login'>Login</Link></li>
    <li><Link to='/register'>Register</Link></li>
        </>
      }
      <li><Link to='/blogs'>Blogs</Link></li>
   

 
    
    


     
    </ul>
  </div>
  <div className="navbar-end">
    <Link ><button className="btn btn-outline btn-warning">Apintment</button></Link>
  </div>
</div>
        </div>
    );
};

export default Header;