import microsoftLogo from "../images/microsoft-logo.svg";
import slackDarkLogo from "../images/slack-dark-logo.svg";
import googleLogo from "../images/google-logo.svg";
import wordpressLogo from "../images/wordpress-logo.svg";

export default function Brands() {
  return (
    <section className="brands">
      <div className="brands__container">
        <div className="brands__gradient"></div>
        <h4 className="brands__title">Trusted more than 150+ brand</h4>
        <div className="brands__logos">
          <img src={microsoftLogo} alt="Логотип Microsoft" />
          <img src={googleLogo} alt="Логотип Google" />
          <img src={slackDarkLogo} alt="Логотип Slack" />
          <img src={wordpressLogo} alt="Логотип Wordpress" />
        </div>
      </div>
    </section>
  );
}
