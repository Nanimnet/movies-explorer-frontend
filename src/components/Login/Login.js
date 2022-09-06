import '../Register/Register.css';
import Logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import Error from '../Error/Error'
import useFormValidation from '../../hooks/useFormValidation';
import React from 'react';

function Login(props) {
    const {values, handleChange, errors, isValid } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();

        if (props.isLoading) {
            return;
        }

        if (!values.email || !values.password) {
            return;
        }

        props.handleLogin({
            password: values.password,
            email: values.email,
        });
    }

    return (
        <section className="login__page form__page"> 
                <form className="login form"
                    onSubmit={handleSubmit}>
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
                        autoComplete="on" 
                        required="" 
                        minLength="3"
                        maxLength="40"
                        value={values.email || ''}
                        disabled={props.isLoading}
                        onChange={handleChange}/>
                    
                    <span className="login__error form__error">{errors.email || ''}</span>
                    <p className="login__input-title form__input-title">Пароль</p>
                    <input 
                        name="password" 
                        placeholder="Пароль" 
                        type="password" 
                        className="form__input form__input_blue"
                        autoComplete="on" 
                        value={values.password || ''}
                        onChange={handleChange}
                        disabled={props.isLoading}
                        required/>
                    <span className="login__error form__error">{errors.password || ''}</span>

                    <Error errorStatusCode={props.errorStatusCode} isSuccessfulRequest={props.isSuccessfulRequest}/>
                    <button type="submit" 
                        className={`login__button block__button_m form__button style_hover ${!isValid || props.isLoading ? "form__button_disabled" : ""}`} 
                        disabled={!isValid || props.isLoading}>Войти</button>
                    <p className="login__text form__text">Ещё не зарегистрированы?
                        <Link to="signup" className="login__link-input form__link">Регистрация</Link>
                    </p>
                </form>
            </section>
    )
}

export default Login;
