import '../Register/Register.css';
import Logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <section className="login__page form__page"> 
                <form className="login form">
                    <a href="/">
                        <img className="header__logo" src={Logo} alt="лого"/>
                    </a>
                    <h1 className="login__title form__title">Рады видеть!</h1>
                    <p className="login__input-title form__input-title">E-mail</p>
                    <input 
                        name="email" 
                        placeholder="email" 
                        type="email" 
                        className="form__input form__input_blue"
                        autocomplete="on" 
                        required="" 
                        minLength="3"
                        maxLength="40"/>
                    
                    <span className="login__error form__error"></span>
                    <p className="login__input-title form__input-title">Пароль</p>
                    <input 
                        name="password" 
                        placeholder="Пароль" 
                        type="password" 
                        className="form__input form__input_blue"
                        autocomplete="on" 
                        required/>
                    <span className="login__error form__error"></span>
                    <button type="submit" className="login__button block__button_m form__button form__button_disabled style_hover" disabled="">Войти</button>
                    <p className="login__text form__text">Ещё не зарегистрированы?
                        <Link to="signup" className="login__link-input form__link">Регистрация</Link>
                    </p>
                </form>
            </section>
    )
}

export default Login;
