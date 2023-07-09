import { useEffect, useContext } from 'react';
import { CardsContext } from '../../contexts/Cards.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import mainApi from '../../utils/MainApi.js';
import './SavedMovies.css';

function SavedMovies () {

    const { setSavedCards } = useContext(CardsContext);

    useEffect(() => {
        mainApi.getInitialMovies()
            .then((res) => {
                console.log(res);
                setSavedCards(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setSavedCards]);

    return (
        <>
            <Header />
            <main className='saved-movies'>
                <SearchForm />
                <MoviesCardList isSaved={true} />
            </main>
            <Footer />
        </>
    );
};

export default SavedMovies;