import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { useLocation, Route } from 'react-router-dom';

function Header(props) {
  const endpoints = ["/", "/profile", "/movies", "/saved-movies"];

  const location = useLocation();
    return ( 
    <Route exact path={endpoints}>
    <header
      className={`header ${
        location.pathname === "/" ? "" : "header_white"
      }`}
    >
      <div className={`header__container ${
        location.pathname === "/" ? "" : "navigation_logged"
      }`}>
      <Logo />
      <Navigation loggedIn={props.loggedIn}/>
      </div>
    </header>
  </Route>
  )
}

export default Header;