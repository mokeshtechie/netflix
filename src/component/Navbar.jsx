import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const Navbar = () => {
  const {user, logOut}=UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () =>{
    try{
      await logOut();
      navigate('/')
    } catch(error){
      console.log(error)
    }

  }
  console.log(user)
   return (
    <div className='flex justify-between p-4 z-[100] w-full absolute'>
      <Link to="/">
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
        
        {user?.email?(
          <div>
          <Link to="/account">
          <button className='text-white pr-4 '>Account</button>
          </Link>
          <Link to = "/signup">

          <button className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer' onClick={handleLogout}>Logout</button>
            </Link> 
           
        </div>
        ):(
          <div>
          <Link to="/login">
          <button className='text-white pr-4 '>sign in</button>
          </Link>
          <Link to = "/signup">

          <button className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer'>sign up</button>
            </Link> 
           
        </div>
        )}
    </div>
  )
}

export default Navbar