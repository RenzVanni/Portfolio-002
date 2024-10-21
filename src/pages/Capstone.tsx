import { CgProfile } from "react-icons/cg";
import { GrTopCorner } from "react-icons/gr";
import { GrBottomCorner } from "react-icons/gr";

// data
import Data from "../data/capstone";
import { motion } from "framer-motion";
import {
  capstone_variant1,
  capstone_variant1_Animation,
  capstone_variant2,
  capstone_variant2_Animation,
  capstone_variant3,
  capstone_variant3_Animation,
} from "../animation/capstoneVariant";
import ContextTitle from "../components/ContextTitle";
import ClosePage from "../components/ClosePage";

const Capstone = () => {
  return (
    <div className="w-full overflow-y-scroll lg:flex lg:flex-1 lg:overflow-y-visible">
      <div className="w-full overflow-y-scroll pb-3 lg:flex-1 lg:flex lg:flex-col lg:overflow-visible">
        <motion.div
          variants={capstone_variant1}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={capstone_variant1_Animation}
          className="relative mb-3 w-full h-[300px] md:h-[450px]"
        >
          <div className="bg-capstone bg-center w-full bg-cover bg-no-repeat px-3 py-20 h-full lg:flex-1 shadow-2xl lg:absolute lg:top-[-50px] lg:left-0 lg:right-0"></div>
        </motion.div>

        <motion.div
          variants={capstone_variant3}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={capstone_variant3_Animation}
          className="overflow-y-scroll px-3 lg:px-0"
        >
          <p className="font-bold text-3xl text-text2 mb-3">{Data?.title}</p>
          <p className="text-text2">{Data?.context}</p>
        </motion.div>
      </div>

      <motion.div
        variants={capstone_variant2}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={capstone_variant2_Animation}
        className="bg-background2 p-3 lg:w-1/3 lg:p-0"
      >
        <ClosePage />

        <div className="lg:px-9">
          <ContextTitle>Members</ContextTitle>
          <div className="mb-6">
            {Data.devs.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 mb-2 py-2 relative"
              >
                <GrTopCorner className="text-md text-text2 absolute top-0 left-0" />
                <GrBottomCorner className="text-md text-text2 absolute bottom-0 right-0" />
                {item.image ? (
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={item.image && item.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <CgProfile className="text-[50px] text-text2" />
                )}

                <div>
                  <p className="font-semibold text-text2 text-md">
                    {item?.name}
                  </p>
                  <p className="text-sm text-text2">{item?.role}</p>
                </div>
              </div>
            ))}
          </div>
          <ContextTitle>Tech Stack</ContextTitle>
          <div className="flex space-x-3">
            {Data?.tech?.map((Item, index) => (
              <Item key={index} className="text-2xl text-text2" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Capstone;
