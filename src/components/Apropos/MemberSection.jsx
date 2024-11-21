import { useState, useRef, useEffect } from "react";
import { useInView, AnimatePresence, motion as m } from "framer-motion";
import persons from "../../assets/Persons.json";

export default function MemberSection() {
  const [currentMember, setCurrentMember] = useState(0);

  const timer = 5000;

  const refCarrousel = useRef(null);
  const isInView = useInView(refCarrousel, { once: true });

  //   useEffect(() => {
  //     let interval;

  //     if (isInView) {
  //       interval = setInterval(() => {
  //         setCurrentMember(currentMember + 1);
  //       }, timer);
  //     }

  //     if (currentMember === persons.length) {
  //       setCurrentMember(0);
  //     }

  //     return () => clearInterval(interval);
  //   }, [currentMember]);

  const easeOutQuad = [0.5, 1, 0.89, 1];

  const carrouselTransi = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 0.2, ease: easeOutQuad },
    },
  };

  return (
    <div className="memberSection">
      <Title
        currentMember={currentMember}
        persons={persons}
        carrouselTransi={carrouselTransi}
      />
      <Carousel
        refCarrousel={refCarrousel}
        persons={persons}
        currentMember={currentMember}
        setCurrentMember={setCurrentMember}
        timer={timer}
      />
      <PersonsContainer
        persons={persons}
        carrouselTransi={carrouselTransi}
        currentMember={currentMember}
      />
    </div>
  );
}

function Title({ persons, currentMember, carrouselTransi }) {
  return (
    <div className="titleContainer">
      {persons.map((p, i) => {
        return (
          <m.h2
            initial="initial"
            animate={currentMember === i ? "animate" : "initial"}
            variants={carrouselTransi}
            key={i}
          >
            {p.job}
          </m.h2>
        );
      })}
    </div>
  );
}

function Carousel({
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

function PersonsContainer({ persons, carrouselTransi, currentMember }) {
  return (
    <div className="personsContainer">
      {persons.map((p, i) => {
        return (
          <m.div
            initial="initial"
            animate={currentMember === i ? "animate" : "initial"}
            variants={carrouselTransi}
            key={i}
            className="personContainer"
          >
            {p.names.map((name, i) => {
              return (
                <div key={i} className="imgContainer">
                  <img src={name.image} alt={`photo de ${name.name}`} />
                  <div className="nameContainer">
                    <span className="name">{name.name}</span>
                  </div>
                </div>
              );
            })}
          </m.div>
        );
      })}
    </div>
  );
}
