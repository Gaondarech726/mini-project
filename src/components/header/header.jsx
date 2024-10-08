import "./header.scss";

const Header = () => {
  return (
    <div className="container">
      <p className="katalog">каталог</p>
      <p className="about_me">про мене</p>
      <img src="../../logo_svg/logo.svg" className="Logo" alt="" srcset="" />
      <p className="delivery">доставка</p>
      <p className="kontakt">контакти</p>
      <img src="./Shopping cart.png" className="Shopping" alt="" />
    </div>
  );
};

export default Header;
