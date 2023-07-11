import { Link } from 'react-router-dom';
import me from '../../images/me.jpg';
import './MyCard.css';

function MyCard() {
  return (
    <article className='card-me'>
      <div className='card-me__info'>
        <h2 className='card-me__title'>Виталий</h2>
        <p className='card-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
        <p className='card-me__description'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
          С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <Link to='https://github.com/MsiAmeg' target='_blank' className='card-me__link hover'>Github</Link>
      </div>
      <div className='card-me__image-wrapper'>
        <img src={me} className='card-me__image' alt='мое фото' />
      </div>
    </article>
  );
};

export default MyCard;
