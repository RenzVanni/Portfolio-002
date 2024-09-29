import React from "react";
import Others from "../components/Others";
import { IoPlayCircleOutline } from "react-icons/io5";
import homeData from "../data/home";
import { FaGithub } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

// data
import Data from "../data/capstone";
import { Link } from "react-router-dom";
import { HOME } from "../constants/Slugs";

const Capstone = () => {
  return (
    <div className="w-full overflow-y-scroll lg:flex lg:flex-1 lg:overflow-y-visible">
      <div className="w-full overflow-y-scroll pb-3 lg:flex-1 lg:flex lg:flex-col lg:overflow-visible">
        <div className="relative mb-3 h-[300px] md:h-[400px] lg:h-4/5">
          <div className="bg-capstone bg-center  bg-cover bg-no-repeat px-3 py-20 h-full lg:flex-1 shadow-2xl lg:absolute lg:top-[-50px] lg:left-0 lg:right-0"></div>
        </div>

        <div className="overflow-y-scroll px-3 lg:px-0">
          <p className="font-bold text-3xl mb-3">{Data?.title}</p>
          <p>{Data?.context}</p>
        </div>
      </div>

      <div className="bg-background2 p-3 lg:w-1/3 lg:p-0">
        <div className="hidden lg:flex lg:justify-end">
          <div className="w-fit p-6 cursor-pointer hover:bg-hoverBg">
            <Link to={HOME}>
              <IoCloseSharp className="text-3xl" />
            </Link>
          </div>
        </div>
        <div className="lg:px-9">
          <p className="font-semibold text-xl mb-3">Members</p>
          <div className="mb-6">
            {Data.devs.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 h-[50px] mb-3"
              >
                {item.image ? (
                  <div className="w-[50px] h-full rounded-full overflow-hidden">
                    <img
                      src={item.image && item.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <CgProfile className="text-[50px]" />
                )}

                <div>
                  <p className="font-semibold text-md">{item?.name}</p>
                  <p className="text-sm">{item?.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-semibold text-xl mb-3">Tech Stack</p>
          <div className="flex space-x-3">
            {Data?.tech?.map((Item, index) => (
              <Item key={index} className="text-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capstone;
