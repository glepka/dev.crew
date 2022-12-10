import searchIcon from "../images/search-icon.svg";
import introImage from "../images/intro-img.svg";
import facebookIcon from "../images/facebook-icon.svg";
import InstagramIcon from "../images/instagram-icon.svg";
import twitterIcon from "../images/twitter-icon.svg";

export default function Intro() {
  return (
    <section className="intro">
      <h1 className="intro__title">
        Awesome tools for Designer & Developer
        <span className="intro__span">.</span>
      </h1>
      <p className="intro__subtitle">
        Antool is a web collection of information on paid or free Design and
        Development tools
      </p>
      <form className="intro__search input-box">
        <img src={searchIcon} alt="Иконка Поиска" />
        <input
          type="text"
          className="input-box__input"
          placeholder="find more than 430+ tools..."
        />
        <button className="input-box__button">Search</button>
      </form>

      <ul className="intro__socials">
        <li className="intro__social-icon">
          <a href="#">
            <img src={facebookIcon} alt="Иконка Facebook" />
          </a>
        </li>
        <li className="intro__social-icon">
          <a href="#">
            <img src={InstagramIcon} alt="Иконка Instagram" />
          </a>
        </li>
        <li className="intro__social-icon">
          <a href="#">
            <img src={twitterIcon} alt="Иконка Twitter" />
          </a>
        </li>
      </ul>
      <img src={introImage} alt="" className="intro__image" />
    </section>
  );
}
