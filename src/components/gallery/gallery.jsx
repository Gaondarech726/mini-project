import "./gallery.scss";
import cakeImg from "./images/Rectangle 7.png";
import ShuImg from "./images/Rectangle 14.png";
import miniCakeImg from "./images/Rectangle 15.png";
import pizzaImg from "./images/Rectangle 16.png";

const Gallery = () => {
  return (
    <div>
      <div className="Gallery">
        <div className="choose">
          <img src={cakeImg} alt="" />
          <p>ТОРТИ</p>
          <button className="moreCakes">→</button>
        </div>
        <div className="choose">
          <img src={ShuImg} alt="" />
          <p>ШУ</p>
        </div>
        <div className="choose">
          <img src={miniCakeImg} alt="" />
          <p>ТІСТЕЧКА</p>
        </div>
        <div className="choose">
          <img src={pizzaImg} alt="" />
          <p>ПІЦА</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;