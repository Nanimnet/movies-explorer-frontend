import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import NavTab from "../NavTab/NavTab";
import React from "react";

function Navigation({ loggedIn }) {
  const location = useLocation();
  const locationMovies = location.pathname === '/movies';
  const locationSavedMovies = location.pathname === '/saved-movies';
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  function makeLinkActive(isActive) {
    return isActive 
    ? 'navigation__link navigation__link_logged navigation__link_active' 
    : 'navigation__link navigation__link_logged';
}

  return (
    <>
        {isMenuOpen ?  <NavTab isOpen={isMenuOpen} onClose={handleMenuClose}/> : ''}
      {!(location.pathname === "/" && !loggedIn) ? (
        <nav className="navigation">
          <Link
            className={makeLinkActive(locationMovies)}
            onClick={handleMenuClose}
            to="/movies"
          >
            Фильмы
          </Link>
          <Link
            className={makeLinkActive(locationSavedMovies)}
            onClick={handleMenuClose}
            to="/saved-movies"
          >
            Сохраненные фильмы
          </Link>
          <Link
            className="navigation__link navigation__link_logged navigation__link_profile"
            onClick={handleMenuClose}
            to="/profile"
          >
            Аккаунт
          </Link>
          <button
            className="navigation__menu"
            onClick={handleMenuOpen}
            type="button"
          ></button>
          
         
        </nav>
      ) : (
        <>
          <nav className="navigation navigation_login">
            <Link className="navigation__link" to="/signup">
              Регистрация
            </Link>
            <Link
              className="navigation__link navigation__link_blue"
              to="/signin"
            >
              Войти
            </Link>
          </nav>
        </>
      )}
    </>
  );
}

export default Navigation;
