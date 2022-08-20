import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container block">
        <h1 className="hero__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <div alt="круги" className="hero__img"></div>
      </div>
    </section>
  );
}

export default Hero;
