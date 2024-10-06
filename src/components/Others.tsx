// import React from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menu";

const Others = () => {
  return (
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
  );
};

export default Others;
