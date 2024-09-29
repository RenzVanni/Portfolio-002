import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HOME } from "../constants/Slugs";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
//data
import Data from "../data/projects.json";
import { motion, useDragControls } from "framer-motion";

const Projects = () => {
  const [positionHandler, setPositionHandler] = useState(
    Data.map((item, index) => index)
  );

  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setPositionHandler((prev) => {
      const updatePosition = prev.map((prev2) => (prev2 + 1) % Data.length);
      return updatePosition;
    });
  };

  const previous = () => {
    setDirection(0);
    setPositionHandler((prev) => {
      const updatePosition = prev.map(
        (prev2) => (prev2 - 1 + Data.length) % Data.length
      );
      return updatePosition;
    });
  };

  return (
    <div className="flex-1 px-3 lg:pl-6">
      <div className="hidden lg:flex lg:justify-end">
        <div className="w-fit p-6 cursor-pointer hover:bg-hoverBg">
          <Link to={HOME}>
            <IoCloseSharp className="text-3xl" />
          </Link>
        </div>
      </div>

      <p className="font-bold text-3xl mb-6">Projects</p>

      <div className="flex justify-end mb-3 pr-24">
        <div className="flex">
          <div className="p-3 hover:bg-hoverBg">
            <GrFormPreviousLink onClick={next} className="text-3xl" />
          </div>
          <div className="p-3 hover:bg-hoverBg">
            <GrFormNextLink onClick={next} className="text-3xl" />
          </div>
        </div>
      </div>

      <div className=" bg-blue-500 h-[250px] relative">
        <motion.div
          style={{ width: `${Data.length * 450}px` }} // Adjust width based on the number of items
          animate={{ x: direction * -450 }} // Animate based on the direction
          transition={{ type: "spring", ease: "easeInOut", duration: 1 }} // S
          className="bg-red-300 flex space-x-3 absolute inset-0 h-full w-full"
        >
          {positionHandler.map((item) => (
            <motion.img
              key={Data[item]?.id}
              src={Data[item]?.image}
              className="w-[450px] h-full object-cover"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
