import './SearchForm.css';
import Icon from '../../images/icon.svg';

function SearchForm() {
    return (
        <section className="search">
        <div className="search__container block">
            <form className="search__box" noValidate>
                <img className="search__icon" src={Icon} alt="лупа"/>
                <div className="search__box-search">
                    <input id="search" name="search" className="search__input" type="text" placeholder="Фильм"/>
                </div>
                <button className="search__button" type="submit"></button>
            </form>
            <div className="search__box-checkbox">
                <p className="search__checked-title">Короткометражки</p>
                <label className="search__checkbox">
                    <input name="checkbox" className="search__checkbox-input" type="checkbox" disabled=""/>
                    <span className="search__checkbox-slider"></span>
                </label>
            </div>
        </div>
    </section>
    )
}

export default SearchForm;