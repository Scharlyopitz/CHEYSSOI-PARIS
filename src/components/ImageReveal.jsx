import InView from "./InView";
import { motion as m } from "framer-motion";

export default function ImageReveal({ src, alt }) {
  const imageReveal = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <InView>
      <div className="image" style={{ background: "#c49d83" }}>
        <m.img variants={imageReveal} src={src} alt={alt} />
      </div>
    </InView>
  );
}
