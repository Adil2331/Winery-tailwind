import bgc from "../assets/bgc.png";

function Header() {
  return (
    <div style={{ backgroundImage: `url("${bgc}")`, height: "100vh" }}>
      <div
        className="max-w-[1110px] mx-auto px-2"
        // style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 5px" }}
      >
        <div className="flex justify-between pt-7">
          <p>Новокузнечный переулок 4/1</p>
          <a href="#">8 (812) 123-45-67</a>
        </div>
        <ul className="flex justify-center mt-5 ">
          <li className="w-64 py-3 border border-white flex justify-center border-l-0">
            <a href="#">Каталог</a>
          </li>
          <li className="w-72 py-3 border border-white flex justify-center">
            <a href="#">Доставка</a>
          </li>
          <li className="w-72 py-3 border border-white flex justify-center">
            <a href="#">Коллекции</a>
          </li>
          <li className="w-64 py-3 border border-white flex justify-center border-r-0">
            <a href="#">Контакты</a>
          </li>
        </ul>
        <div className="mt-[70%] flex justify-center gap-7  md:mt-[45%]">
          <a className="px-2 py-4 bg-[#998431] uppercase sm:px-8" href="#">
            винная карта
          </a>
          <a className="px-2 py-4 bg-[#998431] uppercase sm:px-8" href="#">
            дегустация
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
