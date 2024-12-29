export const navbarSlideup = {
  initial: { y: "-100%" },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const featuresSlideUp = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};
