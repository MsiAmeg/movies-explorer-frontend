import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from "../../contexts/LoginContext.js";
import logo from '../../images/logo.svg';
import './LandingHeader.css';

function LandingHeader () {

    const { userLoggined } = useContext(LoginContext);

    return (
        <header className='landing-header'>
            <img src={logo} alt="логотип" className="landing-header__logo"/>
            <nav className='landing-header__navigation'>
                <Link className='landing-header__link hover' to="*">Регистрация</Link>
                <Link onClick={userLoggined} className='landing-header__link landing-header__link_login hover' to="*">Войти</Link>
            </nav>
        </header>
    );
};

export default LandingHeader;