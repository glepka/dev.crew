import zeplinLogo from "../images/zeplin-logo.svg";
import phpstormLogo from "../images/phpstorm-logo.svg";
import toolboxLogo from "../images/toolbox-logo.svg";
import procreateLogo from "../images/procreate-logo.svg";

export default function Newcomer() {
  return (
    <section className="newcomer">
      <div className="newcomer__container">
        <div className="newcomer__description">
          <h2 className="newcomer__title">Newcomer Tools</h2>
          <p className="newcomer__subtitle">
            Wow! see the latest update of the most recommended tools from
            reliable designers and developers
          </p>
          <button className="newcomer__button">Explore more</button>
        </div>
        <div className="newcomer__cards">
          <div className="card card_type_newcomer">
            <div className="card__gradient"></div>
            <div className="card__header">
              <img
                src={zeplinLogo}
                alt="Логотип программы"
                className="card__image"
              />
              <div className="card__title">
                <h4 className="card__name">Zeplin</h4>
                <p className="card__subtitle">Free & Paid</p>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="card__footer">
              <ul className="card__icons">
                <li className="card__icon card__icon_type_like"></li>
                <li className="card__icon card__icon_type_folder"></li>
              </ul>
              <button className="card__button">Visit</button>
            </div>
          </div>
          <div className="card card_type_newcomer">
            <div className="card__gradient"></div>
            <div className="card__header">
              <img
                src={phpstormLogo}
                alt="Логотип программы"
                className="card__image"
              />
              <div className="card__title">
                <h4 className="card__name">PHPStorm</h4>
                <p className="card__subtitle">Free</p>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="card__footer">
              <ul className="card__icons">
                <li className="card__icon card__icon_type_like"></li>
                <li className="card__icon card__icon_type_folder"></li>
              </ul>
              <button className="card__button">Visit</button>
            </div>
          </div>
          <div className="card card_type_newcomer">
            <div className="card__gradient"></div>
            <div className="card__header">
              <img
                src={toolboxLogo}
                alt="Логотип программы"
                className="card__image"
              />
              <div className="card__title">
                <h4 className="card__name">Toolbox</h4>
                <p className="card__subtitle">Free</p>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="card__footer">
              <ul className="card__icons">
                <li className="card__icon card__icon_type_like"></li>
                <li className="card__icon card__icon_type_folder"></li>
              </ul>
              <button className="card__button">Visit</button>
            </div>
          </div>
          <div className="card card_type_newcomer">
            <div className="card__gradient"></div>
            <div className="card__header">
              <img
                src={procreateLogo}
                alt="Логотип программы"
                className="card__image"
              />
              <div className="card__title">
                <h4 className="card__name">Procreate</h4>
                <p className="card__subtitle">Paid</p>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="card__footer">
              <ul className="card__icons">
                <li className="card__icon card__icon_type_like"></li>
                <li className="card__icon card__icon_type_folder"></li>
              </ul>
              <button className="card__button">Visit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
