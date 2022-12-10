import logo from "../images/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyrights">
        <img src={logo} alt="Логотип Antools" className="footer__logo" />
        <p className="footer__copyright-text">Copyright 2021. Antools</p>
        <p className="footer__copyright-info">
          Antool is a web collection of information on paid or free Design and
          Development tools
        </p>
      </div>
      <div className="footer__info">
        <div className="footer__info-block">
          <h4 className="footer__title">Contact Us</h4>
          <ul className="footer__list">
            <li>
              <a href="" className="footer__link">
                +621987463
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                M Building, No.10 A
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                antools@awesome.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__info-block">
          <h4 className="footer__title">Categories</h4>
          <ul className="footer__list">
            <li>
              <a href="" className="footer__link">
                Categories
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Development
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__info-block">
          <h4 className="footer__title">Company Info</h4>
          <ul className="footer__list">
            <li>
              <a href="" className="footer__link">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Our Partners
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
