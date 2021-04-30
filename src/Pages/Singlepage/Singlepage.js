import "./main.css";
import part1 from "../../Assets/img/part1.jpg";
import part2 from "../../Assets/img/part2.jpg";
import part3 from "../../Assets/img/part3.jpg";
import part4 from "../../Assets/img/part4.jpg";
import part5 from "../../Assets/img/part5.jpg";
import house from "../../Assets/img/house.jpg";
import Slider from "../../Containers/Slider/Slider";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
const Singlepage = () => {

  const [number,setNumber] = useState(false)
  const [number1, setNumber1] = useState(false)
  const [index, setIndex] = useState(false)
  const [img,setImg] = useState(house)
  useEffect(() => {
    document.documentElement.style.setProperty("--index1", index)
    console.log(index);
  }, [index])
  function remove2() {
    setIndex(index - 1)
    if (index === -4) {
      setIndex(0)
    }

  }
  function minus1() {
    setIndex(index - 1)
    if (index < -3) {
      setIndex(0)
    }
  }
  return (
    <>


    <div className="building container">
      <div className="links">
        <Link to="./" className="nest-link">Объявления   /</Link>
        <Link to="./" className="nest-link">Ташкент Недвижимость   /</Link>
        <Link to="./" className="nest-link">Ташкент Квартиры   /</Link>
        <Link to="./" className="nest-link">Ташкент Продажа   /</Link>
        <Link to="./" className="nest-link">Новостройки Ташкент</Link>
      </div>
      <div className="building-card">
        <h2 className="building-card-title">Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5</h2>
       <div className="building-card-inner">
          <div className="building-card-left">
          <div className="img-div">
            <img onClick={() => setImg(part1)} className="building-card-img " src={part1} alt="img" />
            <img onClick={() => setImg(part2)} className="building-card-img " src={part2} alt="img" />
            <img onClick={() => setImg(part3)} className="building-card-img " src={part3} alt="img" />
            <img onClick={() => setImg(part4)} className="building-card-img " src={part4} alt="img" />
            <img onClick={() => setImg(part5)} className="building-card-img " src={part5} alt="img" />
          </div>

          <div className="building-card-img-wrapper">
            <img className="building-card-img big-img" src={img} alt="img" />
          </div>
        </div>
        <div className="building-card-right">
          <div className="date">
            <p>Артикул: 4418970 </p>
            <p>обновлено: 28.04.17 добавлено: 28.04.17</p>
          </div>
          <div className="info">
            <div className="info-price">70 000 у.е.</div>
            <div className="address">Ташкент, Ташкентская область, Юнусабадский район </div>
            <div className="number">99891 166
            <span className={`${number1 ? "open1" : ""}`}>
                {number1 ? 1415 : "****"}
            </span>
              <p onClick={() => setNumber1(!number1)}>Покозать польностю</p></div>
            <br/>
              <div className="number">99891 166 <span className={`${number ?"open1" :""}`}>{number ? 2256 : "****"}</span><p onClick={() => setNumber(!number)}>Покозать польностю</p></div>
              <div className="owner"><span>Автор обьявлении: </span><p>Зухриддин Темиров</p></div>
            <div className="write-blok">
              <button className="write-btn">Написать автору</button>
              <button className="write-btn">Предложить свою цену</button>
            </div>
          </div>
          <div className="table">
            <div className="table-div">
              <div>
                <span>Количество комнат:</span>
                <p>6</p>
              </div>
              <div>
                <span>Общая площадь:</span>
                <p>40 м2</p>
              </div>
              <div>
                <span>Этаж:</span>
                <p>32</p>
              </div>
            </div>
            <div className="table-div">
              <div>
                <span>Этажность дома:</span>
                <p>6</p>
              </div>
              <div>
                <span>Состояние квартиры:</span>
                <p>Первая сдача </p>
              </div>
              <div>
                <span>Этаж:</span>
                <p>32</p>
              </div>
            </div>
            <div className="table-div">
              <div>
                <span>Планировка</span>
                <p className="blue-text">Раздельная</p>
              </div>
              <div>
                <span>Год постройки/сдачи</span>
                  <p className="blue-text">Сдача в 2017</p>
              </div>
              <div>
                <span>Ремонт</span>
                <p>Авторский проект</p>
              </div>
            </div>
            <div className="table-div">
              <div>
                <span>Санузел</span>
                  <p className="blue-text">2 санузла и более</p>
              </div>
              <div>
                <span>Меблирована</span>
                  <p className="blue-text">Да </p>
              </div>
              <div>
                <span>Высота потолков</span>
                <p>32</p>
              </div>
            </div>
            <div className="table-text">
              <span>Рядом есть</span>
              <p>Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе	</p>
            </div>
            <div className="table-content">
              Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый.
              <br/>
              Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.
            </div>
            <div className="watch-info">
              <p>Просмотры:10958</p>
              <p>Пожаловатся</p>
            </div>
          </div>
        </div>
       </div>
      </div>


    </div>
      <div className="big-slider ">
        <Slider />
        <button className="prev1" onClick={minus1}>prev</button>
        <button className="next1" onClick={remove2}>next</button>
      </div>
    </>
  )
}
export default Singlepage;