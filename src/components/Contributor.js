export default function Contributor() {
  return (
    <section className="contributor">
      <div className="contributor__container">
        <h2 className="contributor__title">Become a contributor?</h2>
        <p className="contributor__subtitle">
          Join us and get tips & tricks to become a great Designer and Developer
        </p>
        <form className="intro__search input-box">
          <input
            type="email"
            className="input-box__input"
            placeholder="Enter your email..."
          />
          <button className="input-box__button">Search</button>
        </form>
      </div>
    </section>
  );
}
