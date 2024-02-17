import React from 'react'
import "./user.scss";

const User = ({user}) => {
  return (
    <div className='user'>
        <img src={user?.img} alt="No Images Found"/> 
        <div className='userInfo'>
            <span>{user?.first_name}</span>
            <span>{user?.email}</span>
        </div>
    </div>
  )
}

export default User;