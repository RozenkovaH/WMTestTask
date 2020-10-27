import React, { useState } from 'react'
import moment from 'moment'

import styles from './UserCard.module.css'
import edit from '../icons/edit.svg'
import del from '../icons/delete.svg'

const UserCard = ({ id, userName, dateOfBirth, address, city, phoneNumber, deleteUser, setProp }) => {
  const [isVisible, setIsVisible] = useState(true)

  const confirmDelete = () => {
    const result = confirm('Вы уверены, что желаете удалить данного пользователя?')
    if (result) {
      deleteUser(id)
      setIsVisible(false)
    }
  }

  return (
    <div className={styles.userCard} style={{ display: !isVisible && 'none' }}>
      <div className={styles.btnContainer}>
        <button onClick={() => { setProp(id) }}><img src={edit} alt="редактировать" /></button>
        <button onClick={() => confirmDelete()}><img src={del} alt="удалить" /></button>
      </div>
      <p><strong>ФИО:</strong> {userName}</p>
      <p><strong>Дата рождения:</strong> {moment(Date.parse(dateOfBirth)).format('DD.MM.YYYY')}</p>
      <p><strong>Адрес:</strong> {address}</p>
      <p><strong>Город:</strong> {city}</p>
      <p><strong>Телефон:</strong> {phoneNumber}</p>
    </div>
  )
}

export default UserCard
