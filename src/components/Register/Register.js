import { Link } from 'react-router-dom';
import UnlogginedForm from '../UnlogginedForm/UnlogginedForm.js';
import UnlogginedHeader from '../UnlogginedHeader/UnlogginedHeader.js';
import './Register.css';

function Register () {
    return (
        <>
            <UnlogginedHeader title='Добро пожаловать!' />
            <main className='register'>
                <UnlogginedForm btnText='Зарегистрироваться'>
                    <label className='unloggined__label'>
                        Имя
                        <input className='unloggined__input' placeholder='имя' name='name' type="text" required minLength={2} />
                        <span className='unloggined__error'>Что-то пошло не так...</span>
                    </label>
                    <label className='unloggined__label'>
                        E-mail
                        <input className='unloggined__input' placeholder='почта' type='email' name='email' required minLength={2} />
                        <span className='unloggined__error'>Что-то пошло не так...</span>
                    </label>
                    <label className='unloggined__label'>
                        Пароль
                        <input className='unloggined__input' placeholder='пароль' name='password' type='password' required minLength={2} />
                        <span className='unloggined__error unloggined__error_visible'>Что-то пошло не так...</span>
                    </label>
                </UnlogginedForm>
                <Link className='register__link hover' to='/signin'>
                    <span className='register__span'>
                        Уже зарегистрированы?
                    </span> Войти
                </Link>
            </main>
        </>
    );
}

export default Register;