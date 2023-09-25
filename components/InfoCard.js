import Image from "next/image";
import React from "react";
import { useState } from "react";

const Card = ({ img, title, title2, content }) => {
  const [cardDisplaced, setCardDisplaced] = useState(false);

  return (
    <div
      className="flex flex-col  m-auto lg:m-0  space-y-3 items-center bg-gray-100 rounded-xl p-6  translate-y-10 lg:hover:translate-y-0 transition-transform ease-in-out z-10 shadow-md"

      // onMouseEnter={() => {
      //   setCardDisplaced((state) => !state);
      // }}
      // onMouseLeave={() => setCardDisplaced((state) => !state)}
    >
      {/* TODO:image */}
      <div className="relative h-16 w-16 pd-2 lg:p-8 bg-pink-100 rounded-full lg:h-36 lg:w-48">
        <Image src={img} alt="cardImage" />
        {/* <Image src={img} objectFit="fit" alt="cardImage" /> */}
      </div>
      {/* {TODO:Heading} */}
      <h2 className="text-lg font-semibold">{title}</h2>
      {/* {TODO:Sub Heading} */}
      <h3 className="text-xl tracking-wide font-semibold">{title2}</h3>
      {/* {TODO:info} */}
      <p className=" text-left text-sm ">{content}</p>
    </div>
  );
};

export default Card;
