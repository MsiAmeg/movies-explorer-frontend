import UnlogginedForm from '../UnlogginedForm/UnlogginedForm.js';
import UnlogginedHeader from '../UnlogginedHeader/UnlogginedHeader.js';
import './Login.css';
import UnlogginedFooter from '../UnlogginedFooter/UnlogginedFooter.js';

function Login () {
    return (
        <>
        <UnlogginedHeader title='Рады видеть!' />
            <main className='login'>
                <UnlogginedForm btnText='Войти'>
                    <label className='unloggined__label'>
                        E-mail
                        <input className='unloggined__input' placeholder='почта' name='email' required minLength={2} />
                        <span className='unloggined__error'>Что-то пошло не так...</span>
                    </label>
                    <label className='unloggined__label'>
                        Пароль
                        <input className='unloggined__input' placeholder='пароль' name='password' type='password' required minLength={2} />
                        <span className='unloggined__error unloggined__error_visible'>Что-то пошло не так...</span>
                    </label>
                </UnlogginedForm>
            </main>
            <UnlogginedFooter spanTxt='Ещё не зарегистрированы?' linkTxt=' Регистрация' linkUrl='/signup' />
        </>
    );
}

export default Login;