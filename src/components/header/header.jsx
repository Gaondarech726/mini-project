import "./header.scss";
import cart from "./img/cart.png";
import logo from "./img/logoGrann 1.png";
import menu from "./img/menu.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-main-container">
        <a className="katalog">каталог</a>
        <a className="about_me">про мене</a>
      </div>

      <img className="logoImg" src={logo} alt="" />

      <div className="header-main-container2">
        <a className="delivery">доставка</a>
        <a className="kontakt">контакти</a>
        <div className="header-main-btn-container">
          <button className="shopping-cart" src={cart}></button>
          <button className="burger-menu" src={menu}></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
