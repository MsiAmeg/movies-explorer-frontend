import { Link } from 'react-router-dom';
import UnlogginedForm from '../UnlogginedForm/UnlogginedForm.js';
import UnlogginedHeader from '../UnlogginedHeader/UnlogginedHeader.js';
import './Login.css';

function Login () {
    return (
        <>
        <UnlogginedHeader title='Рады видеть!' />
            <main className='login'>
                <UnlogginedForm btnText='Войти'>
                    <label className='unloggined__label'>
                        E-mail
                        <input className='unloggined__input' placeholder='почта' name='email' type='email' required minLength={2} />
                        <span className='unloggined__error'>Что-то пошло не так...</span>
                    </label>
                    <label className='unloggined__label'>
                        Пароль
                        <input className='unloggined__input' placeholder='пароль' name='password' type='password' required minLength={2} />
                        <span className='unloggined__error unloggined__error_visible'>Что-то пошло не так...</span>
                    </label>
                </UnlogginedForm>
                <Link className='login__link hover' to='/signup'>
                    <span className='login__span'>
                        Ещё не зарегистрированы?
                    </span> Регистрация
                </Link>
            </main>
        </>
    );
}

export default Login;