import { useCallback, useEffect } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
//data
import Data from "../data/projects";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import SubTitle from "../components/SubTitle";
import ClosePage from "../components/ClosePage";

const Projects = () => {
  const slide_count = Data.length;
  const images = Array.from(Array(slide_count).keys());
  // const [windowsWidth, setWindowsWidth] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
    containScroll: "trimSnaps",
    // axis: windowsWidth ? "y" : "x",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
  });
  return (
    <div className="flex-1 px-3 lg:px-0 relative">
      <ClosePage />

      <SubTitle>Projects</SubTitle>

      <div className="flex gap-6 flex-col-reverse sm:gap-0 sm:flex-col">
        <div className="flex justify-center  lg:mb-3 sm:justify-end lg:pr-24">
          <div className="flex">
            <div
              onClick={scrollPrev}
              className="p-3 border border-border hover:bg-hoverBg"
            >
              <GrFormPreviousLink className="text-3xl text-text2" />
            </div>
            <div
              onClick={scrollNext}
              className="p-3 border border-border hover:bg-hoverBg"
            >
              <GrFormNextLink className="text-3xl text-text2" />
            </div>
          </div>
        </div>

        <div className="h-[350px] relative ">
          <div
            className="embla flex absolute inset-0 md:w-[1250px]"
            ref={emblaRef}
          >
            <div className="embla__container">
              {images.map((item) => {
                return (
                  <motion.div
                    whileHover="hover"
                    key={item}
                    className="embla__slide relative overflow-hidden"
                  >
                    <img
                      src={Data[item].hero}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="w-full bg-black/80 flex-1 h-full absolute inset-0 p-3"
                      initial={{ opacity: 0, y: 100 }}
                      variants={{
                        hover: { opacity: 1, y: 0 },
                      }}
                      // animate="initial"
                      // whileHover="hover"
                      transition={{
                        y: { type: "spring", stiffness: 60, damping: 10 },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      <p className="font-semibold text-text text-xl">
                        {Data[item].title}
                      </p>
                      <p className="text-text text-sm mb-6">
                        {Data[item].context}
                      </p>

                      <div className="flex items-center justify-start space-x-3 mb-3">
                        <p className="text-text text-md">Tech Stacks</p>
                        <hr className="border border-text h-[20px]" />
                        {Data[item].techs.map((Item, index) => (
                          <Item key={index} className="text-lg text-text" />
                        ))}
                      </div>

                      <div className="flex items-center justify-start space-x-3">
                        <p className="text-text">Links</p>
                        <hr className="border border-text h-[20px]" />
                        {Data[item].linksIcon.map((Icon, index) => (
                          <a
                            href={Data[item].link[index]}
                            key={index}
                            target="_blank"
                          >
                            <Icon className="text-lg text-text hover:scale-110" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
