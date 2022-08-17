import './Register.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg'

function Register() {
    return (
        <section className="register__page form__page"> 
                <form className="register form">
                    <a href="/">
                        <img className="header__logo" src={Logo} alt="logo"/>
                    </a>
                    <h1 className="register__title form__title">
                        Добро пожаловать!
                    </h1>
                    <p className="register__input-title form__input-title">
                        Имя
                    </p>
                    <input 
                        className="form__input form__input_blue" 
                        name="name" 
                        placeholder="Иван" 
                        required
                        type="text"/>
                    <span className="register__error form__error"></span>
                    <p className="register__input-title form__input-title">
                        E-mail
                    </p>
                    <input 
                        name="email" 
                        placeholder="email" 
                        type="email" 
                        className="register__input form__input form__input_blue" 
                        autocomplete="on" 
                        required/>
                    <span className="register__error form__error"></span>
                    <p className="register__input-title form__input-title">Пароль</p>
                    <input 
                        name="password" 
                        placeholder="Пароль" 
                        type="password" 
                        className="register__input form__input form__input_blue" 
                        autocomplete="on" 
                        required/>
                    <span className="register__error form__error"></span>
                    <button type="submit" className="register__button block__button_m form__button form__button_disabled style_hover" disabled="">Войти</button>
                    <p className="register__text form__text">Уже зарегистрированы?
                        <Link className="register__link-input form__link" to="signin">Регистрация</Link>
                    </p>
                </form>
            </section>
    )
}

export default Register;
