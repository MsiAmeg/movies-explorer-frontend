import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUser.js';
import { useFormValidation } from '../../utils/useFormValidation';
import Header from '../Header/Header.js';
import './Profile.css';

function Profile({ onUpdateUser }) {

  const [isEdited, setIsEdited] = useState(false);

  const currentUser = useContext(CurrentUserContext);
  const validation = useFormValidation();

  const editForm = () => {
    setIsEdited(true);
  };

  const BlurForm = (e) => {
    if (e.relatedTarget === null) {
      setIsEdited(false);
      e.target.closest('form').reset();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(validation.input);
    e.target.reset();
    validation.resetForm();
    console.log("submited");
  };

  return (
    <>
      <Header />
      <main className='profile'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' onSubmit={handleSubmit} onBlur={BlurForm}>
          <label className='profile__label'>
            Имя
            <input disabled={!isEdited} name='name'
              type="text" required minLength={2} pattern='[a-zA-Zа-яА-Я\s\-]{2,}'
              className='profile__input' placeholder={currentUser.name}
              onChange={validation.onInputChange} />
          </label>
          <label className='profile__label'>
            E-mail
            <input disabled={!isEdited} name='email'
              type='email' required minLength={2} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              className='profile__input' placeholder={currentUser.email}
              onChange={validation.onInputChange} />
          </label>
          {isEdited && <button type='submit' onClick={editForm} disabled={!validation.isValid}
            className='profile__button profile__button_submit hover'
            aria-label='редактирование данных'
          >
            Сохранить
          </button>}
          {!isEdited && <button type='button' onClick={editForm} className='profile__button hover' aria-label='редактирование данных'>
            Редактировать
          </button>}
        </form>
        {!isEdited && <button className='profile__button-logout hover' aria-label='выйти из аккаунта' onClick={currentUser.signOutHandler}>
          Выйти из аккаунта
        </button>}
      </main>
    </>
  );
};

export default Profile;
