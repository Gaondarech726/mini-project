import "./hero.scss";

const Hero = () => {
  return (
    <div className="heroHeader">
      <div className="heroAuthorsDeserts">
        <h1 className="heroName">Авторські десерти </h1>

        <div className="heroPiesContainer">
          <div className="heroWhiskDiv">
            <img src="/public/img/hero/venchik.png" alt="" />
          </div>

          <div className="heroCakeDiv">
            <img src="/public/img/hero/cake.png" alt="" />
            <h4>мусові торти</h4>
          </div>

          <div className="heroStrangePieDiv">
            <img src="/public/img/hero/strange_pie.png" alt="" />
            <h4>заварні шу</h4>
          </div>

          <div className="heroPieDiv">
            <img src="/public/img/hero/pie.png" alt="" />
            <h4>апетитні тарти</h4>
          </div>

          <div className="heroPDiv">
            <p className="heroP">
              Виготовляємо десерти під замовлення з любов’ю та користю
            </p>
          </div>
        </div>

        <div className="heroSocialMedia">
          <button className="heroTelegramBtn">T</button>
          <button className="heroFacebookBtn">F</button>
          <button className="heroInstagramBtn">I</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
