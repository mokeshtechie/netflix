import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from "../context/authContext"

function Signup() {
  const [email,setEmail] = useState("")
  const [password,setPassword]= useState("")
  const {user,signUp}= UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await signUp(email,password)
      navigate('/')
    }catch(error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full h-screen'>
      <img className="hidden sm:block absolute w-full h-0full object-cover"src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-16 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-W-[320px] py-16 mx-9  '>
            <h1 className='text-3xl font-bold mx-9'>Sign up</h1>
            <form  onSubmit={handleSubmit}className='w-full flex flex-col py-4 '>
              <input 
              onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' />
              <input  className='p-3 my-2 bg-gray-700 rounded'
              onChange={(e) => setPassword(e.target.value)}
              type="password" placeholder='password' />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>signup</button>
              <div className='flex justify-between item-center text-sm text-gray-600'>
                <p > <input className="mr-2"type="checkbox" />Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'><span className='text-gray-600'>Already subcribeed to netflix</span>{''} <Link to='/login'>sign In</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup