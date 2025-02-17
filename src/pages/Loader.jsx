import VideoAccueil from "/VIDEOPREZ.mp4";
import PagePro from "/PAGEPRO.webp";
import Label1 from "/Etiquet1.webp";
import Label2 from "/Etiquet2.webp";
import Label3 from "/Etiquet3.webp";
import Label4 from "/Etiquet4.webp";
import Label5 from "/Etiquet5.webp";
import Label6 from "/Etiquet6.webp";
import Label7 from "/Etiquet7.webp";
import Label8 from "/Etiquet8.webp";
import Label9 from "/Etiquet9.webp";
import Label10 from "/Etiquet10.webp";

import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Loader({ setLoader }) {
  const { pathname } = useLocation();

  const rightMedia = { "/": VideoAccueil, "/clubcheyssoi": PagePro };

  const column2 = [
    { src: Label1 },
    { src: Label6 },
    { src: rightMedia[pathname], isVideo: pathname === "/" },
    { src: Label2 },
    { src: "" },
  ];

  const column1 = [
    { src: Label10 },
    { src: Label2 },
    { src: Label8 },
    { src: Label4 },
  ];

  const column3 = [
    { src: Label3 },
    { src: Label7 },
    { src: Label5 },
    { src: Label9 },
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
      {loaderImages.map(({ src, isVideo }, i) => {
        return (
          <m.div variants={imageReveal} key={i} className="image">
            {isVideo ? (
              <m.video
                variants={filterImage}
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="mediaElement"
              />
            ) : (
              <m.img
                variants={filterImage}
                src={src}
                alt={`image ${i + 1}`}
                className="mediaElement"
              />
            )}
          </m.div>
        );
      })}
    </m.div>
  );
}

