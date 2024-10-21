export const capstone_variant1 = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};

export const capstone_variant1_Animation = {
  opacity: {
    duration: 0.5,
  },
  y: {
    type: "spring",
    duration: 0.5,
    stiffness: 50,
  },
};

export const capstone_variant2 = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 100,
  },
};

export const capstone_variant2_Animation = {
  opacity: {
    duration: 0.5,
  },
  x: {
    type: "spring",
    duration: 0.5,
    stiffness: 50,
  },
};

export const capstone_variant3 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const capstone_variant3_Animation = {
  opacity: {
    duration: 0.5,
  },
};
