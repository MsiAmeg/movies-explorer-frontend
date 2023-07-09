import { useContext, useEffect } from 'react';
import { CardsContext } from '../contexts/Cards.js';
import mainApi from './MainApi.js';

export const useMoviesFunctions = () => {

    const { cards, filteredCards, setFilteredCards } = useContext(CardsContext);


    const findMovies = (serchString, shortEnabled) => {
        let _tempMovies = [];

        _tempMovies = cards.filter((movie) => movie.nameRU.toLowerCase().includes(serchString.toLowerCase()));
        
        if (!shortEnabled) {
            _tempMovies = _tempMovies.filter((movie) => movie.duration >= 40);
        }

        setFilteredCards(_tempMovies);
    };
    
    return { findMovies };
};