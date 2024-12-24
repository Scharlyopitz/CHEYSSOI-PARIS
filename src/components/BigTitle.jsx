import { motion as m } from "framer-motion";

export default function BigTitle({ loader, text, undertitle }) {
  const revealH1 = {
    initial: {
      y: "105%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        delay: loader ? 2.35 : 0,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: {
      y: "105%",
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <section id="BigTitle">
      <m.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="titleContainer"
      >
        <div className="hidden">
          <m.h1 variants={revealH1}>{text}</m.h1>
        </div>
        {undertitle && <UnderTitle loader={loader} undertitle={undertitle} />}
      </m.div>
    </section>
  );
}

function UnderTitle({ loader, undertitle }) {
  const revealUnderTitle = {
    initial: {
      y: "-105%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        delay: loader ? 2.35 : 0,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: {
      y: "-105%",
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };
  return (
    <div className="hidden">
      <m.span variants={revealUnderTitle}>{undertitle}</m.span>
    </div>
  );
}
