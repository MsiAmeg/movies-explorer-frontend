import './FilterCheckbox.css';

function FilterCheckbox ({ text }) {

    return (
        <label className='filter-checkbox hover' htmlFor='short-movies'>
            <input id='short-movies' className='filter-checkbox__input' type='checkbox'></input>
            <span className='filter-checkbox__slider'></span>
            {text}
        </label>
    );
};

export default FilterCheckbox;