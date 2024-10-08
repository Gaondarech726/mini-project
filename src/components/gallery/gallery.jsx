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
          <div className="cont">
            <div className="pCont">
              <p>ТОРТИ</p>
            </div>
            <div className="btnCont">
              <button className="moreCakes">→</button>
            </div>
          </div>
        </div>
        <div className="choose">
          <img src={ShuImg} alt="" />
          <div className="cont">
            <div className="pCont">
              <p>ШУ</p>
            </div>
          </div>
        </div>
        <div className="choose">
          <img src={miniCakeImg} alt="" />
          <div className="cont">
            <div className="pCont">
              <p>ТІСТЕЧКА</p>
            </div>
          </div>
        </div>
        <div className="choose">
          <img src={pizzaImg} alt="" />
          <div className="cont">
            <div className="pCont">
              <p>ПІЦА</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
