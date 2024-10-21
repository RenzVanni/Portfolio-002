import { motion } from "framer-motion";
import React from "react";
import { subTitle_animation } from "../animation/global";

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.p
      variants={subTitle_animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, x: { type: "spring" } }}
      className="font-bold text-3xl mb-6 text-text2"
    >
      {children}
    </motion.p>
  );
};

export default SubTitle;
