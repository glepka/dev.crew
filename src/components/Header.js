import logo from "../images/logo.svg";
import arrow from "../images/arrow-down.svg";

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src={logo} alt="Логотип" />
      </a>
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <a href="#" className="header__link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Categories
              <img src={arrow} alt="Стрелочка вниз" className="header__arrow" />
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              My Collections
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__buttons">
        <button className="header__login-btn">Login</button>
        <button className="header__sing-up-btn">Sign Up</button>
      </div>
    </header>
  );
}
