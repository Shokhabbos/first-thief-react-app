import "./main.css";
import oval from "../../Assets/img/oval.png";
import logo from "../../Assets/img/footerlogo.svg";
import apple from "../../Assets/img/appstore.svg";
import img from "../../Assets/img/attachment.svg";
import google from "../../Assets/img/googleplay.svg";
import avatar from "../../Assets/img/avatar.svg";
import forward from "../../Assets/img/Forward.svg";
import { Link } from "react-router-dom";
import photo from "../../Assets/img/photo.jpg";
import { useEffect } from "react";
const Profile = () => {
  useEffect(() => {
    document.querySelector(".footer").style.display = "none"
  },[])
  return (
   <>
     <div className="big-wrapper">
        <div className="container">
          <div className="money-blok">
            <h3> Здравствуйте Зухриддин Темиров </h3>
            <div className="div">
              <p>Ваш счет: 2 3000 сум</p>
              <div className="confirm">
                Пополнить
          </div>
            </div>
          </div>
          <div className="filter-blok">
            <div className="filter-top" onClick={(e) => {
              if (e.target.matches(".filter-content")) {
                e.target.classList.add("active")
                document.querySelector(".chat-blok").classList.remove("hide")
                document.querySelector(".filter-blok-body").classList.add("hide")
              }
            }}>
              <p className="filter-content" >Объявления </p>
              <p className="filter-content">Сообщения</p>
              <p className="filter-content">Платежи и счёт</p>
              <p className="filter-content">Настройки </p>
              <p className="filter-content">Мой бизнес</p>
            </div>
          </div>
          {/* <!--start of className filter-body> */}
        </div>
     </div>
      <div className="main-wrapper1">
        <div className="filter-blok-body container">
          <div className="filter-blok-body-top">
            <div>
              <p>Фото </p>
              <p>Название</p>
            </div>
            <div>
              <p>Цена</p>
              <p>Дата</p>
              <p>Действие</p>
            </div>
          </div>
          <div className="filter-blok-body-div">
            <header>
              <img className="filter-blok-img" src={oval} alt="img" />
              <p className="filter-blok-text">Срочно нужен программист yii2</p>
              <p className="filter-blok-salary">2 000 000 6 000 000 сум</p>
              <span># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</span>
              <button className="btn-filter confirm">Поднять</button>
              <button className="btn-advetise confirm">Рекламировать</button>
              <button className="btn"></button>
            </header>
            <div className="statistc">
              <p className="active">Статистика</p>
              <span> Просмотры: 195</span>
              <span>Тел.: 200 </span>
              <span> В Избранном: 0</span>
            </div>
          </div>
          <div className="filter-blok-body-div">
            <header>
              <img className="filter-blok-img" src={oval} alt="img" />
              <p className="filter-blok-text">Срочно нужен программист yii2</p>
              <p className="filter-blok-salary">2 000 000 6 000 000 сум</p>
              <span># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</span>
              <button className="btn-filter confirm">Поднять</button>
              <button className="btn-advetise confirm">Рекламировать</button>
              <button className="btn"></button>
            </header>
            <div className="statistc">
              <p className="active">Статистика</p>
              <span> Просмотры: 195</span>
              <span>Тел.: 200 </span>
              <span> В Избранном: 0</span>
            </div>
          </div>
          <div className="filter-blok-body-div">
            <header>
              <img className="filter-blok-img" src={oval} alt="img" />
              <p className="filter-blok-text">Срочно нужен программист yii2</p>
              <p className="filter-blok-salary">2 000 000 6 000 000 сум</p>
              <span># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</span>
              <button className="btn-filter confirm">Поднять</button>
              <button className="btn-advetise confirm">Рекламировать</button>
              <button className="btn"></button>
            </header>
            <div className="statistc">
              <p className="active">Статистика</p>
              <span> Просмотры: 195</span>
              <span>Тел.: 200 </span>
              <span> В Избранном: 0</span>
            </div>
          </div>
          <div className="filter-blok-body-div">
            <header>
              <img className="filter-blok-img" src={oval} alt="img" />
              <p className="filter-blok-text">Срочно нужен программист yii2</p>
              <p className="filter-blok-salary">2 000 000 6 000 000 сум</p>
              <span># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</span>
              <button className="btn-filter confirm">Поднять</button>
              <button className="btn-advetise confirm">Рекламировать</button>
              <button className="btn"></button>
            </header>
            <div className="statistc">
              <p className="active">Статистика</p>
              <span> Просмотры: 195</span>
              <span>Тел.: 200 </span>
              <span> В Избранном: 0</span>
            </div>
          </div>
          <div className="filter-blok-body-div">
            <header>
              <img className="filter-blok-img" src={oval} alt="img" />
              <p className="filter-blok-text">Срочно нужен программист yii2</p>
              <p className="filter-blok-salary">2 000 000 6 000 000 сум</p>
              <span># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</span>
              <button className="btn-filter confirm">Поднять</button>
              <button className="btn-advetise confirm">Рекламировать</button>
              <button className="btn"></button>
            </header>
            <div className="statistc">
              <p className="active">Статистика</p>
              <span> Просмотры: 195</span>
              <span>Тел.: 200 </span>
              <span> В Избранном: 0</span>
            </div>
          </div>
        </div>
        <div className="chat-blok container hide">
          <div className="chat-blok-body">
            <nav>
              <div className="chat-blok-body-left active">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left ">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left ">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left ">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left ">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left ">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left ">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left ">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left ">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
              <div className="chat-blok-body-left ">
                <main>
                  <img src={avatar} alt="img" />
                  <div>
                    <p>Nematulloh Afri</p>
                    <span>Продаётся Samsung 27" Full HD</span>
                  </div>
                </main>
                <aside>
                  <p><img src={img} alt="img" /></p>
                  <span>13 июнь, 10:33</span>
                </aside>
              </div>
            </nav>
            <div className="chat-blok-body-right">
              <div className="chat-blok-body-right-top">
                <div>
                  <img src={avatar} alt="img" />
                  <input className="update-input" type="email" placeholder="contact@jakubwp.com" />
                </div>
                <div>
                  <img src={forward} alt="img" />
                  <aside>
                    <span></span>
                    <span></span>
                    <span></span>
                  </aside>
                </div>
              </div>
              <p>Today, 6:02 AM</p>
              <div className="chat-blok-body-right-middle">
                <div className="top">
                  <img src={photo} alt="img" />
                  <img src={photo} alt="img" />
                  <img src={photo} alt="img" />
                </div>
                <div className="bottom">
                  <input className="update-input" type="email" placeholder="contact@jakubwp.com" />
                  <img src={avatar} alt="img" />
                </div>
              </div>
              <div className="chat-blok-body-right-bottom">
                <p>Hello John, I have no idea what is this message about|</p>
              </div>
              <div className="foot">
                <img src={img} alt="img"/>
                <button className="submit">Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top-wrapper">
        <div className="footer-top container">
          <Link to="./" className="logo-wrapper">
            <img className="logo-img" src={logo} alt="logo" />
            <p className="logo-text">Продай, найди, купивсе что ты пожелаешь </p>
          </Link>
          <p className="footer-top-text">Веб сайт бесплатных обьявлений | на базеимеется 234 944 999   шт обяления</p>
          <div className="market">
            <Link to ="#"> <img src={apple} alt="img" /></Link>
            <Link to ="#"><img src={google} alt="img" /></Link>
          </div>
        </div>
      </div>
      {/* <!-- End of className filter-body> */}

    </>
  )
}
export default Profile;