import './Footer.css';
import { Route } from 'react-router-dom';

function Footer() {
    const endpoints = [
        "/",
        "/movies",
        "/saved-movies"
    ];

    return (
        <Route exact path={endpoints}>
           <footer className="footer">
            <div className="footer__container block">
                <p className="footer__copyright">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__description">
                    <p className="footer__year">© 2020</p>
                    <div className="footer__links">
                        <a className="footer__link block__link" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/web/">
                            Яндекс.Практикум
                        </a>
                        <a className="footer__link block__link" target="_blank" rel="noreferrer" href="https://github.com/yandex-praktikum">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        </Route>
    )
}

export default Footer;
