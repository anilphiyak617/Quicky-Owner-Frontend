import React from "react";
import InfoCard from "./InfoCard";
import smartphoneIcon from "../public/images/smartphone.png";
import qrCodeIcon from "../public/images/qr-code.png";
import checkoutIcon from "../public/images/shopping-bag.png";
import Image from "next/image";
import bgImage from "../public/images/info-banner.jpeg";

const Info = () => {
  const cardsData = [
    {
      title: "Step",
      img: smartphoneIcon,
      title2: "Download the App ",
      content:
        "If you like your filler text creamy, melty or aged, than Cheese Ipsum is the site for you.",
    },
    {
      title: "Step",
      img: qrCodeIcon,
      title2: "Scan the Product",
      content:
        "If you like your filler text creamy, melty or aged, than Cheese Ipsum is the site for you.",
    },
    {
      title: "Step",
      img: checkoutIcon,
      title2: "Pay and Checkout ",
      content:
        "If you like your filler text creamy, melty or aged, than Cheese Ipsum is the site for you.",
    },
  ];
  return (
    <div className="relative bg-gray-100 py-14   m-auto mt-14  ">
      <h1 className="md:absolute md:left-80  bg-clip-text  text-3xl text-center md:text-3xl lg:text-5xl font-semibold  bg-gradient-to-br from-[#F72585] to-[#3A0CA3] text-transparent  z-20">
        How it works?
      </h1>
      <div className="flex flex-col md:flex-row md:justify-center lg:w-[60vw] m-auto p-6  gap-6 pt-16  ">
        {cardsData.map(({ title, title2, img, content }, i) => (
          <InfoCard
            img={img}
            title={title + ` ${i + 1}`}
            title2={title2}
            content={content}
            key={i}
          />
        ))}
        <div className=" hidden lg:block absolute w-[100%] cursor-pointer rounded-lg  h-[60%] top-0 lg:bg-pink-600 z-0 ">
          <Image
            src={bgImage}
            className="rounded-lg hover:scale-105 transition-all ease-in duration-300 "
            layout="fill"
            objectFit="cover"
            alt="infoImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
