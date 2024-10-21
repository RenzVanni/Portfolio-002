import { useEffect, useRef, useState } from "react";
import { IoArrowBackOutline, IoPlayCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HOME } from "../constants/Slugs";
import { playlist } from "../helpers/spotify-api";
import { FaRegStopCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { music_variant1, music_variant2 } from "../animation/musicVariant";
import SubTitle from "../components/SubTitle";
import BackArrow from "../components/BackArrow";

interface Track {
  track: {
    name: string;
    artists: [{ name: string }];
    preview_url: string;
    album: { images: [{ url: string }] };
  };
}
type Prop = {
  playlist: Track[];
  cover: string;
};
const Musics = () => {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [playlistData, setPlaylistData] = useState<Prop>({
    playlist: [],
    cover: "",
  });

  const handleMusicPlayer = (index: number) => {
    const currentAudio = audioRefs.current[index];

    if (currentAudio) {
      if (isPlaying === index.toString()) {
        // If the current track is playing, pause it
        currentAudio.pause();
        setIsPlaying(null);
      } else {
        // Pause any other playing tracks
        audioRefs.current.forEach((audio, i) => {
          if (audio && i !== index) {
            audio.pause();
          }
        });

        // Play the clicked track
        currentAudio.play();
        setIsPlaying(index.toString());
      }
    }
  };
  useEffect(() => {
    const response = async () => {
      const data = await playlist();
      setPlaylistData({
        playlist: data?.playlist,
        cover: data?.coverImage?.url,
      });
    };
    response();
  }, []);
  return (
    <div className="w-full overflow-y-scroll flex flex-col-reverse lg:flex-row lg:flex-1 lg:overflow-y-hidden">
      <div className="w-full p-3 lg:flex-1 lg:p-10 lg:overflow-y-scroll">
        <BackArrow>
          <Link to={HOME}>
            <IoArrowBackOutline className="text-2xl text-menu" />
          </Link>
        </BackArrow>

        <SubTitle>Music</SubTitle>

        {playlistData?.playlist?.map((item, index) => {
          return (
            <motion.div
              variants={music_variant1}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={index}
              key={index}
              className="shadow-sm mb-3"
            >
              <div className="flex items-center h-[80px]">
                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  src={item?.track.preview_url}
                  loop
                ></audio>
                <div className="h-full mr-3">
                  <img
                    src={item?.track?.album?.images[0]?.url}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 h-full overflow-y-scroll">
                  <p className="font-semibold text-lg text-text2">
                    {item?.track?.name}
                  </p>
                  <p className="text-sm text-text2">
                    {item?.track?.artists[0]?.name}
                  </p>
                </div>
                <div className="pr-6">
                  {isPlaying === index.toString() ? (
                    <FaRegStopCircle
                      onClick={() => handleMusicPlayer(index)}
                      className="text-2xl text-play cursor-pointer"
                    />
                  ) : (
                    <IoPlayCircleOutline
                      onClick={() => handleMusicPlayer(index)}
                      className="text-2xl text-play cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-background2 p-3 lg:flex lg:w-1/3">
        <motion.div
          variants={music_variant2}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-full lg:h-4/5 shadow-2xl mb-6"
        >
          <img
            src={playlistData.cover}
            alt="img"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Musics;
