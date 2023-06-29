import UnlogginedForm from '../UnlogginedForm/UnlogginedForm.js';
import UnlogginedHeader from '../UnlogginedHeader/UnlogginedHeader.js';
import './Register.css';
import UnlogginedFooter from '../UnlogginedFooter/UnlogginedFooter.js';

function Register () {
    return (
        <>
        <UnlogginedHeader title='Добро пожаловать!' />
            <main className='register'>
                <UnlogginedForm btnText='Зарегистрироваться'>
                    <label className='unloggined__label'>
                        Имя
                        <input className='unloggined__input' placeholder='имя' name='name' required minLength={2} />
                        <span className='unloggined__error'>Что-то пошло не так...</span>
                    </label>
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
            <UnlogginedFooter spanTxt='Уже зарегистрированы?' linkTxt=' Войти' linkUrl='/signin' />
        </>
    );
}

export default Register;