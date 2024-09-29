import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { SiIrobot } from "react-icons/si";
import { SiAboutdotme } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";
import menuData from "./data/menu";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-mobile bg-no-repeat bg-cover bg-center h-screen flex item justify-center relative  z-0 py-10 px-5 lg:bg-website lg:px-28 lg:py-20">
      <div className="absolute inset-0 backdrop-blur-md z-[-1]"></div>

      <div className="bg-background w-full h-full flex flex-1 flex-col lg:flex-row">
        <div className="flex items-center justify-between px-3 py-6 lg:block lg:p-10 lg:space-y-12">
          <SiIrobot />

          <div className="hidden lg:block space-y-12">
            {menuData.map((item) => (
              <div key={item.id}>
                <Link to={item.slug} className="bg-red-300">
                  <item.icon className="text-black text-2xl hover:scale-110 cursor-pointer" />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-3 lg:hidden">
            <div
              className="overflow-hidden"
              style={{ width: showMenu ? "auto" : 0 }}
            >
              <SiAboutdotme className="text-black text-2xl" />
            </div>
            <CiMenuKebab
              onClick={() => setShowMenu((prev) => !prev)}
              className="text-black text-2xl lg:hidden"
            />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default App;
