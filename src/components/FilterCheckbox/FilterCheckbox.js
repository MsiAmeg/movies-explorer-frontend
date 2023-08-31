import './FilterCheckbox.css';

function FilterCheckbox({ text, ...props }) {

  return (
    <label className='filter-checkbox hover' htmlFor='short-movies'>
      <input id='short-movies' className='filter-checkbox__input'
        type='checkbox' {...props} ></input>
      <span className='filter-checkbox__slider'></span>
      {text}
    </label>
  );
};

export default FilterCheckbox;
