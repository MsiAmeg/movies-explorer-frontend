import { Link } from 'react-router-dom';
import LandingTitle from '../LandingTitle/LandingTitle.js';
import me from '../../images/me.jpg';
import './AboutMe.css';

function AboutMe () {
    return (
        <section className='about-me'>
            <LandingTitle text='Студент' className='landing-title_about-me'/>
            <article className='about-me__card'>
                <div className='about-me__card__info'>
                    <h2 className='about-me__card__title'>Виталий</h2>
                    <p className='about-me__card__subtitle'>Фронтенд-разработчик, 30 лет</p>
                    <p className='about-me__card__description'>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <Link to='https://github.com/MsiAmeg' target='_blank' className='about-me__card__link hover'>Github</Link>
                </div>
                <div className='about-me__card__image-wrapper'>
                    <img src={me} className='about-me__card__image' alt='мое фото' />
                </div>
            </article>
        </section>
    );
};

export default AboutMe;