import './NavTab.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavTab({ isOpen = false, onClose }) {
    const location = useLocation();
    const locationMovies = location.pathname === '/movies';
    const locationSavedMovies = location.pathname === '/saved-movies';
    const locationMain = location.pathname === '/';

    function makeLinkActive(isActive) {
        return isActive ? 'navtab__link navtab__link_active' : 'navtab__link';
    }
return (isOpen &&
        <div className="navtab">
            <ul className="navtab__container">
                <li className="navtab__item"><NavLink onClick={onClose} className={makeLinkActive(locationMain)} to="/">Главная</NavLink></li>
                <li className="navtab__item"><NavLink onClick={onClose} className={makeLinkActive(locationMovies)}  to="/movies">Фильмы</NavLink></li>
                <li className="navtab__item"><NavLink onClick={onClose} className={makeLinkActive(locationSavedMovies)}  to="/saved-movies">Сохранённые фильмы</NavLink></li>
                <li className="navtab__item navtab__item_profile">
                    <NavLink className="navtab__link_profile" to="/profile">Аккаунт</NavLink>
                </li>
                <button className="navtab__close" onClick={onClose}></button>
            </ul>
        </div>)
}

export default NavTab;