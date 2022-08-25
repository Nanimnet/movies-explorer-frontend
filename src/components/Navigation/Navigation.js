import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import NavTab from "../NavTab/NavTab";
import React from "react";

function Navigation({ isLogged }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  const location = useLocation();
  return (
    <>
        {isMenuOpen ?  <NavTab isOpen={isMenuOpen} onClose={handleMenuClose}/> : ''}
      {!(location.pathname === "/" && !isLogged) ? (
        <nav className="navigation">
          <Link
            className="navigation__link navigation__link_logged"
            onClick={handleMenuClose}
            to="/movies"
          >
            Фильмы
          </Link>
          <Link
            className="navigation__link navigation__link_logged"
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
