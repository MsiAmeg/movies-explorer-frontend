import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import ProtectedRoute from '../../utils/ProtectedRoute.js';
import Profile from '../Profile/Profile.js';
import './App.css';

function App () {

    const [loggedIn, setLoggedIn] = useState(false);

    const userLoggined = () => {
        setLoggedIn(true);
    }

    const signOut = () => {
        setLoggedIn(false);
    };

    return (
        <LoginContext.Provider value={{loggedIn, userLoggined, signOut}}>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/movies' element={<ProtectedRoute element={Movies}></ProtectedRoute>} />
                    <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies}></ProtectedRoute>} />
                    <Route path='/account' element={<ProtectedRoute element={Profile}></ProtectedRoute>} />
                    <Route path='*' element={loggedIn ? <Navigate to="/movies" replace /> : <Navigate to="/sign-in" replace />} />
                </Routes>
            </div>
        </LoginContext.Provider>
    );
};

export default App;