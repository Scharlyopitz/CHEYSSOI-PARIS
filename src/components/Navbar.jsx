import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import LogoCheyssoi from "/Logo.png";
import { motion as m, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar({ activeSection }) {
  const { scrollY } = useScroll();

  const [show, setShow] = useState(false);

  useMotionValueEvent(
    scrollY,
    "change",
    (latest) => {
      if (latest > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    },
    [scrollY]
  );

  const navAnimation = {
    initial: {
      backdropFilter: "none",
      background: "#00000000",
      transition: { duration: 0.5 },
    },
    animate: {
      backdropFilter: "blur(15px)",
      background: "#4848488c",
      transition: { duration: 0.5 },
    },
  };

  return (
    <m.nav
      initial="initial"
      animate={show ? "animate" : "initial"}
      variants={navAnimation}
    >
      <Logo />
      <Menu activeSection={activeSection} />
    </m.nav>
  );
}

function Logo() {
  return (
    <NavLink to={"/"} className="LogoContainer">
      <img src={LogoCheyssoi} alt="LogoCheyssoi" />
    </NavLink>
  );
}

function Menu({ activeSection }) {
  const links = [
    {
      name: "à propos",
      to: "#apropos",
    },
    {
      name: "services",
      to: "#services",
    },
    {
      name: "galerie",
      to: "#galerie",
    },
    {
      name: "demarrer mon projet",
      to: "#demarrermonprojet",
    },
    {
      name: "ebook",
      to: "#ebook",
    },
  ];

  return (
    <>
      <div className="menu">
        {links.map((link, i) => {
          return (
            <div
              className="link"
              key={i}
              onClick={() => (window.location.href = link.to)}
            >
              {`#${activeSection}` === link.to && (
                <m.span
                  layoutId="activeBg"
                  className="background"
                  transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                ></m.span>
              )}

              {link.name}
            </div>
          );
        })}
      </div>
    </>
  );
}
