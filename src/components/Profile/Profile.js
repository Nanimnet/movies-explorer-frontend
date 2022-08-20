import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <section className="profile">
        <div className="profile__container block">

            <form className="profile__form">
                <h1 className="profile__title">Привет, Нана!</h1>
                <div className="profile__box">
                    <label className="profile__label" for="name-input">Имя</label>
                    <input 
                        id="name-input" 
                        className="profile__input" 
                        type="text" 
                        name="name" 
                        placeholder="Имя" 
                        required="" 
                        minlength="3" 
                        maxlength="40"
                        value="Имя"/>
                </div>
                <span id="name-input-error" className="profile__error"></span>
                <div className="profile__box">
                    <label className="profile__label" for="email-input">E-mail</label>
                    <input 
                        id="email-input" 
                        className="profile__input" 
                        type="email" 
                        name="email" 
                        placeholder="E-mail" 
                        required="" 
                        pattern="^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$" 
                        value="email"/>
                </div>
                <span id="email-input-error" className="profile__error"></span>
                <div className="profile__link-container">
                    <button className="profile__button style_hover">
                        Редактировать
                    </button>
                    <Link to="/" className="profile__button-logout style_hover" href="/">Выйти из аккаунта</Link>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Profile;