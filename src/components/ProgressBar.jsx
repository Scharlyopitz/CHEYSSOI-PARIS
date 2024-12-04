import { motion as m, useScroll, useTransform } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const progressHeigth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="progressBarContainer">
      <div className="progressBar">
        <m.div className="bar" style={{ height: progressHeigth }} />
      </div>
    </div>
  );
}
