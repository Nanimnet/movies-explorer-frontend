import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

function App() {

    return (
        <div className="page">
            
                    <Header/>
                    <Switch>

                        <Route exact path="/">
                            <Main/>
                        </Route>

                        <Route path="/signup">
                            <Register/>
                        </Route>

                        <Route path="/signin">
                            <Login/>
                        </Route>

                        <Route path="/profile">
                            <Profile/>
                        </Route>

                        <Route path="/movies">
                            <Movies/>
                        </Route>

                        <Route path="/saved-movies">
                            <SavedMovies/>
                        </Route>

                        <Route path="*">
                            <PageNotFound/>
                        </Route>

                    </Switch>

                    <Footer/>
               


        </div>
    );
}

export default App;
