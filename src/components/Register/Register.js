import { Link } from 'react-router-dom';
import { useFormValidation } from '../../utils/useFormValidation.js';
import UnlogginedForm from '../UnlogginedForm/UnlogginedForm.js';
import UnlogginedHeader from '../UnlogginedHeader/UnlogginedHeader.js';
import './Register.css';

function Register({ onRegister }) {

  const validation = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(validation.input);
    e.target.reset();
    validation.resetForm();
  };

  return (
    <>
      <UnlogginedHeader title='Добро пожаловать!' />
      <main className='register'>
        <UnlogginedForm handleSubmit={handleSubmit} isValid={validation.isValid} btnText='Зарегистрироваться'>
          <label className='unloggined__label'>
            Имя
            <input className='unloggined__input' placeholder='имя' name='name'
              type="text" required minLength={2} pattern='[a-zA-Zа-яА-Я\s\-]{2,}'
              onChange={validation.onInputChange}
            />
            <span className='unloggined__error'>{validation.errors.name}</span>
          </label>
          <label className='unloggined__label'>
            E-mail
            <input className='unloggined__input' placeholder='почта' type='email'
              name='email' required minLength={2} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              onChange={validation.onInputChange}
            />
            <span className='unloggined__error'>{validation.errors.email}</span>
          </label>
          <label className='unloggined__label'>
            Пароль
            <input className='unloggined__input' placeholder='пароль' name='password'
              type='password' required minLength={2}
              onChange={validation.onInputChange}
            />
            <span className='unloggined__error'>{validation.errors.password}</span>
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
