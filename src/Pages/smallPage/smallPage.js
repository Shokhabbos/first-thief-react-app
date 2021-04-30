import first from "../../Assets/img/first.jpg";
import second from "../../Assets/img/second.jpg";
import third from "../../Assets/img/third.jpg";
import four from "../../Assets/img/four.jpg";
import five from "../../Assets/img/five.jpg";
import six from "../../Assets/img/six.jpg";
const smallpage = (a) => {
  switch (a) {
    case "first":
      return (
        <div className="small-link">
          <div className="card">
            <img className="card-img" src={first} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={second} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={third} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={four} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
        </div>
      );
      break;
    case "second":
      return (
        <div className="small-link">
          <div className="card">
            <img className="card-img" src={third} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={six} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={five} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={first} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
        </div>
      );
      break;
    default:
      return (
        <div className="small-link">
          <div className="card">
            <img className="card-img" src={five} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={second} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={third} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={six} alt="img" />
            <div className="card-bottom">
              <div className="card-title">
                Кровать с закроватным модулем+ матрас Вита 160
              </div>
              <div className="card-time">Вчера 22:55</div>
              <div className="card-text">39 000 000 сум</div>
            </div>
          </div>
        </div>
      );
      break;
  }
};
export default smallpage;
