import './App.css';
import React, { useCallback } from 'react';
import { Switch, Route, useHistory, useLocation, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../context/CurrentUserContext';
import apiMovies from '../../utils/MovieApi';
import api from '../../utils/Api';
import { handleFoundMovies, filterShortFilm } from '../../utils/utils';
import * as auth from '../../utils/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

    const history = useHistory();
    const location = useLocation();
    const locationMovies = location.pathname === '/movies';

    const [isLoading, setIsLoading] = React.useState(false);
    const [allMovies, setAllMovies] = React.useState([]);
    const [foundMovies, setFoundMovies] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [foundMoviesInSavedMovies, setFoundMoviesInSavedMovies] = React.useState([]);;
    
    const [isMovieSearch, setIsMovieSearch] = React.useState(false);
    const [isDelete, setIsDelete] = React.useState(false);
    const [queryKeyWord, setQueryKeyWord] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({name: '', email: ''});

    const [isUserChecked, setIsUserChecked] = React.useState(false);
    const [isErrorSavedMovies, setIsErrorSavedMovies] = React.useState(false);
    const [isNothingFoundSavedMovies, setIsNothingFoundSavedMovies] = React.useState(false);


    const [isNothingFound, setIsNothingFound] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [errorStatusCodeRegistration, setErrorStatusCodeRegistration] = React.useState('');
    const [isSuccessfulRegistration, setIsSuccessfulRegistration] = React.useState(false);
    const [errorStatusCodeLogin, setErrorStatusCodeLogin] = React.useState('');
    const [isSuccessfulLogin, setIsSuccessfulLogin] = React.useState(false);
    const [errorStatusCodeProfile, setErrorStatusCodeProfile] = React.useState('');
    const [isSuccessfulUpdateProfile, setIsSuccessfulUpdateProfile] = React.useState(false);
    
    const checboxState = localStorage.getItem('stateCheckbox') === 'true' ? true : false;
    const [statusChecbox, setStatusChecbox] = React.useState(checboxState);

    React.useEffect(() => {
        if (localStorage.getItem('jwt')) {
            const token = localStorage.getItem('jwt');
            auth.checkToken(token)
                .then(() => {
                    setLoggedIn(true);
                    setIsUserChecked(true);
                })
                .catch((err) => {
                    setIsUserChecked(true);
                    console.log(err);
                })
        } else {
            setIsUserChecked(true);
        }
    }, [])

    function handleGetSavedMovies() {
        setIsLoading(true);
        api.getSavedMovies()
            .then((res) => {
                setSavedMovies(res);
                localStorage.setItem('savedMovies', JSON.stringify(res));
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsErrorSavedMovies(true)
                console.log(error);
            });
    }

    React.useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (!token) {
            return
        } else {
            Promise.all([api.getProfileInfo(token), handleGetSavedMovies()])
            .then(([ userData ]) => {
                setCurrentUser({
                    ...currentUser,
                    name: userData.name,
                    email: userData.email,
                });
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [loggedIn])

    React.useEffect(() => {
        if (JSON.parse(localStorage.getItem('movies')) && locationMovies) {
            const films = JSON.parse(localStorage.getItem('movies'));

            if (films.length !== 0) {
                setFoundMovies(films);
            } else {
                setIsNothingFound(true);
            }
        }
    }, [locationMovies]);

    function handleRegistration(data) {
        const authData = {
            email: data.email,
            password: data.password
        }

        auth.register(data)
            .then(() => {
                setIsSuccessfulRegistration(true);
                handleLogin(authData);
                history.push('/movies');
            })
            .catch(err => {
                console.log(err.message);
                setErrorStatusCodeRegistration(err);
                setIsSuccessfulRegistration(false);
            })
    }

    function handleLogin(data) {
        auth.authorize(data)
            .then((res) => {
                localStorage.setItem('jwt', res.jwt);
                setLoggedIn(true);
                setIsSuccessfulLogin(true);
                history.push('/movies');
            })
            .catch(err => {
                console.log(err);
                setErrorStatusCodeLogin(err);
                setIsSuccessfulLogin(false);
            })
    }

    function handleUpdateUserInfo(name, email) {
        api.updateProfileInfo(name, email)
            .then((data) => {
                setCurrentUser(data);
                setIsSuccessfulUpdateProfile(true);
            })
            .catch(err => {
                console.log(err);
                setErrorStatusCodeProfile(err);
                setIsSuccessfulUpdateProfile(false);
            })
    }

    function handleSearchMovies(query, stateCheckbox) {
        setIsLoading(true);

        setQueryKeyWord(query);
        setStatusChecbox(stateCheckbox);

        localStorage.setItem('query', query);
        localStorage.setItem('stateCheckbox', stateCheckbox);

        if (allMovies.length === 0) {
            apiMovies.getFoundMovies(query)
                .then((movies) => {
                    setAllMovies(movies);
                    const filteredMovies = handleFoundMovies(query, movies);
                    const film = (stateCheckbox === true) ? filterShortFilm(filteredMovies) : filteredMovies;
                    setFoundMovies(film);
                    checkFoundMoviesLength(film, setIsNothingFound);
                    setIsError(false);
                    localStorage.setItem('movies', JSON.stringify(film));
                    setIsLoading(false);
                })
                .catch(err => {
                    setIsError(true);
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }

    React.useEffect(() => {
        if (allMovies.length !== 0) {
            const filteredMovies = handleFoundMovies(queryKeyWord, allMovies);
            const film = (statusChecbox === true) ? filterShortFilm(filteredMovies) : filteredMovies;
            setFoundMovies(film);
            checkFoundMoviesLength(film, setIsNothingFound);
            setIsError(false);
            setIsLoading(false);
            localStorage.setItem('movies', JSON.stringify(film));
        }
    }, [queryKeyWord, allMovies, statusChecbox])

    function handleSearchSavedMovies(query, stateCheckbox) {
        setIsLoading(true)
        setIsMovieSearch(true);
        const filteredMovies = handleFoundMovies(query, savedMovies);
        const film = (stateCheckbox === true) ? filterShortFilm(filteredMovies) : filteredMovies;
        setFoundMoviesInSavedMovies(film);
        checkFoundMoviesLength(film, setIsNothingFoundSavedMovies);
        setIsErrorSavedMovies(false);
        setIsLoading(false)
    }

    function checkFoundMoviesLength(movies, stateIsNothingFound) {
        if (movies.length === 0) {
            stateIsNothingFound(true);
        } else {
            stateIsNothingFound(false);
        }
    }

    function handleDeleteSavedMovie(movie) {
        setIsDelete(true)
        api.deleteMovieLike(movie)
            .then((movie) => {
                setSavedMovies((state) => state.filter((m) => (m._id !== movie.deleteMovie._id)));
                console.log(movie.deleteMovie._id);
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setIsDelete(false)
            })
    }

    function handleAddMovieToSaved(newMovie) {
        api.addMovieToSaved(newMovie)
            .then((newMovie) => {
                setSavedMovies([newMovie, ...savedMovies]);
                setIsError(false);
            })
            .catch(err => {
                setIsError(true);
                console.log(err);
            })
    }

    function logout() {
        setLoggedIn(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
        localStorage.removeItem('stateCheckbox');
        localStorage.removeItem('query');
        setFoundMovies([]);
        setSavedMovies([])
        setCurrentUser({name: '', email: ''});
    }

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>

                    <Header loggedIn={loggedIn}/>
                    <Switch>

                        <Route exact path="/">
                            <Main/>
                        </Route>

                        <Route path="/signup">
                            {!loggedIn ? 
                                <Register
                                        handleRegistration={handleRegistration}
                                        errorStatusCode={errorStatusCodeRegistration}
                                        isSuccessfulRequest={isSuccessfulRegistration}
                                    /> : <Redirect exact to="/movies"/>}
                        </Route>

                        <Route path="/signin">
                            {!loggedIn ? <Login
                                handleLogin={handleLogin}
                                errorStatusCode={errorStatusCodeLogin}
                                isSuccessfulRequest={isSuccessfulLogin}
                            /> : <Redirect exact to="/movies"/>}
                        </Route>

                        {isUserChecked ?
                            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                                <Profile
                                    logout={logout}
                                    onUpdateUserInfo={handleUpdateUserInfo}
                                    errorStatusCode={errorStatusCodeProfile}
                                    isSuccessfulRequest={isSuccessfulUpdateProfile}
                                />
                            </ProtectedRoute>
                            : null}

                        {isUserChecked ?
                            <ProtectedRoute path="/movies" loggedIn={loggedIn}>
                                <Movies
                                    isLoading={isLoading}
                                    onFindMovies={handleSearchMovies}
                                    movies={foundMovies}
                                    onSaveMovie={handleAddMovieToSaved}
                                    onDeleteMovie={handleDeleteSavedMovie}
                                    savedMovies={savedMovies}
                                    isError={isError}
                                    isNothingFound={isNothingFound}
                                />
                            </ProtectedRoute>
                            : null}

                        {isUserChecked ?
                            <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
                                <SavedMovies
                                    isLoading={isLoading}
                                    onFindMovies={handleSearchSavedMovies}
                                    movies={savedMovies}
                                    foundMoviesInSavedMovies={foundMoviesInSavedMovies}
                                    onMovieSearch={isMovieSearch}
                                    onDeleteMovie={handleDeleteSavedMovie}
                                    isError={isErrorSavedMovies}
                                    isNothingFound={isNothingFoundSavedMovies}
                                />
                            </ProtectedRoute>
                            : null}

                        {isUserChecked ?
                            <Route path="*">
                                {loggedIn ? <PageNotFound/> : <Redirect exact to="/"/>}
                            </Route>
                            : null}
                    </Switch>

                    <Footer/>
               
            </ CurrentUserContext.Provider>

        </div>
    );
}

export default App;
