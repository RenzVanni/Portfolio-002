import { FaGithub, FaRegStopCircle } from "react-icons/fa";
import homeData from "../data/home";
import { IoPlayCircleOutline } from "react-icons/io5";
import menuData from "../data/menu";
import { Link } from "react-router-dom";
import { favorite, playlist } from "../helpers/spotify-api";
import { useEffect, useRef, useState } from "react";
import Likes from "../data/likes.json";

type Prop = {
  name: string;
  artists: [{ name: string }];
  preview_url: string;
  album: {
    images: [{ url: string }];
  };
};
const Home = () => {
  const [musicData, setMusicData] = useState<Prop>({
    name: "",
    artists: [{ name: "" }],
    preview_url: "",
    album: { images: [{ url: "" }] },
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRefs = useRef<HTMLAudioElement | null>(null);

  const handleMusicPlayer = () => {
    const currentAudio = audioRefs.current;

    if (currentAudio) {
      if (isPlaying) {
        currentAudio.pause();
        setIsPlaying(false);
      } else {
        currentAudio.play();
        setIsPlaying(true);
      }
    }
  };
  useEffect(() => {
    const response = async () => {
      try {
        const data = await favorite();
        setMusicData(data);
      } catch (error) {
        console.log(error);
      }
      console.log(musicData);
    };
    response();
  }, []);

  return (
    <div className="w-full overflow-y-scroll lg:flex lg:flex-1 lg:overflow-y-visible">
      <div className="w-full overflow-y-scroll pb-3 lg:flex-1 lg:flex lg:flex-col lg:overflow-visible">
        <div className="relative mb-6 lg:h-3/4">
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
          <p className="text-text2 text-xl font-semibold mb-3">Likes</p>
          <div className="flex items-center space-x-3 mb-6">
            {Likes.map((item) => (
              <div key={item.id} className="border border-border p-2">
                <p>{item.like}</p>
              </div>
            ))}
          </div>

          <p className="text-text2 text-xl font-semibold mb-3">Favorite</p>
          <div className="h-[100px] flex items-center justify-start space-x-3">
            <div className="w-[100px] h-full">
              <audio ref={audioRefs} src={musicData.preview_url}></audio>
              <img
                src={musicData.album.images[0].url}
                alt="picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 h-full">
              <p className="font-semibold text-lg">{musicData?.name}</p>
              <p className="text-sm">{musicData.artists[0].name}</p>
            </div>
            <div className="h-full flex items-center pr-12">
              {isPlaying ? (
                <FaRegStopCircle
                  onClick={() => handleMusicPlayer()}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <IoPlayCircleOutline
                  onClick={() => handleMusicPlayer()}
                  className="text-2xl cursor-pointer"
                />
              )}
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
