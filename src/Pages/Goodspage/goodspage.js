import Goods from "../../Containers/goods/goods";
import Mask from "../../Assets/img/bitm.jpg";
import Mask3 from "../../Assets/img/bitm1.jpg";
import Mask4 from "../../Assets/img/bitm2.jpg";
import Mask5 from "../../Assets/img/bitm3.jpg";
import Mask6 from "../../Assets/img/bitm4.jpg";
import Mask10 from "../../Assets/img/bitm5.jpg";
import potato from "../../Assets/img/bitm6.jpg";
import techno from "../../Assets/img/techno.jpg";
import three from "../../Assets/img/three.jpg";
import motor from "../../Assets/img/motor.jpg";
import office from "../../Assets/img/office.jpg";
import kokat from "../../Assets/img/kokat.jpg";
import car from "../../Assets/img/Car.jpg";
import { Docontext } from "../../Context";

const Goodspage = () => {
  const {adding1,setAdd} = Docontext()
  function some() {
    setAdd(!adding1)
    window.localStorage.setItem("add",adding1)
  }
  return (
     <div className="card-wrapper container" onClick={ some}>
        <Goods img={Mask} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={car} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={Mask4} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={Mask5} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={Mask10} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={Mask6} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={potato} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={three} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={motor} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={techno} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={office} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <Goods img={kokat} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
          time="Вчера 22:55"
          price="39 000 000 сум"
        />
        <button className="more">Покозать еще</button>
      </div>
  )
}
export default Goodspage;