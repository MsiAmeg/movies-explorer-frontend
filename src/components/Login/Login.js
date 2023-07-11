import { Link } from 'react-router-dom';
import { useFormValidation } from '../../utils/useFormValidation';
import UnlogginedForm from '../UnlogginedForm/UnlogginedForm.js';
import UnlogginedHeader from '../UnlogginedHeader/UnlogginedHeader.js';
import './Login.css';

function Login({ onLogin }) {

  const validation = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(validation.input);
    e.target.reset();
    validation.resetForm();
  };

  return (
    <>
      <UnlogginedHeader title='Рады видеть!' />
      <main className='login'>
        <UnlogginedForm handleSubmit={handleSubmit} isValid={validation.isValid} btnText='Войти'>
          <label className='unloggined__label'>
            E-mail
            <input className='unloggined__input' placeholder='почта' name='email'
              type='email' required minLength={2} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
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
            <span className='unloggined__error unloggined__error_visible'>{validation.errors.password}</span>
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
