import './Register.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg'
import Error from '../Error/Error';
import useFormValidation from '../../hooks/useFormValidation';
import React from 'react';

function Register(props) {
    const { values, handleChange, errors, isValid } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        props.handleRegistration({
            name: values.name,
            email: values.email,
            password: values.password
        })
    }

    return (
        <section className="register__page form__page"> 
                <form className="register form" onSubmit={handleSubmit} noValidate>
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
                        type="text"
                        value={values.name || ''}
                        onChange={handleChange}/>
                    <span className="register__error form__error"></span>
                    <p className="register__input-title form__input-title">
                        E-mail
                    </p>
                    <input 
                        name="email" 
                        placeholder="email" 
                        type="email" 
                        className="register__input form__input form__input_blue" 
                        autoComplete="on" 
                        required
                        value={values.email || ''}
                        onChange={handleChange}/>
                    <span className="register__error form__error"></span>
                    <p className="register__input-title form__input-title">Пароль</p>
                    <input 
                        name="password" 
                        placeholder="Пароль" 
                        type="password" 
                        className="register__input form__input form__input_blue" 
                        autoComplete="on" 
                        required
                        value={values.password || ''}
                        onChange={handleChange}/>
                    <span className="register__error form__error"></span>

                    <Error errorStatusCode={props.errorStatusCode} isSuccessfulRequest={props.isSuccessfulRequest}/>

                    <button type="submit" 
                        className={`register__button block__button_m form__button style_hover ${!isValid ? "form__button_disabled" : ""}`}
                        disabled={!isValid}>Зарегистрироваться</button>
                    <p className="register__text form__text">Уже зарегистрированы?
                        <Link className="register__link-input form__link" to="signin">Вход</Link>
                    </p>
                </form>
            </section>
    )
}

export default Register;
