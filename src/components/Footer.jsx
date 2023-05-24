import React from "react";

export default function () {
  return (
    <div className="bg-[#998431]">
      <div className="max-w-[1110px] mx-auto px-2 py-[50px] ">
        <ul className="flex justify-around py-[20px] border-y border-white flex-col items-center md:flex-row">
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Каталог </a>
          </li>
          <li>
            <a href="#">Поставщики</a>
          </li>
          <li>
            <a href="#">Коллекции</a>
          </li>
          <li>
            <a href="#">Дегустация</a>
          </li>
          <li>
            <a href="#">Коллекция 2020</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <ul className="flex justify-around py-[20px] border-b border-white items-center flex-col md:flex-row">
          <li>
            <a href="#">винный бутик LE CORTE</a>
          </li>
          <li>
            <a href="#">8 (812) 123-45-67</a>
          </li>
          <li className="flex items-center gap-9">
            <a href="#">
              <img src={require("../assets/youtube.png")} alt="" />
            </a>
            <a href="#">
              <img src={require("../assets/vk.png")} alt="" />
            </a>
            <a href="#">
              <img src={require("../assets/facebook.png")} alt="" />
            </a>
          </li>
          <li>
            <a href="#">© le-corte.ru</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
