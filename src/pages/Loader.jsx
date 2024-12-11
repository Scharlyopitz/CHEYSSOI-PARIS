import image1 from "/Image2.webp";
import Haussman from "/Haussman.jpg";
import Vendome from "/Vendome.jpg";
import Vosges from "/Vosges.jpg";
import Montaigne from "/Montaigne.jpg";

import { motion as m } from "framer-motion";

export default function Loader({ loader, setLoader }) {
  const columnMoove = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: { duration: 3, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const imageReveal = {
    initial: {
      y: "50vh",
    },
    animate: (i) => ({
      y: 0,
      transition: { duration: 3, delay: i * 0.25, ease: [0.65, 0, 0.35, 1] },
    }),
  };

  const imageScaling = {
    initial: {
      transform: "scale(1)",
    },
    animate: {
      transform: "scale(4)",
      transition: { duration: 3, delay: 1.8, ease: [0.83, 0, 0.17, 1] },
    },
  };

  const filterImage = {
    initial: {
      filter: "brightness(1)",
    },
    animate: {
      filter: "brightness(0.5)",
      transition: { duration: 3, delay: 1.8, ease: [0.83, 0, 0.17, 1] },
    },
  };

  const images = [
    { src: Montaigne },
    { src: Haussman },
    { src: image1 },
    { src: Vendome },
    { src: Vosges },
  ];

  return (
    <m.div
      initial="initial"
      animate="animate"
      variants={imageScaling}
      onAnimationComplete={() => setLoader(false)}
      id="loaderContainer"
      style={{
        opacity: loader ? 1 : 0,
        pointerEvents: loader ? "all" : "none",
      }}
    >
      <m.div variants={columnMoove} className="imagesContainer">
        {images.map(({ src }, i) => {
          return (
            <m.div key={i} custom={i} variants={imageReveal} className="image">
              <m.img variants={filterImage} src={src} alt={`image ${i + 1}`} />
            </m.div>
          );
        })}
      </m.div>
    </m.div>
  );
}
