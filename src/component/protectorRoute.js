 import React from 'react'
 import { Navigate } from 'react-router-dom'
 import { UserAuth } from '../context/authContext'
 const ProtectorRoute = ({children}) => {
    const {user}=UserAuth()
    if(!user){
        return <Navigate to='/'/>
    }else{
        return children
    }
   return (
     <div>protectorRoute</div>
   )
 }
 
 export default ProtectorRoute