import { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { SiIrobot } from "react-icons/si";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import menuData from "./data/menu";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const spotifyToken = async () => {
      const queryParams = new URLSearchParams(location.search);
      const accessToken = queryParams.get("access_token");
      // const refreshToken = queryParams.get("refresh_token");

      if (!accessToken) {
        window.location.href = import.meta.env.VITE_BACKEND;
      } else {
        localStorage.setItem("access_token", accessToken);
        navigate("/Home");
        console.log("User is already authenticated.");
      }
    };

    spotifyToken();
  }, []);
  return (
    <div className="min-w-[300px] overflow-hidden bg-mobile bg-no-repeat bg-cover bg-center h-screen flex item justify-center relative  z-0 py-10 px-5 lg:bg-website lg:px-28 lg:py-20">
      <div className="absolute inset-0 backdrop-blur-md z-[-1]"></div>

      <div className="bg-background w-full h-full flex flex-1 flex-col lg:flex-row">
        <div className="flex items-center justify-between px-3 py-6 lg:block lg:p-10 lg:space-y-12">
          <SiIrobot />

          <div className="hidden lg:block space-y-12">
            {menuData.map((item) => (
              <div key={item.id}>
                <Link to={item.slug}>
                  <item.icon className="text-black text-2xl hover:scale-110 cursor-pointer" />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-3 lg:hidden">
            <div
              className="overflow-hidden flex space-x-6"
              style={{ width: showMenu ? "auto" : 0 }}
            >
              {menuData.map((item) => (
                <div key={item.id}>
                  <Link to={item.slug}>
                    <item.icon className="text-black text-2xl hover:scale-110 cursor-pointer" />
                  </Link>
                </div>
              ))}
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
