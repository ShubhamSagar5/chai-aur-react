import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  
    const {user} = useContext(UserContext)
    console.log(user)
  if(!user){
        return <h2>Please Enter UserName And Password</h2>
  }
  if(user){
    return <h1>Login SUccessfully {user.userName}</h1>
  }
}

export default Profile