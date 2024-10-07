import "./hero.scss";

import cake from "./img/cake.png";
import pie from "./img/pie.png";
import strange_pie from "./img/strange_pie.png";
import whisk from "./img/venchik.png";

import tBtn from "../social_media_svgs/telegram.svg";
import iBtn from "../social_media_svgs/instagram.svg";
import fBtn from "../social_media_svgs/facebook.svg";

const Hero = () => {
  return (
    <div className="heroDiv">
      <div className="heroAuthorsDeserts">
        <h1 className="heroName">Авторські десерти </h1>

        <div className="heroPiesContainer">
          <div className="heroWhiskDiv">
            <img className="whiskImg" src={whisk} alt="" />
          </div>

          <div className="heroCakeDiv">
            <img className="cakeImg" src={cake} alt="" />
            <h4>мусові торти</h4>
          </div>

          <div className="heroStrangePieDiv">
            <img className="strangePieImg" src={strange_pie} alt="" />
            <h4>
              заварні <br /> шу
            </h4>
          </div>

          <div className="heroPieDiv">
            <img className="pieImg" src={pie} alt="" />
            <h4>
              апетитні
              <br />
              тарти
            </h4>
          </div>

          <p className="heroP">
            Виготовляємо десерти під замовлення з любов’ю та користю
          </p>
        </div>

        <div className="heroSocialMedia">
          <button className="heroTelegramBtn">
            <img src={tBtn} alt="" />
          </button>
          <button className="heroFacebookBtn">
            <img src={fBtn} alt="" />
          </button>
          <button className="heroInstagramBtn">
            <img src={iBtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
