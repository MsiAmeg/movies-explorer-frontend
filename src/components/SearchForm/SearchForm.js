import { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm () {

    const [input, setInput] = useState({movie: ''});


    const onInputChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    }; 

    return (
        <form className='search-form'>
            <div className='search-form__container'>
                <input value={input.movie} onChange={onInputChange} 
                    className="search-form__input"
                    type="text" placeholder="Фильм" required 
                    name="movie" minLength="1" maxLength="40"
                />
                <button className='search-form__button-find hover' type="submit" aria-label="поиск фильмов">Найти</button>
            </div>
            <FilterCheckbox text='Короткометражки'/>
        </form>
    );
};

export default SearchForm;