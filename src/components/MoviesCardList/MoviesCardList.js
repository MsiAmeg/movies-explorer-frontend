import { useContext, useEffect, useState } from 'react';
import { CardsContext } from '../../contexts/Cards.js';
import { useMoviesFunctions } from '../../utils/useMoviesFunctions.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';
import './MoviesCardList.css';

function MoviesCardList({ isSaved }) {

  const { isLoading, setIsLoading, isCardLiked,
    handleCardDelete, handleCardLike, showedSavedCards, totalCards,
    showedCardsCount, setShowedCardsCount, showedCards, loadMoreCards, loadMoreSavedCards,
    showedSavedCardsCount, setShowedSavedCardsCount, totalSavedCards, loadCards, isEmpty, setIsEmpty } = useContext(CardsContext);

  const moreBtnHandler = () => {
    setIsLoading(true);
    if (isSaved) {
      setShowedSavedCardsCount(showedSavedCardsCount + loadCards.moreBtnLoad);
      loadMoreSavedCards();
    }
    else {
      setShowedCardsCount(showedCardsCount + loadCards.moreBtnLoad);
      loadMoreCards();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      setIsEmpty(false);
    };
  }, [])

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {isSaved
          ?
          showedSavedCards.map((movie) => {
            return <MoviesCard name={movie.nameRU} duration={movie.duration}
              isSaved={isSaved} isLiked={true} trailer={movie.trailerLink}
              image={movie.image} key={movie._id}
              movie={movie} handleCardLike={handleCardLike}
              handleCardDelete={handleCardDelete}
            />;
          })
          :
          showedCards.map((movie) => {
            return <MoviesCard name={movie.nameRU} duration={movie.duration}
              isSaved={isSaved} isLiked={isCardLiked(movie.id)} trailer={movie.trailerLink}
              image={`https://api.nomoreparties.co${movie.image.url}`} key={movie.id}
              movie={movie} handleCardLike={handleCardLike}
              handleCardDelete={handleCardDelete}
            />;
          })
        }
      </div>
      {isLoading && <Preloader />}
      {isEmpty && <h3 className='movies-card-list__empty-title'>По вашему запросу ничего не найдено!</h3>}
      {isSaved && <div className={`movies-card-list__more-films ${showedSavedCardsCount >= totalSavedCards ? "movies-card-list__more-films_ended" : ""}`}>
        <button className='movies-card-list__button hover'
          aria-label='загрузить еще' onClick={moreBtnHandler} type='button'>Ещё</button>
      </div>}
      {!isSaved && <div className={`movies-card-list__more-films ${showedCardsCount >= totalCards ? "movies-card-list__more-films_ended" : ""}`}>
        <button className='movies-card-list__button hover'
          aria-label='загрузить еще' onClick={moreBtnHandler} type='button'>Ещё</button>
      </div>}
    </section>
  );
};

export default MoviesCardList;
