import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import './Movies.css';

function Movies () {
    return (
        <>
            <Header />
            <main className='movies'>
                <SearchForm />
                <MoviesCardList isSaved={false} />
            </main>
            <Footer />
        </>
    );
};

export default Movies;