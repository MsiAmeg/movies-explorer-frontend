import { useContext } from 'react';
import { CardsContext } from '../contexts/Cards.js';

export const useMoviesFunctions = () => {

  const { cards, setFilteredCards, savedCards, setSavedfilteredCards,
    setTotalCards, setShowedCards, setShowedSavedCards, setShowedCardsCount,
    setIsEmpty, loadCards } = useContext(CardsContext);


  const findMovies = (serchString, shortEnabled) => {
    _resetSearch();
    setShowedCards([]);
    let _tempMovies = [];

    _tempMovies = cards.filter((movie) => movie.nameRU.toLowerCase().includes(serchString.toLowerCase()));

    if (!shortEnabled) {
      _tempMovies = _tempMovies.filter((movie) => movie.duration >= 40);
    }

    showFirstMovies(_tempMovies);

    setFilteredCards(_tempMovies);
    setTotalCards(_tempMovies.length);
  };


  const findSavedMovies = (serchString, shortEnabled) => {
    _resetSearch();
    setShowedSavedCards([]);
    let _tempMovies = [];

    _tempMovies = savedCards.filter((movie) => movie.nameRU.toLowerCase().includes(serchString.toLowerCase()));

    if (!shortEnabled) {
      _tempMovies = _tempMovies.filter((movie) => movie.duration >= 40);
    }

    showFirstSavedMovies(_tempMovies);

    setSavedfilteredCards(_tempMovies);
    setTotalCards(_tempMovies.length);
  };

  const showFirstMovies = (_tempMovies) => {
    if (_tempMovies.length === 0) {
      setIsEmpty(true);
      setShowedCardsCount(0);
    }
    else if (_tempMovies.length <= loadCards.firstLoad) {
      setShowedCards(_tempMovies);
      setShowedCardsCount(_tempMovies.length);
    }
    else {
      for (let i = 0; i < loadCards.firstLoad; i++) {
        setShowedCards(cards => cards.concat(_tempMovies[i]));
        setShowedCardsCount(loadCards.firstLoad);
      }
    }
  };

  const showFirstSavedMovies = (_tempMovies) => {
    if (_tempMovies.length === 0) {
      setIsEmpty(true);
      setShowedCardsCount(0);
    }
    else if (_tempMovies.length <= loadCards.firstLoad) {
      setShowedSavedCards(_tempMovies);
      setShowedCardsCount(_tempMovies.length);
    }
    else {
      for (let i = 0; i < loadCards.firstLoad; i++) {
        setShowedSavedCards(cards => cards.concat(_tempMovies[i]));
        setShowedCardsCount(loadCards.firstLoad);
      }
    }
  };

  const _resetSearch = () => {
    setIsEmpty(false);
  }

  return { findMovies, findSavedMovies };
};
