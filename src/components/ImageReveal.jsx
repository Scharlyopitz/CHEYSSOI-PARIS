import InView from "./InView";
import { motion as m } from "framer-motion";

export default function ImageReveal({ src, alt }) {
  const imageReveal = {
    initial: {
      scale: 1.2,
    },
    animate: {
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <InView>
      <div style={{ overflow: "hidden" }} className="image">
        <m.img variants={imageReveal} src={src} alt={alt} />
      </div>
    </InView>
  );
}
