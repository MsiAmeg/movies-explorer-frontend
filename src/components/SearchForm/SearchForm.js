import { useState, useContext } from 'react';
import { CardsContext } from '../../contexts/Cards.js';
import { useFormValidation } from '../../utils/useFormValidation';
import { useMoviesFunctions } from '../../utils/useMoviesFunctions.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm () {

    const cards = useContext(CardsContext);

    const [movieInput, setMovieInput] = useState('');
    const [shortsFilms, setShortsFilms] = useState(true);

    const movies = useMoviesFunctions();
    
    const validation = useFormValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        cards.setIsLoading(true);
        movies.findMovies(movieInput, shortsFilms);
        validation.resetForm();
        cards.setIsLoading(false);
    };

    const onCheckBoxClick = () => {
        setShortsFilms(!shortsFilms);
        movies.findMovies(movieInput, !shortsFilms);
    }; 

    const onInputChange = (e) => {
        setMovieInput(e.target.value);
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
            <FilterCheckbox onClick={onCheckBoxClick} text='Короткометражки'/>
        </form>
    );
};

export default SearchForm;