import "./Tech.css";

function Tech() {
  return (
    <section className="tech">
      <div className="tech__container block">
        <h2 className="tech__title">Технологии</h2>

        <div className="tech__subtitle">7 технологий</div>
        <p className="tech__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="tech__tabs">
          <p className="tech__tab">HTML</p>

          <p className="tech__tab">CSS</p>

          <p className="tech__tab">JS</p>

          <p className="tech__tab">React</p>

          <p className="tech__tab">Git</p>

          <p className="tech__tab">Express.js</p>

          <p className="tech__tab">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Tech;
