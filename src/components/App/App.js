import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../contexts/Login.js';
import { CurrentUserContext } from '../../contexts/CurrentUser.js';
import { CardsContext } from '../../contexts/Cards.js';
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

    const navigate = useNavigate();

    const userLoggined = () => {
        setLoggedIn(true);
        navigate('/movies');
    }

    const signOut = () => {
        setLoggedIn(false);
    };

    return (
        <LoginContext.Provider value={{loggedIn, userLoggined, signOut}}>
            <CardsContext.Provider value={cards}>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/signin' element={<Login />} />
                        <Route path='/signup' element={<Register />} />
                        <Route path='/movies' element={<ProtectedRoute element={Movies}></ProtectedRoute>} />
                        <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies}></ProtectedRoute>} />
                        <Route path='/profile' element={<ProtectedRoute element={Profile}></ProtectedRoute>} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </div>
            </CardsContext.Provider>
        </LoginContext.Provider>
    );
};

export default App;