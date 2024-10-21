import { motion } from "framer-motion";
import React from "react";
import { backArrow_animation } from "../animation/global";

const BackArrow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-6 hidden lg:block">
      <motion.div
        variants={backArrow_animation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, x: { type: "spring", stiffness: 40 } }}
        className="w-fit"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BackArrow;
