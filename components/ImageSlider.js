import React from "react";
import Reviewcard from "./ReviewCard";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import { Transition } from "@headlessui/react";
// import { FiChevronRight } from "react-icons/fi";
// import { FiChevronLeft } from "react-icons/fi";

const Imagecorousel = () => {
  const usersReviews = [
    {
      content:
        "Quicky delivery fleet saves considerable effort on our part resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand on Quicky",
      img: "/../public/images/user-1.jpg",
      ownerName: "Alexis Stephan",
      address: "Mumbai , Maharastra",
    },
    {
      content:
        "Quicky delivery fleet saves considerable effort on our part resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand on Quicky",
      img: "/../public/images/user-2.jpg",
      ownerName: "Manish Sushodia",
      address: "New Delhi , India",
    },
    {
      content:
        "Quicky delivery fleet saves considerable effort on our part resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand on Quicky",
      img: "/../public/images/user-3.jpg",
      ownerName: "Subhankar Gosh",
      address: "Goa , India",
    },
  ];
  const length = usersReviews.length;

  return (
    <>
      <div className="hidden md:block">
        <Carousel className="md:flex  md:w-[100vw]  lg:py-8 lg:p-16  ">
          {usersReviews.map((item, i) => (
            <Reviewcard
              {...item}
              key={i}
              enableAutoPlay={true}
              autoPlaySpeed={200}
            />
          ))}
        </Carousel>
      </div>
      <div className="flex m-auto w-[90vw] overflow-scroll gap-3   p-4 py-8 md:hidden">
        {usersReviews.map((item, i) => (
          <Reviewcard
            {...item}
            index={i}
            key={i}
            enableAutoPlay={true}
            autoPlaySpeed={200}
          />
        ))}
      </div>
    </>
  );
};
export default Imagecorousel;
