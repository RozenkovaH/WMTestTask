import React from 'react'
import moment from 'moment'

import styles from './AddUser.module.css'

const AddUser = ({ user, userCRUD, resetUser }) => {
  const refreshField = (fieldName) => user.value[fieldName]
  const handleFormSubmit = (e) => {
    e.preventDefault()
    userCRUD.saveUser(user.key, {
      userName: document.getElementById('userName').value,
      dateOfBirth: document.getElementById('dateOfBirth').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      phoneNumber: document.getElementById('phoneNumber').value
    })
    resetUser()
    document.getElementById('userData').reset()
  }

  return (
    <div style={{ marginRight: '3em', width: '22em' }}>
      <h2>Добавить / редактировать пользователя</h2>
      <form id="userData" onSubmit={handleFormSubmit} onReset={() => resetUser()}>
        <label>ФИО:<input type="text" id="userName" maxLength="100" pattern="^([А-ЯЁ][а-яё]+[\-\s]?){2,4}" required defaultValue={refreshField('userName')} /></label>
        <label>Дата рождения:<input type="date" id="dateOfBirth" min="1900-01-01" max={moment().format('YYYY-MM-DD')} required defaultValue={refreshField('dateOfBirth')} /></label>
        <label>Адрес:<input type="text" id="address" maxLength="250" defaultValue={refreshField('address')} /></label>
        <label>Город:<input type="text" id="city" maxLength="100" defaultValue={refreshField('city')} /></label>
        <label>Телефон:<input type="tel" id="phoneNumber" placeholder="+7 (900) 123-45-67" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" defaultValue={refreshField('phoneNumber')} /></label>
        <div className={styles.btnContainer}>
          <button className={styles.submitBtn} type="submit">Сохранить</button>
          <button className={styles.submitBtn} type="reset">Отмена</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
