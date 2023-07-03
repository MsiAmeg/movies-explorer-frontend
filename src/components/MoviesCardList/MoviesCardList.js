import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';
import './MoviesCardList.css';

function MoviesCardList ({ isSaved }) {

    const [isCardsLoading, setCardsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setCardsLoading(false), 3000);
    }, []);

    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                <MoviesCard isSaved={isSaved} isLiked={true} />
                <MoviesCard isSaved={isSaved} isLiked={true} />
            </div>
            {isCardsLoading && <Preloader />}
            <div className={`movies-card-list__more-films ${isSaved ? "movies-card-list__more-films_ended" : ""}`}>
                <button className='movies-card-list__button hover'
                aria-label='загрузить еще' type='button'>Ещё</button>
            </div>
        </section>
    );
};

export default MoviesCardList;