import { useEffect, useRef, useState } from "react";
import { IoArrowBackOutline, IoPlayCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HOME } from "../constants/Slugs";
import { playlist } from "../helpers/spotify-api";
import { FaRegStopCircle } from "react-icons/fa";

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
      // console.log(data?.playlist);
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
        <div className="mb-6 hidden lg:block">
          <Link to={HOME}>
            <IoArrowBackOutline className="text-2xl" />
          </Link>
        </div>

        <p className="font-bold text-3xl mb-6">Music</p>
        {playlistData.playlist.map((item, index) => {
          console.log("item ", item);
          return (
            <div key={index} className="border-b-2  border-border pb-3">
              <div className="flex items-center space-x-3 h-[80px]">
                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  src={item?.track.preview_url}
                  loop
                ></audio>
                <div className="h-full">
                  <img
                    src={item?.track?.album?.images[0]?.url}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 h-full overflow-y-scroll">
                  <p className="font-semibold text-lg">{item?.track?.name}</p>
                  <p className="text-sm">{item?.track?.artists[0]?.name}</p>
                </div>
                <div className="pr-6">
                  {isPlaying === index.toString() ? (
                    <FaRegStopCircle
                      onClick={() => handleMusicPlayer(index)}
                      className="text-2xl cursor-pointer"
                    />
                  ) : (
                    <IoPlayCircleOutline
                      onClick={() => handleMusicPlayer(index)}
                      className="text-2xl cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-background2 p-3 lg:flex lg:w-1/3">
        <div className="h-full lg:h-4/5 shadow-2xl mb-6">
          <img
            src={playlistData.cover}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Musics;
