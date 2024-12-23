import { motion as m } from "framer-motion";

export default function PageTransition({ children, id }) {
  const pageFade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <m.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageFade}
      id={`#${id}`}
    >
      {children}
    </m.main>
  );
}
