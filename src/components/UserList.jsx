import React from 'react'
import UserItem from './UserItem'

function Userlist() {
    const users = [
        {id: 1, name: "Alice", age: 25, active: true},
        {id: 2, name: "Bob", age: 28, active: false},
        {id: 3, name: "Charlie", age: 30, active: true},
    ]

  return (
    <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
  )
}

export default Userlist