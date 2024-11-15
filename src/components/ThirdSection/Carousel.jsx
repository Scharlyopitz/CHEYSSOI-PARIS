import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";

export default function Carousel({
  refCarrousel,
  persons,
  currentMember,
  setCurrentMember,
  timer,
}) {
  return (
    <div ref={refCarrousel} className="carousel">
      {persons.map((_, i) => {
        return (
          <div
            key={i}
            onClick={() => setCurrentMember(i)}
            className="pointContainer"
          >
            <AnimatePresence>
              {currentMember === i && (
                <Progress key={currentMember} timer={timer} />
              )}
            </AnimatePresence>
            <span className="point"></span>
          </div>
        );
      })}
    </div>
  );

  function Progress({ timer }) {
    const exitTransi = 1;

    const easeOutCubic = [0.33, 1, 0.68, 1];

    const animeProgress = {
      initial: {
        background: `conic-gradient(#ffffff 0%, #000000 0%)`,
      },
      animate: {
        background: `conic-gradient(#ffffff 100%, #000000 0%)`,
        transition: { duration: timer / 1000, ease: "linear" },
      },
      exit: {
        background: `conic-gradient(#ffffff 100%, #000000 0%)`,
        transition: { duration: exitTransi, ease: easeOutCubic },
      },
    };

    const animeProgressOut = {
      initial: { background: `conic-gradient(#000000 0%, transparent 0%)` },
      exit: {
        background: `conic-gradient(#000000 100%, transparent 0%)`,
        transition: { duration: exitTransi, ease: easeOutCubic },
      },
    };

    return (
      <>
        <m.span
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animeProgress}
          className="progress"
        ></m.span>
        <m.span
          initial="initial"
          exit="exit"
          variants={animeProgressOut}
          className="progressOut"
        ></m.span>
      </>
    );
  }
}
