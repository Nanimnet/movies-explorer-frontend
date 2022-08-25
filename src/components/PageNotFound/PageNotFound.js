import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <section className="error-page">
                <div className="error__content">
                    <h1 className="error__title">
                        404
                    </h1>
                    <p className="error__paragraph">
                        Страница не найдена
                    </p>

                    <Link to="/" className="error__button style_hover">
                        Назад
                    </Link>
                </div>
                    
            </section>
    )
}

export default PageNotFound;
