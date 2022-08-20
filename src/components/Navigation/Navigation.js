import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';

function Navigation({ isLogged }) {
    const location = useLocation()
    return ( 
        <>
{!(location.pathname === '/') ?
( 

<nav className="navigation">
<Link className='navigation__link navigation__link_logged' to="/movies">Фильмы</Link>
<Link className='navigation__link navigation__link_logged' to="/saved-movies">Сохраненные фильмы</Link>
<Link className='navigation__link navigation__link_logged navigation__link_profile' to="/profile">Аккаунт</Link>
<button className="navigation__menu" type="button"></button>
</nav>
 ) : ( 
        <>
            <nav className="navigation navigation_login">
            <Link className='navigation__link' to="/signup">Регистрация</Link>
            <Link className='navigation__link navigation__link_blue' to="/signin">Войти</Link>
        </nav>
            <NavTab/>
        </>
        
        )
}
</>
)
}

export default Navigation;