import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { animate, motion as m } from "framer-motion";

export default function GotoTopButton() {
  const [reveal, setReveal] = useState(false);

  const revealButton = {
    initial: {
      x: "101%",
    },
    animate: {
      x: 0,
    },
  };

  window.addEventListener("scroll", () => {
    const { scrollTop } = document.documentElement;

    const height = window.innerHeight;

    if (scrollTop > height) {
      setReveal(true);
    } else {
      setReveal(false);
    }
  });

  return (
    <div
      style={{ pointerEvents: reveal ? "all" : "none" }}
      className="gotoTopButton"
    >
      <m.a
        initial="initial"
        animate={reveal ? "animate" : "initial"}
        variants={revealButton}
        transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
        href="#"
        className="button"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </m.a>
    </div>
  );
}
