import { motion as m } from "framer-motion";
import InView from "./InView";

export default function TitleReveal({ words }) {
  const animeTitle = {
    initial: {
      y: "105%",
    },
    animate: (i) => ({
      y: 0,
      transition: { duration: 0.7, delay: i * 0.07, ease: [0.65, 0, 0.35, 1] },
    }),
  };

  return (
    <InView>
      <div className="titleContainer">
        {words.map((word, i) => {
          return (
            <div key={i} className="wordContainer">
              <m.h2 variants={animeTitle} custom={i}>
                {word}
              </m.h2>
            </div>
          );
        })}
      </div>
    </InView>
  );
}
