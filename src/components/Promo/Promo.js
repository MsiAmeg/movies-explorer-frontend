import circles from '../../images/decoration-circles.svg'
import './Promo.css';

function Promo () {
    return (
        <section className='promo'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <img className='promo__circles' src={circles} alt="декоративные колечки"/>
        </section>
    );
};

export default Promo;