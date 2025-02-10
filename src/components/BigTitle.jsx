import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

export default function BigTitle({ loader, text, undertitle }) {
  const [delayReady, setDelayReady] = useState(false);
  const [swapOrder, setSwapOrder] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayReady(true);
    }, 3000); // ⬅ Change ici pour modifier le temps d’apparition (5000 = 5s)

    const swapTimeout = setTimeout(() => {
      setSwapOrder(true);
    }, 7000); // ⬅ Change ici pour modifier le temps d'échange (8000 = 8s)

    return () => {
      clearTimeout(timeout);
      clearTimeout(swapTimeout);
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
    initial: { y: "-105%" },
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
      y: "-105%",
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <section id="BigTitle" style={{ visibility: delayReady ? "visible" : "hidden" }}>
      <m.div initial="initial" animate="animate" exit="exit" className="titleContainer">
        {!swapOrder ? (
          <>
            {undertitle && (
              <div className="hidden">
                <m.span variants={revealUnderTitle}>{undertitle}</m.span> {/* ✅ Le sous-titre est en haut */}
              </div>
            )}
            <div className="hidden">
              <m.h1 variants={revealH1}>{text}</m.h1> {/* ✅ Le titre est en bas */}
            </div>
          </>
        ) : (
          <>
            <div className="hidden">
              <m.h1 variants={revealH1}>{text}</m.h1> {/* ✅ Le titre passe en haut */}
            </div>
            {undertitle && (
              <div className="hidden">
                <m.span variants={revealUnderTitle}>{undertitle}</m.span> {/* ✅ Le sous-titre passe en dessous */}
              </div>
            )}
          </>
        )}
      </m.div>
    </section>
  );
}
