import { Link } from 'react-router-dom';
import './Footer.css';

function Footer () {
    return (
        <footer className='footer'>
            <h3 className='footer__title'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h3>
            <div className='footer__info'>
                <p className='footer__copyright'>© 2020</p>
                <nav className='footer__links'>
                    <Link to='https://practicum.yandex.ru' target='_blank' className='footer__link hover'>Яндекс.Практикум</Link>
                    <Link to='https://github.com/MsiAmeg/movies-explorer-frontend' target='_blank' className='footer__link hover'>Github</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;