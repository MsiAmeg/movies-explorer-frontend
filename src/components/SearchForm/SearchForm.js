import { useState, useContext, useEffect } from 'react';
import { CardsContext } from '../../contexts/Cards.js';
import { useFormValidation } from '../../utils/useFormValidation';
import { useMoviesFunctions } from '../../utils/useMoviesFunctions.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ isSaved }) {

  const cards = useContext(CardsContext);

  const [movieInput, setMovieInput] = useState('');
  const [shortsFilms, setShortsFilms] = useState(true);

  const movies = useMoviesFunctions();

  const validation = useFormValidation();

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('settings'));
    if (settings) {
      setSearchSettings(settings);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    cards.setIsLoading(true);
    if (isSaved) {
      movies.findSavedMovies(movieInput, shortsFilms);
    }
    else {
      movies.findMovies(movieInput, shortsFilms);
    }
    saveSearchSettings();
    validation.resetForm();
    cards.setIsLoading(false);
  };

  const onCheckBoxClick = () => {
    cards.setIsLoading(true);
    setShortsFilms(!shortsFilms);
    if (isSaved) {
      movies.findSavedMovies(movieInput, !shortsFilms);
    }
    else {
      movies.findMovies(movieInput, !shortsFilms);
    }
    cards.setIsLoading(false);
  };

  const onInputChange = (e) => {
    setMovieInput(e.target.value);
  };

  const saveSearchSettings = () => {
    localStorage.setItem('settings', JSON.stringify({
      input: movieInput,
      checkbox: shortsFilms
    }));
  };

  const setSearchSettings = (settings) => {
    setMovieInput(settings.input);
    setShortsFilms(settings.checkbox);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='search-form__container'>
        <input onChange={onInputChange}
          className="search-form__input" value={movieInput}
          type="text" placeholder="Фильм" required
          name="movie" minLength="1" maxLength="40"
        />
        <button className='search-form__button-find hover' type="submit" aria-label="поиск фильмов">Найти</button>
      </div>
      <FilterCheckbox checked={shortsFilms} onChange={onCheckBoxClick} text='Короткометражки' />
    </form>
  );
};

export default SearchForm;
