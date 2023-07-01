import img from '../../images/card-img.png';
import './MoviesCard.css';

function MoviesCard ({ isLiked, isSaved }) {
    return (
        <article className='movies-card' aria-label='карточка'>
            <div className='movies-card__info'>
                <div className='movies-card__description'>
                    <h2 className='movies-card__title'>33 слова о дизайне</h2>
                    <p className='movies-card__time'>1ч 47м</p>
                </div>
                {
                    isSaved ? 
                    <button className='movies-card__icon movies-card__icon_delete hover' aria-label='добавить в избранное' />     
                    :
                    <button className={`movies-card__icon ${isLiked ? "movies-card__icon_liked" : ""} hover`} aria-label='добавить в избранное' />
                }
            </div>
            <img className='movies-card__image' src={img} alt='изображение карточки'/>
        </article>
    );
};

export default MoviesCard;