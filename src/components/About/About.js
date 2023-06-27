import LandingTitle from '../LandingTitle/LandingTitle.js';
import './About.css';

function About () {
    return (
        <section className='about'>
            <LandingTitle text='О проекте' />
            <div className='about__stages'>
                <h3 className='about__stages__title'>Дипломный проект включал 5 этапов</h3>
                <p className='about__stages__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className='about__stages__title'>На выполнение диплома ушло 5 недель</h3>
                <p className='about__stages__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about__time'>
                <p className='about__time__data'>1 неделя</p>
                <p className='about__time__description'>Back-end</p>
                <p className='about__time__data'>4 недели</p>
                <p className='about__time__description'>Front-end</p>
            </div>
        </section>
    );
};

export default About;