import Newgoods from "../../Components/newGoods/newGoods";
import map from "../../Assets/img/new1.jpg";
import map0 from "../../Assets/img/new2.jpg";
import map1 from "../../Assets/img/new3.jpg";
import map2 from "../../Assets/img/new4.jpg";
import map3 from "../../Assets/img/new5.jpg";
import map4 from "../../Assets/img/new.jpg";
import map6 from "../../Assets/img/office.jpg";
import kokat from "../../Assets/img/kokat.jpg";
import car from "../../Assets/img/Car.jpg";
import { Docontext } from "../../Context";

const Newgoodspage = () => {
  const {adding1,setAdd} = Docontext()
  function some() {
    setAdd(!adding1)
    window.localStorage.setItem("add",adding1)
  }
  return (
    <div className="card-wrapper container" onClick={some }>
      <Newgoods img={map1} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={map} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={map0} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={map2} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={map3} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={map4} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={map} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={map6} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={car} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={kokat} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={map} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <Newgoods img={kokat} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
        time="Вчера 22:55"
        price="39 000 000 сум"
      />
      <button className="more">Покозать еще</button>
    </div>
  )
}

export default Newgoodspage;
