import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUser.js';
import { useFormValidation } from '../../utils/useFormValidation';
import Header from '../Header/Header.js';
import './Profile.css';

function Profile ({ onUpdateUser }) {

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
                        type="text" required minLength={2}
                        className='profile__input' placeholder={currentUser.name}
                        onChange={validation.onInputChange} />
                    </label>
                    <label className='profile__label'>
                        E-mail
                        <input disabled={!isEdited} name='email'
                        type='email' required minLength={2}
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
                {!isEdited && <Link to="https://api.rekunir.diplom.nomoredomains.rocks/users/me/signout"
                className='profile__link-logout hover'
                aria-label='выйти из аккаунта'>
                    Выйти из аккаунта
                </Link>}
            </main>
        </>
    );
};

export default Profile;