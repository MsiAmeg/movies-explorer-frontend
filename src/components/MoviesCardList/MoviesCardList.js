import { useContext } from 'react';
import { CardsContext } from '../../contexts/Cards.js';
import { useMoviesFunctions } from '../../utils/useMoviesFunctions.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';
import './MoviesCardList.css';

function MoviesCardList ({ isSaved }) {

    const { filteredCards, savedCards, isLoading, isCardLiked, handleCardDelete, handleCardLike } = useContext(CardsContext);

    const movieFunctions = useMoviesFunctions();

    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                {isSaved
                ?
                savedCards.map((movie) => {
                    return <MoviesCard name={movie.nameRU} duration={movie.duration}
                        isSaved={isSaved} isLiked={true} trailer={movie.trailerLink}
                        image={movie.image} key={movie._id}
                        movie={movie} handleCardLike={handleCardLike}
                        handleCardDelete={handleCardDelete}
                    />;
                })
                :
                filteredCards.map((movie) => {
                    return <MoviesCard name={movie.nameRU} duration={movie.duration}
                        isSaved={isSaved} isLiked={isCardLiked(movie.id)} trailer={movie.trailerLink}
                        image={`https://api.nomoreparties.co${movie.image.url}`} key={movie.id}
                        movie={movie} handleCardLike={handleCardLike}
                        handleCardDelete={handleCardDelete}
                    />;
                })}
            </div>
            {isLoading && <Preloader />}
            <div className={`movies-card-list__more-films ${isSaved ? "movies-card-list__more-films_ended" : ""}`}>
                <button className='movies-card-list__button hover'
                aria-label='загрузить еще' type='button'>Ещё</button>
            </div>
        </section>
    );
};

export default MoviesCardList;