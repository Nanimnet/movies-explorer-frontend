import "./Profile.css";
import React from "react";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
import useFormValidation from "../../hooks/useFormValidation";
import CurrentUserContext from "../../context/CurrentUserContext";

function Profile(props) {
  const {
    values,
    setValues,
    handleChange,
    isValid,
    setIsValid,
    errors
  } = useFormValidation();
  const currentUser = React.useContext(CurrentUserContext);

  const [isInputActive, setIsInputActive] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser]);

  React.useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isValid, currentUser, values, props.isSuccessfulRequest]);

  React.useEffect(() => {
    if (props.errorStatusCode) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isValid, currentUser, values, props.isSuccessfulRequest]);

  function handleEditProfile() {
    setIsInputActive(true);
  }

  function handleSubmit(e) {

    if (props.isLoading) {
      return;
    }

    e.preventDefault();

    props.onUpdateUserInfo(values.name, values.email);
    if (!props.isSuccessfulRequest) {
      setIsInputActive(false);
    } else {
      setIsInputActive(true);
    }
  }

  function handleChangeUpdateUser(e) {
    handleChange(e);
  }

  return (
    <section className="profile">
      <div className="profile__container block">
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <h1 className="profile__title">{`Привет,${currentUser.name}!`}</h1>
          <div className="profile__box">
            <label className="profile__label" htmlFor="name-input">
              Имя
            </label>
            <input
              id="name-input"
              className="profile__input"
              type="text"
              name="name"
              placeholder="Имя"
              required=""
              minLength="3"
              maxLength="40"
              value={values.name || ""}
              onChange={handleChangeUpdateUser}
              disabled={!isInputActive || props.isLoading}
            />
          </div>
          <span id="name-input-error" className="profile__error">
            {errors.name || ""}
          </span>
          <div className="profile__box">
            <label className="profile__label" htmlFor="email-input">
              E-mail
            </label>
            <input
              id="email-input"
              className="profile__input"
              type="email"
              name="email"
              placeholder="E-mail"
              required=""
              pattern="^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$"
              value={values.email || ""}
              onChange={handleChangeUpdateUser}
              disabled={!isInputActive || props.isLoading}
            />
          </div>
          <span id="email-input-error" className="profile__error">
            {errors.email || ""}
          </span>

          {!isInputActive ? (
            <>
              <span className="error">
                {props.isSuccessfulRequest ? "Имя и email изменены!" : ""}
              </span>
              <div className="profile__link-container">
                <button
                  className="profile__button style_hover"
                  onClick={handleEditProfile}
                >
                  Редактировать
                </button>
                <Link
                  to="/"
                  className="profile__button-logout style_hover"
                  onClick={props.logout}
                >
                  Выйти из аккаунта
                </Link>
              </div>
            </>
          ) : (
            <div className="profile__link-container">
              <Error errorStatusCode={props.isSuccessfulRequest} isSuccessfulRequest={props.isSuccessfulRequest} />
              <button
                className={`profile__button style_hover ${!isValid || props.isLoading ? 'profile__button_disabled' : ''}`}
                disabled={!isValid || props.isLoading}
                type="submit">
                Сохранить
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Profile;
