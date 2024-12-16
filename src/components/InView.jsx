import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

export default function InView({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <m.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {children}
    </m.div>
  );
}
