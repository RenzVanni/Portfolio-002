export const music_variant1 = {
  initial: { opacity: 0, x: -100 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.3,
      type: "spring",
      stiffness: 50,
    },
  }),
  exit: { opacity: 1, x: -100 },
};

export const music_variant2 = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 1 },
};
