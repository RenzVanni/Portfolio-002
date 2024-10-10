import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { HOME } from "../constants/Slugs";
import { Link } from "react-router-dom";

//DATA
import Data from "../data/aboutMe.json";

const AboutMe = () => {
  const [profilePic, setProfilePic] = useState(`/profile/${Data.image[0]}`);

  return (
    <div className="w-full overflow-y-scroll lg:flex lg:flex-1 lg:overflow-y-visible">
      <div className="w-full overflow-y-scroll p-3 lg:flex-1 lg:p-10">
        <div className="mb-6 hidden lg:block">
          <Link to={HOME}>
            <IoArrowBackOutline className="text-2xl" />
          </Link>
        </div>

        <p className="font-bold text-3xl mb-6">About Me</p>

        <p className="font-semibold text-2xl">{Data?.name}</p>
        <p className="mb-6">{Data?.context}</p>

        <p className="font-semibold text-2xl mb-3">Working Experience</p>
        <div className="flex h-[80px] items-center space-x-3">
          <div className="h-full">
            <img
              src={Data?.logo}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="font-semibold text-md">{Data?.role}</p>
              <p className="font-semibold text-sm">{Data?.company}</p>
            </div>

            <p className="text-sm">{Data?.date}</p>
          </div>
        </div>
      </div>

      <div className="p-3 flex flex-col lg:w-1/3 lg:p-0f">
        <div className="h-4/5 shadow-2xl mb-6">
          <img
            src={profilePic}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="font-semibold text-xl mb-3">Profile</p>
        <div className="flex items-center flex-1 overflow-x-scroll">
          <div className="flex-1 flex space-x-3">
            {Data.image.map((item, index) => (
              <div
                key={index}
                className="w-[50px] h-[50px] cursor-pointer hover:scale-110"
                onClick={() => setProfilePic(`/profile/${item}`)}
              >
                <img
                  src={`/profile/${item}`}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
