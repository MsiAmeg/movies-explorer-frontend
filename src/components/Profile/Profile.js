import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import './Profile.css';
import { useState } from 'react';

function Profile () {

    const [input, setInput] = useState({ name: '', email:'' });
    const [isEdited, setIsEdited] = useState(false);

    const onInputChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    };

    const editForm = () => {
        setIsEdited(true);
    };

    const SubmitForm = (e) => {
        console.log(e.relatedTarget);
        if (e.relatedTarget === null) {
            setIsEdited(false);
        }
    };

    return (
        <>
            <Header />
            <main className='profile'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <form className='profile__form' onBlur={SubmitForm}>
                    <label className='profile__label'>
                        Имя
                        <input disabled={!isEdited} value={input.name} name='name'
                        className='profile__input' placeholder='Виталий'
                        onChange={onInputChange} />
                    </label>
                    <label className='profile__label'>
                        E-mail
                        <input disabled={!isEdited} value={input.email} name='email'
                        className='profile__input' placeholder='pochta@yandex.ru'
                        onChange={onInputChange} />
                    </label>
                    <button type='button' onClick={editForm} className='profile__button hover' aria-label='редактирование данных'>
                        Редактировать
                    </button>
                </form>
                <Link to="https://api.rekunir.diplom.nomoredomains.rocks/users/me/signout"
                className='profile__link-logout hover'
                aria-label='выйти из аккаунта'>
                    Выйти из аккаунта
                </Link>
            </main>
        </>
    );
};

export default Profile;