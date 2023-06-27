import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList ({ isSaved }) {
    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                <MoviesCard isSaved={isSaved} isLiked={true} />
                <MoviesCard isSaved={isSaved} isLiked={true} />
            </div>
            {
                <div className={`movies-card-list__more-films ${isSaved ? "movies-card-list__more-films_ended" : ""}`}>
                    <button className='movies-card-list__more-films__button hover'>Ещё</button>
                </div>
            }
        </section>
    );
};

export default MoviesCardList;