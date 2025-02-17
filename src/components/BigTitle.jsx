import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

export default function BigTitle({ loader, text, undertitle }) {
  const [delayReady, setDelayReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayReady(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const revealH1 = {
    initial: { y: "105%" },
    animate: delayReady
      ? {
          y: 0,
          transition: {
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
          },
        }
      : {},
    exit: {
      y: "105%",
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const revealUnderTitle = {
    initial: { y: "105%" },
    animate: delayReady
      ? {
          y: 0,
          transition: {
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
          },
        }
      : {},
    exit: {
      y: "105%",
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <section id="BigTitle" style={{ visibility: delayReady ? "visible" : "hidden" }}>
      <m.div initial="initial" animate="animate" exit="exit" className="titleContainer">
        <div className="hidden" style={{ marginTop: "-40px" }}> {/* ✅ Le titre ne bouge pas */}
          <m.h1 variants={revealH1}>{text}</m.h1>
        </div>
        {undertitle && (
          <div className="hidden" style={{ marginTop: "60px" }}> {/* 🔽 Le sous-titre descend */}
            <m.span variants={revealUnderTitle}>{undertitle}</m.span>
          </div>
        )}
      </m.div>
    </section>
  );
}
