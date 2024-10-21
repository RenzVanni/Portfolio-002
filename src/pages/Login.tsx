import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME } from "../constants/Slugs";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const spotifyToken = async () => {
      const queryParams = new URLSearchParams(location.search);
      const accessToken = queryParams.get("access_token");
      const refreshToken = queryParams.get("refresh_token");

      if (!accessToken || !refreshToken) {
        window.location.href = import.meta.env.VITE_BACKEND;
      } else {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        navigate(HOME);
      }
    };

    spotifyToken();
  }, []);
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black/90">
      <p className="text-white text-xl">
        This was supposed to redirect you to spotify login page!
      </p>
    </div>
  );
};

export default Login;
