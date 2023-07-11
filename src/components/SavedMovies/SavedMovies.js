import { useEffect, useContext } from 'react';
import { CardsContext } from '../../contexts/Cards.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import './SavedMovies.css';

function SavedMovies({ getSavedMovies }) {

  const { savedCards, setSavedfilteredCards } = useContext(CardsContext);

  useEffect(() => {
    getSavedMovies();
    setSavedfilteredCards(savedCards);
  }, []);

  return (
    <>
      <Header />
      <main className='saved-movies'>
        <SearchForm isSaved={true} />
        <MoviesCardList isSaved={true} />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
