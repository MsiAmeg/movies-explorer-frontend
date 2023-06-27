import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import './SavedMovies.css';

function SavedMovies () {
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