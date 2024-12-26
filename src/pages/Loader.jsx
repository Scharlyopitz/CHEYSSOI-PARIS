import ImageAccueil from "/PREZ.webp";
import PagePro from "/PAGEPRO.webp";
import Haussman from "/Haussman.webp";
import Vendome from "/Vendome.webp";
import Vosges from "/Vosges.webp";

// import Vignet1 from "/1.1.png";
// import Vignet2 from "/2.2.png";
// import Vignet3 from "/3.png";
// import Vignet4 from "/4.png";
// import Vignet5 from "/5.png";
// import Vignet6 from "/6.png";

import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Loader({ setLoader }) {
  const { pathname } = useLocation();

  const rightImage = { "/": ImageAccueil, "/espacepro": PagePro };

  const column2 = [
    { src: Haussman },
    { src: Vendome },
    { src: rightImage[pathname] },
    { src: ImageAccueil },
    { src: "" },
  ];

  const column1 = [
    { src: ImageAccueil },
    { src: Haussman },
    { src: Vosges },
    { src: Vendome },
  ];

  const column3 = [
    { src: Vosges },
    { src: Haussman },
    { src: ImageAccueil },
    { src: Vendome },
  ];

  const imageScaling = {
    initial: {
      transform: "scale(1)",
    },
    animate: {
      transform: "scale(4.01)",
      transition: {
        duration: 2.5,
        delay: 1.4,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const staggerColumnTop = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const staggerColumnBottom = {
    animate: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: -1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const imageRevealTop = {
    initial: {
      y: "125vh",
    },
    animate: {
      y: 0,
      transition: {
        duration: 2.25,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const imageRevealBottom = {
    initial: {
      y: "-125vh",
    },
    animate: {
      y: "0vh",
      transition: {
        duration: 2.25,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <m.div
      initial="initial"
      animate="animate"
      variants={imageScaling}
      onAnimationComplete={() => setLoader(false)}
      id="loaderContainer"
    >
      <Column
        loaderImages={column1}
        staggerColumn={staggerColumnBottom}
        imageReveal={imageRevealBottom}
      />
      <Column
        loaderImages={column2}
        staggerColumn={staggerColumnTop}
        imageReveal={imageRevealTop}
      />
      <Column
        loaderImages={column3}
        staggerColumn={staggerColumnBottom}
        imageReveal={imageRevealBottom}
      />
    </m.div>
  );
}

function Column({ loaderImages, staggerColumn, imageReveal }) {
  const filterImage = {
    initial: {
      filter: "brightness(1)",
    },
    animate: {
      filter: "brightness(0.5)",
      transition: { duration: 2.5, delay: 1.5, ease: [0.83, 0, 0.17, 1] },
    },
  };

  return (
    <m.div variants={staggerColumn} className="imagesContainer">
      {loaderImages.map(({ src }, i) => {
        return (
          <m.div variants={imageReveal} key={i} className="image">
            <m.img variants={filterImage} src={src} alt={`image ${i + 1}`} />
          </m.div>
        );
      })}
    </m.div>
  );
}
