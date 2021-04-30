import logo from "../../Assets/img/headerlogo.svg";
import plus from "../../Assets/img/plus.svg";
import temur from "../../Assets/img/temir.jpg";
import "./main.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Docontext } from "../../Context";

const Header = () => {
  const [index1, setIndex1] = useState(0);
  const [class1, setClass1] = useState(false);
  const [open, setOpen] = useState("");
  const { adding1 } = Docontext();
  function add () {
    setIndex1(index1 + 1);
    if (index1 === 5) {
      setIndex1(0);
    }
  }
  function openDropdown(e) {
    if (e.target.matches(".dropdown-link")) {
      setOpen("computer");
      if (e.target.matches(".special")) {
        setClass1(!class1);
        setOpen("");
      }
    }
  }
  function minus () {
    setIndex1(index1 - 1);
    if (index1 < 0) {
      setIndex1(5);
    }
  }

  useEffect(() => {
    document.documentElement.style.setProperty("--index", index1);
    console.log(index1);
  }, [index1]);
  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <div className="container nav">
          <Link to="/" className="nav-link">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>

          <div className="nav-left">
            {adding1 ? (
              <>
                <div className="nav-left-div">
                  <Link className="header-link" to="/update">
                    {" "}
                    Объявления
                  </Link>
                  <Link className="header-link" to="/">
                    {" "}
                    Магазины{" "}
                  </Link>
                  <Link className="header-link" to="/">
                    {" "}
                    Для бизнеса{" "}
                  </Link>
                  <Link className="header-link" to="/">
                    {" "}
                    Помощь{" "}
                  </Link>
                  <p>Рус</p>
                  <span> | </span>
                  <p>O’z</p>
                </div>

                {window.localStorage.getItem("token") ? (
                  <Link className="profile-link" to="/profile">
                    <p>Темиров</p>
                    <img src={temur} alt="img" />
                  </Link>
                ) : (
                  <Link to="/registr" className="nav-left-div  nav-link">
                    <p> Вход </p> <span> | </span> <p> Регистрация </p>{" "}
                  </Link>
                )}
              </>
            ) : (
              <>
                <div className="nav-left-div">
                  <p>Рус</p>
                  <span> | </span>
                  <p>O’z</p>
                </div>
                {window.localStorage.getItem("token") ? (
                  <Link className="profile-link" to="/profile">
                    <p>Темиров</p>
                    <img src={temur} alt="img" />
                  </Link>
                ) : (
                  <Link to="/registr" className="nav-left-div  nav-link">
                    <p> Вход </p> <span> | </span> <p> Регистрация </p>{" "}
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
        <div className="nav-bottom container">
          <div className="header-left">
            <div className="category">

              <select name="choose-category"  id="choose-category">
                <option value="">Любая категория</option>
                <option value=""> Бизнес категория</option>
                <option value="">Спорт категория</option>
              </select>
             
            </div>
            <div className="search-div">
              <input
                className="search-input"
                type="search"
                placeholder="Что будем искать ?"
              />
              <div
                className="search-category"
                onMouseEnter={() => {
                  document
                    .getElementById("select-region")
                    .classList.add("active");
                }}
                onMouseLeave={() => {
                  document
                    .querySelector("#select-region")
                    .classList.remove("active");
                }}
                onClick={(e) => {
                  if (e.target.matches(".text")) {
                    document.querySelector(".default2").textContent =
                      e.target.textContent;
                  }
                }}
              >
                <p className="default2">По всей Узбекистану</p>
                <div name="select" className="select" id="select-region">
                  <p className="text">Ташкент</p>
                  <p className="text">Фергана</p>
                  <p className="text"> По всей Узбекистану</p>
                </div>
              </div>
              <button className="btn-search">Найти</button>
            </div>
          </div>
          <div className="header-right">
            <span>
              <img className="plus-img" src={plus} alt="plus" />
            </span>
            <p>Добавить обьявления</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
