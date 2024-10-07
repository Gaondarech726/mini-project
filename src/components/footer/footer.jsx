import "./footer.scss";
import logo from "./images/logoGrann 2.png";
import inst from "../socialMediaImg/_Instagram.svg";
import telegram from "../socialMediaImg/telegram.svg";
import viber from "../socialMediaImg/viber.svg"
const Footer = () => {
    return (
        <div className="footer_content">
        <div className="contacts">
            <p>с. Хотів, вул. Партизанська 1А</p>
            <p>Email: kostromaganna@gmail.com</p>
            <p>Tel: +38(099) 987 62 40</p>
        </div>
        <div>
        <img className="logoImg" src={logo} alt="" />
        </div>
        <div>
            <div className="social_medias">
                <img src={inst} alt="inst" /><img src={telegram} alt="telegram" /><img src={viber} alt="viber" />
            </div>
            <p>Політика конфіденційності</p>
            <p>Договір оферти</p>
        </div>

        
        </div>
    );
};

export default Footer;