import { motion as m } from "framer-motion";

export default function PageTransition({ loader }) {
  const pageTransition = {
    initial: {
      y: 0,
    },

    animate: (i) => ({
      y: "100vh",

      transition: {
        duration: 0.5,

        delay: 0.05 * i,

        ease: [0.65, 0, 0.35, 1],
      },

      transitionEnd: { y: "-100vh" },
    }),

    exit: (i) => ({
      y: 0,

      transition: {
        duration: 0.5,

        delay: 0.05 * i,

        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0,
    },
    exit: {
      opacity: 0.5,
    },
  };

  const columsNumb = 5;

  return (
    <m.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="transitionContainer"
      style={{ opacity: loader ? 0 : 1 }}
    >
      <m.div variants={fade} className="filter" />
      {[...Array(columsNumb)].map((_, i) => {
        return (
          <m.div
            variants={pageTransition}
            key={i}
            custom={columsNumb - i}
            className="column"
          />
        );
      })}
    </m.div>
  );
}
