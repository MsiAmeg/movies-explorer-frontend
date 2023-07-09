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
import './App.css';

function App () {

    
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({ name: '', email: '', _id: '', });


    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [savedCards, setSavedCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        tokenCheck();
        if (loggedIn) {
            const userPromise = mainApi.getUserData();
            const moviesPromise = moviesApi.getInitialMovies();
            const savedMoviesPromise = mainApi.getInitialMovies();


            Promise.all([userPromise, moviesPromise, savedMoviesPromise])
                .then(([userPromise, moviesPromise, savedMoviesPromise]) => {
                    const { name, email, _id } = userPromise.data;
                    setCurrentUser({name, email, _id});

                    console.log(moviesPromise);
                    setCards(moviesPromise);

                    
                    setSavedCards(savedMoviesPromise.data);

                    navigate('/movies', {replace: true});
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [loggedIn]);

    useEffect(() => {
        console.log(filteredCards);
    }, [filteredCards]);

    
    const userLoggined = () => {
        setLoggedIn(true);
    }

    const tokenCheck = () => {
        //const jwt = localStorage.getItem('jwt');
    
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
        const {name, email, password} = input;
        authApi.registration(name, email, password)
            .then(res => {
                console.log(email, password);
                // popup
                return authApi.signIn(password, email);
            })
            .then(res => {
                console.log(res);
                userLoggined();
                //setCurrentUser({ name, email, _id: res._id });
                navigate('/movies', {replace: true});
            })
            .catch(err => {
                console.log(err);
                // popup
            });
      };

    const handleLogin = (input) => {
        const {email, password} = input;
        authApi.signIn(password, email)
            .then(res => {
                console.log(res);
                userLoggined();
                //popup
                navigate('/', {replace: true});
            })
            .catch(err => {
                console.log(err);
                //popup
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
          })
          .catch((err) => {
            console.log(err);
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
                console.log(newCard);
                setSavedCards((prevState) => prevState.filter((prevCard) => prevCard._id !== movieId));
                setFilteredCards((prevState) => prevState.map((prevCard) => prevCard.id === movieId ? newCard.data : prevCard));
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
    
    return (
        <LoginContext.Provider value={{loggedIn, userLoggined, signOut}}>
            <CurrentUserContext.Provider value={currentUser}>
                <CardsContext.Provider value={{cards, filteredCards, setFilteredCards, savedCards, setSavedCards, isLoading, setIsLoading, isCardLiked, handleCardDelete, handleCardLike}}>
                    <div className='container'>
                        <Routes>
                            <Route path='/' element={<Main />} />
                            <Route path='/signin' element={<Login onLogin={handleLogin} />} />
                            <Route path='/signup' element={<Register onRegister={handleRegister} />} />
                            <Route path='/movies' element={<ProtectedRoute element={Movies}></ProtectedRoute>} />
                            <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies}></ProtectedRoute>} />
                            <Route path='/profile' element={<ProtectedRoute element={Profile} onUpdateUser={handleUpdateUser}></ProtectedRoute>} />
                            <Route path='*' element={<PageNotFound />} />
                        </Routes>
                    </div>
                </CardsContext.Provider>
            </CurrentUserContext.Provider>
        </LoginContext.Provider>
    );
};

export default App;