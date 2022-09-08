import './Error.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Error(props) {
    const location = useLocation()
    const locationRegistration = location.pathname === '/signup';
    const locationLogin = location.pathname === '/signin';
    const locationProfile = location.pathname === '/profile';

    const [isError, setIsError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    React.useEffect(() => {
        handleErrorRegistration()
    }, [props.errorStatusCode, isError, errorMessage]);


    function handleErrorRegistration() {
        const statusCode = Number(`${props.errorStatusCode}`.slice(8));

        if (locationRegistration) {
            if (statusCode) {
                switch (statusCode) {
                    case 500:
                        setIsError(true);
                        setErrorMessage('При регистрации пользователя произошла ошибка');
                        break;
                    case 409:
                        setIsError(true);
                        setErrorMessage('Пользователь с таким email уже существует');
                        break;
                    case 401:
                        setIsError(true);
                        setErrorMessage('Вы ввели неправильный логин или пароль');
                        break;
                    case 400:
                        setIsError(true);
                        setErrorMessage('При регистрации произошла ошибка. Проверьте корректность введенного email');
                        break;
                    default:
                        setIsError(true);
                        setErrorMessage('Произошла ошибка. Попробуйте немного позже.');
                        break;
                }
            }
        } else if (locationLogin) {
            if (statusCode) {
                switch (statusCode) {
                    case 500:
                        setIsError(true);
                        setErrorMessage('На сервере произошла ошибка');
                        break;
                    case 409:
                        setIsError(true);
                        setErrorMessage('Пользователь с таким email уже существует');
                        break;
                    case 401:
                        setIsError(true);
                        setErrorMessage('Вы ввели неправильный логин или пароль');
                        break;
                    case 400:
                        setIsError(true);
                        setErrorMessage('При регистрации произошла ошибка. Проверьте корректность введенного email');
                        break;
                    default:
                        setIsError(true);
                        setErrorMessage('Произошла ошибка. Попробуйте немного позже.');
                        break;
                }
            }
        } else if (locationProfile) {
            if (statusCode) {
                switch (statusCode) {
                    case 500:
                        setIsError(true);
                        setErrorMessage('При обновлении пользователя произошла ошибка');
                        break;
                    case 409:
                        setIsError(true);
                        setErrorMessage('Пользователь с таким email уже существует');
                        break;
                    case 401:
                        setIsError(true);
                        setErrorMessage('Вы ввели неправильный логин или пароль');
                        break;
                    case 400:
                        setIsError(true);
                        setErrorMessage('При редактировании профиля произошла ошибка. Проверьте имя и email');
                        break;
                    default:
                        setIsError(true);
                        setErrorMessage('Произошла ошибка. Попробуйте немного позже.');
                        break;
                }
            }
        }
    }

    return (
            <span className="error">{props.isSuccessfulRequest ? '' : errorMessage}</span>
    )
}

export default Error;
