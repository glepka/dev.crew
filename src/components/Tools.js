import figmaLogo from "../images/figma-logo.svg";
import sketchLogo from "../images/sketch-logo.svg";
import vscLogo from "../images/vsc-logo.svg";
import notionLogo from "../images/notion-logo.svg";
import slackLogo from "../images/slack-logo.svg";
import invisionLogo from "../images/invision-logo.svg";

export default function Tools() {
  return (
    <section className="tools">
      <h2 className="tools__title">Most Popular Tools</h2>
      <p className="tools__subtitle">
        Tools for the best Designers and Developers most popularly used in the
        world
      </p>
      <div className="tools__cards">
        <div className="tools__card card">
          <div className="card__gradient"></div>
          <div className="card__header">
            <img
              src={figmaLogo}
              alt="Логотип программы"
              className="card__image"
            />
            <div className="card__title">
              <h4 className="card__name">FIGMA</h4>
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
        <div className="tools__card card">
          <div className="card__gradient"></div>
          <div className="card__header">
            <img
              src={sketchLogo}
              alt="Логотип программы"
              className="card__image"
            />
            <div className="card__title">
              <h4 className="card__name">Sketch</h4>
              <p className="card__subtitle">Trial & Paid</p>
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
        <div className="tools__card card">
          <div className="card__gradient"></div>
          <div className="card__header">
            <img
              src={vscLogo}
              alt="Логотип программы"
              className="card__image"
            />
            <div className="card__title">
              <h4 className="card__name">Visual Studio Code</h4>
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
        <div className="tools__card card">
          <div className="card__gradient"></div>
          <div className="card__header">
            <img
              src={notionLogo}
              alt="Логотип программы"
              className="card__image"
            />
            <div className="card__title">
              <h4 className="card__name">Notion</h4>
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
        <div className="tools__card card">
          <div className="card__gradient"></div>
          <div className="card__header">
            <img
              src={slackLogo}
              alt="Логотип программы"
              className="card__image"
            />
            <div className="card__title">
              <h4 className="card__name">Slack</h4>
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
        <div className="tools__card card">
          <div className="card__gradient"></div>
          <div className="card__header">
            <img
              src={invisionLogo}
              alt="Логотип программы"
              className="card__image"
            />
            <div className="card__title">
              <h4 className="card__name">Invision</h4>
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
      </div>
      <button className="tools__button">Load more</button>
    </section>
  );
}
