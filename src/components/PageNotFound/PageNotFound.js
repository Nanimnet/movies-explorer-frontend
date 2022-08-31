import "./PageNotFound.css";
import { useHistory } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="error-page">
      <div className="error__content">
        <h1 className="error__title">404</h1>
        <p className="error__paragraph">Страница не найдена</p>

        <button
          onClick={useHistory().goBack}
          className="error__button style_hover"
        >
          Назад
        </button>
      </div>
    </section>
  );
}

export default PageNotFound;
