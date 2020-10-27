import React from 'react'

import UserCard from './UserCard'
import styles from './UserList.module.css'

const UserList = ({ userCRUD, setProp }) => {
  const allUsers = userCRUD.getUsers()

  return (
    <div>
      <h2>Список пользователей</h2>
      <div className={styles.userList}>
        {
          Object.entries(allUsers).map(arr => {
            const [uuid, user] = arr
            return (
              <UserCard
                key={uuid}
                id={uuid}
                userName={user.userName}
                dateOfBirth={user.dateOfBirth}
                address={user.address}
                city={user.city}
                phoneNumber={user.phoneNumber}
                deleteUser={userCRUD.deleteUser}
                setProp={setProp}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default UserList
