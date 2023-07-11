import logo from '../../images/logo.svg';
import './UnlogginedHeader.css';

function UnlogginedHeader({ title }) {
  return (
    <header className='unloggined-header'>
      <div className='unloggined-header__container'>
        <img className='unloggined-header__logo' src={logo} alt='логотип' />
        <h1 className='unloggined-header__title'>{title}</h1>
      </div>
    </header>
  );
}

export default UnlogginedHeader;
