import LandingTitle from '../LandingTitle/LandingTitle.js';
import './Techs.css';

function Techs () {
    return (
        <section className='techs'>
            <LandingTitle text='Технологии' className='landing-title_techs'/>
            <h2 className='techs__title'>7 технологий</h2>
            <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__list'>
                <li className='techs__list__item'>HTML</li>
                <li className='techs__list__item'>CSS</li>
                <li className='techs__list__item'>JS</li>
                <li className='techs__list__item'>React</li>
                <li className='techs__list__item'>Git</li>
                <li className='techs__list__item'>Express.js</li>
                <li className='techs__list__item'>mongoDB</li>
            </ul>
        </section>
    );
};

export default Techs;