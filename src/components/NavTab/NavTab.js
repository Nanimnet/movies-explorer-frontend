import './NavTab.css';
import { NavLink } from 'react-router-dom';

function NavTab() {
return (
        <div className="navtab">
            <ul className="navtab__container">
                <li className="navtab__item"><NavLink to="/">Главная</NavLink></li>
                <li className="navtab__item"><NavLink to="/movies">Фильмы</NavLink></li>
                <li className="navtab__item"><NavLink to="/saved-movies">Сохранённые фильмы</NavLink></li>
                <li className="navtab__item navtab__item_profile">
                    <NavLink to="/profile">Аккаунт</NavLink>
                </li>
                <button className="navtab__close"></button>
            </ul>
        </div>)
}

export default NavTab;