import React from "react";

function Collection() {
  return (
    <div className="bg-[#E6E3C4]  text-black">
      <div className="max-w-[1110px] mx-auto px-2 py-20">
        <div className="bg-[#998431] h-[1px] w-full "></div>
        <div className="flex flex-col items-center mb-16 lg:justify-between lg:flex-row">
          <div className="flex flex-col gap-8">
            <h4 className="mt-16 ">Новинки коллекций</h4>
            <h2 className="w-[298px]">Март 1980 Урожай Марселя</h2>
            <div className="bg-black h-[1px] w-40 "></div>
            <p className="max-w-[445px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
              sit non sit sed fermentum. Felis adipiscing morbi sodales ac.{" "}
            </p>
            <table className="flex">
              <tr className=" flex flex-col">
                <td className="p-[25px]">1980</td>
                <td className="border-y border-black p-[25px]">1980</td>
                <td className="p-[25px]">1980</td>
              </tr>
              <tr className=" flex flex-col border-l border-black">
                <td className="pl-[30px] py-[11.5px]">
                  <h3>Colli Euganei Bianco Ca' Lustra 1980</h3>
                  <p>Красочная бутылка вина из Марселя</p>
                </td>
                <td className="border-y border-black pl-[30px] py-[11.5px]">
                  <h3>Colli Euganei Bianco Ca' Lustra 1980</h3>
                  <p>Красочная бутылка вина из Марселя</p>
                </td>
                <td className="pl-[30px] py-[11.5px]">
                  <h3>Colli Euganei Bianco Ca' Lustra 1980</h3>
                  <p>Красочная бутылка вина из Марселя</p>
                </td>
              </tr>
            </table>
            <p className="max-w-[445px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
              sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
            </p>
            <a
              href="#"
              className="uppercase px-8 py-4 bg-[#998431] w-[250px]  text-white"
            >
              узнать подробнее
            </a>
          </div>
          <div className="hidden sm:flex flex-col mt-16">
            <img
              src={require("../assets/img-1.png")}
              alt="img-1"
              className="bg-cover"
            />
            <div className="flex justify-between mt-7">
              <img src={require("../assets/img-2.png")} alt="" />
              <img src={require("../assets/img-2.png")} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#998431] h-[1px] w-full "></div>
      </div>
    </div>
  );
}

export default Collection;
