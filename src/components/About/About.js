import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container block">
        <h2 className="about__title">О проекте</h2>

        <div className="about__diploma-info">
          <div className="about__diploma">
            <h3 className="about__diploma-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__diploma">
            <h3 className="about__diploma-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__time">
          <div className="about__time-active">
            <p className="about__time-paragraph about__time-paragraph_white">
              1 неделя
            </p>
            <p className="about__time-description">Back-end</p>
          </div>
          <div className="about__time-unactive">
            <p className="about__time-paragraph about__time-paragraph_black">
              4 недели
            </p>
            <p className="about__time-description">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
