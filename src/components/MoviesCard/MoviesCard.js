import './MoviesCard.css';
import img from '../../images/card-img.png';
import iconActive from '../../images/card-saved-active.svg';
import icon from '../../images/card-saved-disabled.svg';
import iconDelete from '../../images/card-saved-delete.svg';

function MoviesCard ({ isLiked, isSaved }) {
    return (
        <article className='movies-card' aria-label='карточка'>
            <div className='movies-card__info'>
                <div className='movies-card__info__description'>
                    <h2 className='movies-card__title'>33 слова о дизайне</h2>
                    <p className='movies-card__time'>1ч 47м</p>
                </div>
                {
                    isSaved ? 
                    <img className='movies-card__icon hover' src={iconDelete} alt='добавить в избранное' />     
                    :
                    <img className='movies-card__icon hover' src={isLiked ? iconActive : icon} alt='добавить в избранное' />
                }
            </div>
            <img className='movies-card__image' src={img} alt='изображение карточки'/>
        </article>
    );
};

export default MoviesCard;