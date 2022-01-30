import React from "react";
import InfoCard from "./InfoCard";
import smartphoneIcon from "../public/images/smartphone.png";
import qrCodeIcon from "../public/images/qr-code.png";
import checkoutIcon from "../public/images/shopping-bag.png";
import Image from "next/image";
import bgImage from "../public/images/info-banner (2).jpg";

const Info = () => {
  const cardsData = [
    {
      title: "STEP",
      img: smartphoneIcon,
      title2: "Download the App ",
      content:
        "lorem ipsum dolor sit amet, consectetur adip lorem ipsum fjdklfjfd",
    },
    {
      title: "STEP",
      img: qrCodeIcon,
      title2: "Scan the Product",
      content:
        "lorem ipsum dolor sit amet, consectetur adip lorem ipsum fjdklfjfd",
    },
    {
      title: "STEP",
      img: checkoutIcon,
      title2: "Download the App ",
      content:
        "lorem ipsum dolor sit amet, consectetur adip lorem ipsum fjdklfjfd",
    },
  ];
  return (
    <div className="relative bg-gray-100 py-14  m-auto  ">
      <h1 className="text-xl text-center md:text-3xl lg:text-4xl font-semibold bg-clip-text bg-gradient-to-br from-[#F72585] to-[#3A0CA3] text-transparent">
        How it works?
      </h1>
      <div className="flex flex-col md:flex-row md:justify-center lg:w-[60vw] m-auto p-6  gap-6 pt-12  ">
        {cardsData.map(({ title, title2, img, content }, i) => (
          <InfoCard
            img={img}
            title={title + ` ${i + 1}`}
            title2={title2}
            content={content}
            key={i}
          />
        ))}
        <div className=" hidden lg:block absolute w-[100%] h-1/3 bottom-0 lg:bg-pink-200 z-0 ">
          {/* <Image src={bgImage} layout="fill" objectFit="cover" /> */}
        </div>
      </div>
    </div>
  );
};

export default Info;
