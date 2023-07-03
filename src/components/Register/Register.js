import { useState } from 'react';
import { Link } from 'react-router-dom';
import UnlogginedForm from '../UnlogginedForm/UnlogginedForm.js';
import UnlogginedHeader from '../UnlogginedHeader/UnlogginedHeader.js';
import './Register.css';

function Register () {

    const [input, setInput] = useState({name: '', email: '', password: ''});
    const [errors, setErrors] = useState({name: '', email: '', password: ''});
    const [isValid, setIsValid] = useState(false);

    const onInputChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
        setErrors({...errors, [e.target.name]: e.target.validationMessage});
        setIsValid(e.target.closest('form').checkValidity());
        console.log(e.target.closest('form').checkValidity());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({email: '', password: ''});
    };

    return (
        <>
            <UnlogginedHeader title='Добро пожаловать!' />
            <main className='register'>
                <UnlogginedForm isValid={isValid} btnText='Зарегистрироваться'>
                    <label className='unloggined__label'>
                        Имя
                        <input className='unloggined__input' placeholder='имя' name='name'
                        type="text" required minLength={2}
                        onChange={onInputChange} />
                        <span className='unloggined__error'>{errors.name}</span>
                    </label>
                    <label className='unloggined__label'>
                        E-mail
                        <input className='unloggined__input' placeholder='почта' type='email'
                        name='email' required minLength={2}
                        onChange={onInputChange} />
                        <span className='unloggined__error'>{errors.email}</span>
                    </label>
                    <label className='unloggined__label'>
                        Пароль
                        <input className='unloggined__input' placeholder='пароль' name='password'
                        type='password' required minLength={2}
                        onChange={onInputChange} />
                        <span className='unloggined__error'>{errors.password}</span>
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