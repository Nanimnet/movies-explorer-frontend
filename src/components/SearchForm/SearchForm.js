import './SearchForm.css';
import Icon from '../../images/icon.svg';
import useFormValidation from '../../hooks/useFormValidation';
import { useLocation } from 'react-router-dom'
import React from 'react';

function SearchForm(props) {
    const {values, setValues, handleChange, isValid, setIsValid} = useFormValidation();
    const location = useLocation();
    const locationMovies = location.pathname === '/movies';
    const stateCheckBoxMovies = location ? localStorage.getItem('stateCheckbox') === 'true' : false;
    const [checkbox,setCheckBox] = React.useState(stateCheckBoxMovies);
    const [isEmptyRequest, setIsEmptyRequest] = React.useState(false);

    React.useEffect(() => {
        if (localStorage.getItem('query') && localStorage.getItem('stateCheckbox') && locationMovies) {
            const inputSearch = localStorage.getItem('query')
            const checkbox = JSON.parse(localStorage.getItem('stateCheckbox'));
            setValues({search: inputSearch});
            setIsValid(true);
            setCheckBox(checkbox);
        }
    }, [])

    function handleCheckBox() {
        setCheckBox(!checkbox);
        handleSubmitCheckBox();
    }

    function handleSubmitCheckBox() {
        props.onFindMovies(values.search, !checkbox);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!isValid) {
            setIsEmptyRequest(true);
            return;
        } else {
            setIsEmptyRequest(false);
        }
        props.onFindMovies(values.search, checkbox);
    }

    return (
        <section className="search">
            <span id="search-error" className={`search__error ${(isEmptyRequest && !isValid) ? 'search__error_active' : ''}`}>
                Введите слово для поиска </span>

        <div className="search__container block">
            <form className="search__box"
                    onSubmit={(e) => handleSubmit(e)} 
                    noValidate>
                <img className="search__icon" src={Icon} alt="лупа"/>
                <div className="search__box-search">
                    <input 
                        id="search" 
                        name="search" 
                        className="search__input" 
                        type="text" 
                        placeholder="Фильм" 
                        value={values.search || ''}
                        onChange={handleChange}
                        required/>
                </div>
                <button 
                    className="search__button style_hover" 
                    type="submit"
                    disabled={(isEmptyRequest && !isValid) || props.isLoading}>
                </button>
            </form>
            <div className="search__box-checkbox">
                <p className="search__checked-title">Короткометражки</p>
                <label className="search__checkbox">
                    <input 
                        name="checkbox"     
                        className="search__checkbox-input" 
                        type="checkbox" 
                        disabled={!isValid}
                        value={values.checkbox}
                        onChange={handleCheckBox}
                        checked={checkbox}
                        />
                    <span className={`${checkbox ? 'search__checkbox-slider' : 'search__checkbox-slider_checked'}`}></span>
                </label>
            </div>
        </div>
    </section>
    )
}

export default SearchForm;