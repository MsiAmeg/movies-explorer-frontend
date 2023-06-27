import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import './Profile.css';
import { useState } from 'react';

function Profile () {

    const [input, setInput] = useState({ name: '', email:'' });

    const onInputChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    };

    return (
        <>
            <Header />
            <main className='profile'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <form className='profile__form'>
                    <label className='profile__form__label hover'>
                        Имя
                        <input value={input.name} name='name'
                        className='profile__form__input' placeholder='Виталий'
                        onChange={onInputChange} />
                    </label>
                    <label className='profile__form__label hover'>
                        E-mail
                        <input value={input.email} name='email'
                        className='profile__form__input' placeholder='pochta@yandex.ru'
                        onChange={onInputChange} />
                    </label>
                    <button type='submit' className='profile__form__button hover' aria-label='редактирование данных'>
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