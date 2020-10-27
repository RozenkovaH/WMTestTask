import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { v4 as uuidv4 } from 'uuid'

import AddUser from './components/AddUser'
import UserList from './components/UserList'
import styles from './styles.module.css'

const App = () => {
  const [user, setUser] = useState({ value: {} })

  const setUsers = (users) => localStorage.setItem('users', JSON.stringify(users))

  const getUsers = () => JSON.parse(localStorage.getItem('users')) === null ? {} : JSON.parse(localStorage.getItem('users'))

  const userCRUD = {
    getUsers: getUsers,
    getUser: (id) => [id, getUsers()[id]],
    saveUser: (id = uuidv4(), user) => {
      const users = getUsers()
      users[id] = user
      setUsers(users)
    },
    deleteUser: (id) => {
      const users = getUsers()
      delete users[id]
      setUsers(users)
    }
  }

  const setProp = (id) => {
    document.getElementById('userData').reset()
    const [key, value] = userCRUD.getUser(id)
    setUser({ key: key, value: value })
  }

  const resetUser = () => setUser({ value: {} })

  return (
    <div style={{ maxWidth: '50rem', margin: '4rem auto' }}>
      <h1>CRUD React</h1>
      <div className={styles.container}>
        <AddUser user={user} userCRUD={userCRUD} resetUser={resetUser} />
        <UserList userCRUD={userCRUD} setProp={setProp} />
      </div>
    </div>
  )
}

export default hot(App)
