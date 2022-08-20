import "./Student.css";
import Photo from "../../images/nana.png";
import Arrow from "../../images/arrow.svg";

function Student() {
  return (
    <section className="student">
      <div className="student__container block">
        <h2 className="student__title">Студент</h2>
        <div className="student__info">
          <div className="student__info-description">
            <h3 className="student__name">Нана</h3>
            <p className="student__description">
              Фронтенд-разработчик, 22 года
            </p>
            <p className="student__paragraph">
              Я родилась в Барнауле, переехала в 2016 в Калининград. Люблю
              путешествовать, учиться и работать, увлекаюсь танцами. Год назад
              начала кодить. С 2017 работаю в студии. Прошла на курс, так как
              хочу сильнее углубиться в процесс создания приложений и сайтов,
              чтобы в дальнейшем заниматься этим более осознанно.
            </p>
            <a
              href="https://github.com/Nanimnet"
              target="_blank"
              rel="noreferrer"
              className="student__link block__link style_hover"
            >
              Github
            </a>
          </div>
          <div className="student__info-photo">
            <img alt="студент" className="student-photo__img" src={Photo} />
          </div>
        </div>

        <div className="student-portfolio">
          <h3 className="student-portfolio__title">Портфолио</h3>
          <ul className="student-portfolio__links">
            <li className="student-portfolio__list">
              <a
                className="student-portfolio__link style_hover block__link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Nanimnet"
              >
                <p className="student-portfolio__link-name"> Статичный сайт</p>
                <img
                  alt="стрелка"
                  className="student-portfolio__link-arrow"
                  src={Arrow}
                />
              </a>
            </li>
            <li className="student-portfolio__list">
              <a
                className="student-portfolio__link block__link style_hover"
                target="_blank"
                rel="noreferrer"
                href="https://nanimnet.github.io/russian-travel/"
              >
                <p className="student-portfolio__link-name">Адаптивный сайт</p>
                <img
                  alt="стрелка"
                  className="student-portfolio__link-arrow"
                  src={Arrow}
                />
              </a>
            </li>
            <li className="student-portfolio__list">
              <a
                className="student-portfolio__link style_hover block__link"
                target="_blank"
                rel="noreferrer"
                href="https://nana-mesto.nomoredomains.xyz/"
              >
                <p className="student-portfolio__link-name">
                  Одностраничное приложение
                </p>
                <img
                  alt="стрелка"
                  className="student-portfolio__link-arrow"
                  src={Arrow}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Student;
