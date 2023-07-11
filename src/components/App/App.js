import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../contexts/Login.js';
import { CurrentUserContext } from '../../contexts/CurrentUser.js';
import { CardsContext } from '../../contexts/Cards.js';
import authApi from '../../utils/AuthApi.js';
import mainApi from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import ProtectedRoute from '../../utils/ProtectedRoute.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';
import './App.css';

function App() {

  const [loadCards, setLoadCards] = useState({ firstLoad: 12, moreBtnLoad: 3 });

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '', _id: '', });


  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [savedfilteredCards, setSavedfilteredCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);


  const [showedCards, setShowedCards] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const [showedCardsCount, setShowedCardsCount] = useState(0);

  const [showedSavedCards, setShowedSavedCards] = useState([]);
  const [totalSavedCards, setTotalSavedCards] = useState(0);
  const [showedSavedCardsCount, setShowedSavedCardsCount] = useState(0);

  const [informationPopup, setInformationPopup] = useState({ isOpen: false, success: false, text: '' });


  const navigate = useNavigate();

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      const userPromise = mainApi.getUserData();
      const moviesPromise = moviesApi.getInitialMovies();


      Promise.all([userPromise, moviesPromise])
        .then(([userPromise, moviesPromise]) => {
          const { name, email, _id } = userPromise.data;
          setCurrentUser({ name, email, _id });

          setCards(moviesPromise);
          getSavedMovies();

          navigate('/movies', { replace: true });
        })
        .catch((err) => {
          setInformationPopup({ isOpen: true, success: false, text: 'Что-то пошло не так! Попробуйте ещё раз.' });
          console.log(err);
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    let resizeTimer;
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 1025) {
        setLoadCards({ firstLoad: 12, moreBtnLoad: 3 });
      }
      else if (window.innerWidth <= 1024 && window.innerWidth >= 700) {
        setLoadCards({ firstLoad: 8, moreBtnLoad: 2 });
      }
      else {
        setLoadCards({ firstLoad: 5, moreBtnLoad: 2 });
      }
    }, 250);
  };

  const closeinfoPopup = () => {
    setInformationPopup({ isOpen: false, success: false, text: '' });
  };

  const getSavedMovies = () => {
    mainApi.getInitialMovies()
      .then((res) => {
        setSavedCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const userLoggined = () => {
    setLoggedIn(true);
  }

  const tokenCheck = () => {
    authApi.validateUserData()
      .then(res => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
      });
  }


  const handleRegister = (input) => {
    const { name, email, password } = input;
    authApi.registration(name, email, password)
      .then(res => {
        console.log(email, password);
        return authApi.signIn(password, email);
      })
      .then(res => {
        console.log(res);
        userLoggined();
        setInformationPopup({ isOpen: true, success: true, text: 'Вы успешно зарегистрировались!' });
        navigate('/movies', { replace: true });
      })
      .catch(err => {
        console.log(err);
        setInformationPopup({ isOpen: true, success: false, text: 'Что-то пошло не так! Попробуйте ещё раз.' });
      });
  };

  const handleLogin = (input) => {
    const { email, password } = input;
    authApi.signIn(password, email)
      .then(res => {
        console.log(res);
        userLoggined();
        setInformationPopup({ isOpen: true, success: true, text: 'Вход успешно произведен!' });
        navigate('/', { replace: true });
      })
      .catch(err => {
        console.log(err);
        setInformationPopup({ isOpen: true, success: false, text: 'Что-то пошло не так! Попробуйте ещё раз.' });
      });
  };

  const signOut = () => {
    setLoggedIn(false);
    setCurrentUser({ name: '', email: '', _id: '', });
  };


  const handleUpdateUser = ({ name, email }) => {
    mainApi.setUserData({ name, email })
      .then((updatedUser) => {
        setCurrentUser({
          ...currentUser,
          email: updatedUser.data.email,
          name: updatedUser.data.name
        });
        setInformationPopup({ isOpen: true, success: true, text: 'Данные успешно обновлены!' });
      })
      .catch((err) => {
        console.log(err);
        setInformationPopup({ isOpen: true, success: false, text: 'Что-то пошло не так! Попробуйте ещё раз.' });
      });
  };


  const isCardLiked = (id) => {
    let isLiked = false;
    savedCards.forEach(movie => {
      if (movie.movieId === id) {
        isLiked = true;
      }
    });
    return isLiked;
  };


  const handleCardDelete = (movieId) => {
    mainApi.deleteCard(movieId)
      .then((newCard) => {
        setSavedCards((prevState) => prevState.filter((prevCard) => prevCard._id !== movieId));
        setSavedfilteredCards((prevState) => prevState.filter((prevCard) => prevCard._id !== movieId));
        setFilteredCards((prevState) => prevState.map((prevCard) => prevCard.id === movieId ? newCard.data : prevCard));

        setShowedSavedCards((prevState) => prevState.filter((prevCard) => prevCard._id !== movieId));
        setSavedCards((prevState) => prevState.map((prevCard) => prevCard.id === movieId ? newCard.data : prevCard));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleCardLike = (localMovie, isLiked) => {

    if (isLiked) {
      savedCards.forEach(movie => {
        if (movie.movieId === localMovie.id) {
          handleCardDelete(movie._id);
        }
      });
    }
    else {
      mainApi.setCard(localMovie)
        .then((res) => {
          const Card = res.data;
          setSavedCards([...savedCards, Card]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const loadMoreCards = () => {
    let showedCount = showedCards.length;
    const _tempCards = [];
    if (showedCardsCount < totalCards) {
      if (totalCards <= (showedCardsCount + loadCards.moreBtnLoad)) {
        setShowedCards(filteredCards);
      }
      else {
        for (let i = 1; i <= loadCards.moreBtnLoad; i++) {
          _tempCards[i - 1] = filteredCards[showedCount];
          showedCount++;
        }
        setShowedCards(cards => cards.concat(_tempCards));
      }
    }
  };

  const loadMoreSavedCards = () => {
    let showedCount = showedSavedCards.length;
    const _tempCards = [];
    if (showedCardsCount < totalSavedCards) {
      if (totalSavedCards <= (showedSavedCardsCount + loadCards.moreBtnLoad)) {
        setShowedSavedCards(savedfilteredCards);
      }
      else {
        for (let i = 1; i <= loadCards.moreBtnLoad; i++) {
          _tempCards[i - 1] = savedfilteredCards[showedCount];
          showedCount++;
        }
        setShowedSavedCards(cards => cards.concat(_tempCards));
      }
    }
  };

  return (
    <LoginContext.Provider value={{ loggedIn, userLoggined, signOut }}>
      <CurrentUserContext.Provider value={currentUser}>
        <CardsContext.Provider value={{
          cards, filteredCards, setFilteredCards, savedCards, setSavedCards,
          isLoading, setIsLoading, isCardLiked, handleCardDelete, handleCardLike, isEmpty, setIsEmpty,
          savedfilteredCards, setSavedfilteredCards, totalCards, setTotalCards, showedCardsCount, setShowedCardsCount,
          showedCards, setShowedCards, showedSavedCards, setShowedSavedCards, loadMoreCards, loadCards,
          totalSavedCards, setTotalSavedCards, showedSavedCardsCount, setShowedSavedCardsCount, loadMoreSavedCards
        }}>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/signin' element={<Login onLogin={handleLogin} />} />
              <Route path='/signup' element={<Register onRegister={handleRegister} />} />
              <Route path='/movies' element={<ProtectedRoute element={Movies}></ProtectedRoute>} />
              <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} getSavedMovies={getSavedMovies}></ProtectedRoute>} />
              <Route path='/profile' element={<ProtectedRoute element={Profile} onUpdateUser={handleUpdateUser}></ProtectedRoute>} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>

            <InfoTooltip onClose={closeinfoPopup} success={informationPopup.success}
              isOpen={informationPopup.isOpen} text={informationPopup.text}
            />
          </div>
        </CardsContext.Provider>
      </CurrentUserContext.Provider>
    </LoginContext.Provider>
  );
};

export default App;
