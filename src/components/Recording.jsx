import React from "react";

function Recording() {
  return (
    <div className="bg-[#282828] ">
      <div className="max-w-[1110px] mx-auto px-2 py-24">
        <div className="border border-white   flex flex-col text-center relative z-0">
          <h2 className="bg-[#282828] px-12 mt-14 lg:absolute -top-[90px] left-[28%] z">
            Запись на дегустацию
          </h2>
          <div className="bg-white h-[1px] w-40 mx-auto my-10"></div>
          <p className="max-w-[539px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
            sit non sit sed fermentum.{" "}
          </p>
          <div className="flex flex-col justify-center items-center gap-7 mt-20 sm:flex-row">
            <input
              type="text"
              placeholder="Имя"
              className="bg-inherit w-[255px] border-b border-white placeholder:text-white"
            />
            <input
              type="phone"
              placeholder="Телефон"
              className="bg-inherit w-[255px] border-b border-white placeholder:text-white"
            />
          </div>
          <input
            type="text"
            placeholder="Бутик на Невском 103"
            className="w-[255px] sm:w-[540px] mx-auto bg-inherit border-b border-white placeholder:text-white mt-10"
          />
          <a
            href="#"
            className="border border-white  mx-auto py-[5px] uppercase mt-[60px] mb-[90px] w-[255px] sm:w-[540px]"
          >
            записаться
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recording;
