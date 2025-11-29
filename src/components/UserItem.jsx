import React from 'react'

function UserItem({user}) {
  return (
    <li>{user.name} {user.age}</li>
  )
}

export default UserItem