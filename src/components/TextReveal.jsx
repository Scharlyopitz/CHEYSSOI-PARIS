import { motion as m } from "framer-motion";
import InView from "./InView";

export default function TextReveal({ text }) {
  const revealText = {
    initial: {
      background: "linear-gradient(90deg, #191a19 0%, #191a1929 0%)",
    },
    animate: {
      background: "linear-gradient(90deg, #191a19 100%, #191a1929 100%)",
      transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
    },
  };
  return (
    <InView>
      <m.p className="Text" variants={revealText}>
        {text}
      </m.p>
    </InView>
  );
}
