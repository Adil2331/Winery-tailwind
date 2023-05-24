import React from "react";

export default function About() {
  return (
    <div className="bg-[#282828] ">
      <div className="max-w-[1110px] mx-auto px-2 py-24">
        <div className="border border-white   flex flex-col text-center">
          <h2 className="mt-14">Лучший вкус, это вкус долголетнего вина</h2>
          <div className="bg-white h-[1px] w-40 mx-auto my-10"></div>
          <p className="max-w-[733px] mx-auto px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
            sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris
            dictumst risus pulvinar blandit elit. Vestibulum quam ultrices
            nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet
            rutrum. Lectus auctor purus ultrices enim ultrices. Augue fringilla
            tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque
            viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget
            sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet,
            lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam
            quis.
          </p>
          <img
            src={require("../assets/glass.png")}
            className="w-40 h-40 mx-auto mt-12 mb-16"
            alt="glass"
          />
        </div>
      </div>
    </div>
  );
}
