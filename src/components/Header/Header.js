import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { LoginContext } from "../../contexts/LoginContext.js";
import logo from '../../images/logo.svg';
import accountIcon from '../../images/account.svg';
import './Header.css';

function Header () {
    const navigate = useNavigate();

    const [isExtended, setExtended] = useState(false);

    const { loggedIn, userLoggined, signOut } = useContext(LoginContext);

    const menuToggle = ()=> {
        setExtended(!isExtended);
    }

    const goLanding = ()=> {
        navigate('/');
    }

    return (
        <header className='header'>
            <img src={logo} alt="логотип" onClick={goLanding} className="header__logo"/>
            <button onClick={menuToggle} aria-label='кнопка меню'
                className={`header__menu-button ${isExtended ? "header__menu-button_active" : ""}`}
            />
            {isExtended && <div className='header__navigation-background'></div>}
            <nav className={`header__navigation ${isExtended ? "header__navigation_visible" : ""}`} >
                <ul className='header__navigation__movies'>
                        <li className='header__navigation__movies__item header__navigation__movies__item_landing'>
                            <NavLink
                                className={({ isActive }) =>
                                isActive ? 'header__link header__link_landing header__link_active hover' : 'header__link header__link_landing hover'
                                }
                                to="/">
                                Главная
                            </NavLink>
                        </li>
                    <li className='header__navigation__movies__item'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'header__link header__link_active hover' : 'header__link hover'
                            }
                            to="/movies">
                            Фильмы
                        </NavLink>
                    </li>
                    <li className='header__navigation__movies__item'>
                        <NavLink 
                            onClick={userLoggined}
                            className={({ isActive }) =>
                                isActive ? 'header__link header__link_saved-films header__link_active hover' : 'header__link header__link_saved-films hover'
                            } 
                            to="/saved-movies">
                            Сохранённые фильмы
                        </NavLink>
                    </li>
                </ul>
                <Link className='header__link header__link_account hover' to="/profile">
                    Аккаунт
                    <img src={accountIcon} alt='иконка аккаунта' className='header__link__image'></img>
                </Link>
            </nav>
        </header>
    );
};

export default Header;