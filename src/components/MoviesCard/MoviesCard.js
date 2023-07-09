import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard ({ isLiked, isSaved, name, duration, image, trailer, movie, handleCardLike, handleCardDelete }) {

    const [isCardLiked, setIsCardLiked] = useState(isLiked);

    const durationTime = (duration) => {
        if (duration < 60) {
            return `${duration}м`;
        }
        const hours = Math.trunc(duration/60);
        
        return `${hours}ч ${duration - 60 * hours}м`;
    }

    const handleImgClick = () => {
        window.open(trailer);
    };

    const onDeleteClick = () => {
        handleCardDelete(movie._id);
    };

    const onlikeClick = () => {
        handleCardLike(movie, isCardLiked);
        setIsCardLiked(!isCardLiked);
    };

    return (
        <article className='movies-card' aria-label='карточка'>
            <div className='movies-card__info'>
                <div className='movies-card__description'>
                    <h2 className='movies-card__title'>{name}</h2>
                    <p className='movies-card__time'>{durationTime(duration)}</p>
                </div>
                {
                    isSaved ? 
                    <button className='movies-card__icon movies-card__icon_delete hover' onClick={onDeleteClick} aria-label='добавить в избранное' />     
                    :
                    <button className={`movies-card__icon ${isCardLiked ? "movies-card__icon_liked" : ""} hover`} onClick={onlikeClick} aria-label='добавить в избранное' />
                }
            </div>
            <img className='movies-card__image' src={image} onClick={handleImgClick} alt='изображение карточки'/>
        </article>
    );
};

export default MoviesCard;