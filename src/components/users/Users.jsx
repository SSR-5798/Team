import React, { useEffect, useState } from 'react'
import "./users.scss"
import Title from "../title/Title"
import User from '../user/User'

const Users = ({ title, users }) => {

  const [roleBasedUsers, setRoleBasedUsers] = useState([])

  useEffect(() => {
    if (title.toLowerCase().includes("admin")) {
      setRoleBasedUsers(users.filter(user => user.role.includes("admin")))
    }

    if (title.toLowerCase().includes("member")) {
      setRoleBasedUsers(users.filter(user => user.role.includes("member")))
    }
  }, [title, users])

  return (
    <div className='users-content'>
      <Title title={title} />

      {roleBasedUsers.length > 0 ? <div className='users'>
        {roleBasedUsers?.map((user, idx) => {
          return (
            <User key={idx} user={user} />
          )
        })}
      </div> : <h3>{`No Users are available in ${title}`}</h3>}

    </div>
  )
}

export default Users;