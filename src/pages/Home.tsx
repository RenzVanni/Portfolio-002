import React from "react";
import { FaGithub } from "react-icons/fa";
import homeData from "../data/home";
import { IoPlayCircleOutline } from "react-icons/io5";
import Others from "../components/Others";
import menuData from "../data/menu";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full overflow-y-scroll lg:flex lg:flex-1 lg:overflow-y-visible">
      <div className="w-full overflow-y-scroll pb-3 lg:flex-1 lg:flex lg:flex-col lg:overflow-visible">
        <div className="relative mb-6 lg:h-4/5">
          <div className="bg-mobile bg-center bg-cover bg-no-repeat px-3 py-20 flex-1 shadow-2xl lg:bg-website lg:absolute lg:top-[-50px] lg:left-0 lg:right-0">
            <p className="text-text text-4xl font-bold">{homeData?.name}</p>

            <p className="text-text text-xl font-semibold mb-3">
              {homeData?.role}
            </p>

            <FaGithub className="text-text text-xl mb-6 cursor-pointer hover:scale-110" />

            <p className="text-text max-w-[450px] mb-20">{homeData?.context}</p>

            <div className="flex flex-wrap items-center justify-start space-x-3">
              <p className="text-text text-sm">Tech Stacks</p>
              <hr className="border-2 h-[15px]" />
              {homeData?.tech.map((Item, index) => {
                return <Item key={index} className="text-text text-xl" />;
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 px-3 overflow-y-scroll">
          <p className="text-text2 text-xl font-semibold mb-3">
            Recommendation
          </p>
          <div className="flex items-center space-x-3 mb-6">
            <div className="border-2 border-border p-2 rounded-lg">
              <p>Music</p>
            </div>
            <div className="border-2 border-border p-2 rounded-lg">
              <p>Text</p>
            </div>
          </div>

          <p className="text-text2 text-xl font-semibold mb-3">Favorite</p>
          <div className="h-[100px] flex items-center justify-start space-x-3">
            <div className="w-[100px] h-full">
              <img
                src="/images/eun.jpeg"
                alt="picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 h-full">
              <p className="font-semibold text-lg">The Truth Is</p>
              <p className="text-sm">Jay Park</p>
            </div>
            <div className="h-full flex items-center pr-12">
              <IoPlayCircleOutline className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background2 p-3 lg:w-1/3 lg:p-9">
        <p className="font-semibold text-xl">Menu</p>
        <div className="grid grid-cols-3 border-none">
          {menuData?.map((item) => {
            if (item.id !== 1) {
              return (
                <Link
                  key={item.id}
                  to={item.slug}
                  className="flex flex-col flex-1 items-center py-6 justify-center hover:bg-border"
                >
                  <item.icon className="text-2xl" />
                  <p className="">{item?.title}</p>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
