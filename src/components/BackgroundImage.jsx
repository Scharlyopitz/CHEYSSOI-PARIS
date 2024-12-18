import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BackgroundImage({ image }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0", "30%"]);

  return (
    <div ref={containerRef} className="backgroundImage">
      <div className="image">
        <m.img style={{ y }} src={image} alt="Image accueil" />
      </div>
    </div>
  );
}
