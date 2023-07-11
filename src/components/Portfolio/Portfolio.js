import { Link } from 'react-router-dom';
import LandingTitle from '../LandingTitle/LandingTitle.js';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <LandingTitle text='Портфолио' className='landing-title_portfolio' />
      <nav className='portfolio__links'>
        <Link to='https://msiameg.github.io/how-to-learn' target='_blank' className='portfolio__link hover'>Статичный сайт
          <p className='portfolio__arrow'>↗</p>
        </Link>
        <Link to='https://msiameg.github.io/russian-travel' target='_blank' className='portfolio__link hover'>Адаптивный сайт
          <p className='portfolio__arrow'>↗</p>
        </Link>
        <Link to='https://msiameg.github.io/mesto/' target='_blank' className='portfolio__link hover'>Одностраничное приложение
          <p className='portfolio__arrow'>↗</p>
        </Link>
      </nav>
    </section>
  );
};

export default Portfolio;
