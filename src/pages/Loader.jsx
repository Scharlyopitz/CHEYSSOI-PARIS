import image1 from "/Image2.webp";
import Haussman from "/Haussman.jpg";
import Vendome from "/Vendome.jpg";
import Vosges from "/Vosges.jpg";
// import Montaigne from "/Montaigne.jpg";

import { motion as m } from "framer-motion";

export default function Loader({ loader, setLoader }) {
  const imageScaling = {
    initial: {
      transform: "scale(1)",
    },
    animate: {
      transform: "scale(4.01)",
      transition: { duration: 3, delay: 1.8, ease: [0.83, 0, 0.17, 1] },
    },
  };

  const loaderImages1 = [
    { src: Vendome },
    { src: Haussman },
    { src: image1 },
    { src: Vosges },
    { src: Vosges },
  ];

  const loaderImages2 = [
    { src: Vosges },
    { src: image1 },
    { src: Haussman },
    { src: Vendome },
    { src: Vosges },
  ];

  const columnMooveTop = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,

      transition: {
        duration: 3,
        staggerChildren: 0.25,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const columnMooveBottom = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 3,
        staggerChildren: 0.25,
        staggerDirection: -1,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const imageRevealTop = {
    initial: {
      y: "100vh",
    },
    animate: {
      y: 0,
      transition: { duration: 3, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const imageRevealBottom = {
    initial: {
      y: "-100vh",
    },
    animate: {
      y: 0,
      transition: { duration: 3, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <m.div
      initial="initial"
      animate="animate"
      variants={imageScaling}
      onAnimationComplete={() => setLoader(false)}
      id="loaderContainer"
      // style={{
      //   opacity: loader ? 1 : 0,
      //   pointerEvents: loader ? "all" : "none",
      // }}
    >
      <Column
        loaderImages={loaderImages2}
        columnMoove={columnMooveBottom}
        imageReveal={imageRevealBottom}
      />
      <Column
        loaderImages={loaderImages1}
        columnMoove={columnMooveTop}
        imageReveal={imageRevealTop}
      />
      <Column
        loaderImages={loaderImages2}
        columnMoove={columnMooveBottom}
        imageReveal={imageRevealBottom}
      />
    </m.div>
  );
}

function Column({ loaderImages, columnMoove, imageReveal }) {
  const filterImage = {
    initial: {
      filter: "brightness(1)",
    },
    animate: {
      filter: "brightness(0.5)",
      transition: { duration: 3, delay: 1.8, ease: [0.83, 0, 0.17, 1] },
    },
  };

  return (
    <m.div variants={columnMoove} className="imagesContainer">
      {loaderImages.map(({ src }, i) => {
        return (
          <m.div key={i} variants={imageReveal} className="image">
            <m.img variants={filterImage} src={src} alt={`image ${i + 1}`} />
          </m.div>
        );
      })}
    </m.div>
  );
}
