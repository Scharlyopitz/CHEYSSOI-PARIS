import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import LogoCheyssoi from "/Logo.png";
import { motion as m, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
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
      <Menu />
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

function Menu() {
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

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  return (
    <>
      <div className="menu">
        <m.div animate={position} className="background"></m.div>
        {links.map((link, i) => {
          return <Link key={i} link={link} setPosition={setPosition} />;
        })}
      </div>
    </>
  );
}

function Link({ link, setPosition }) {
  const ref = useRef(null);

  return (
    <span
      ref={ref}
      onClick={() => (window.location.href = link.to)}
      onMouseLeave={() => {
        setPosition((prec) => ({
          ...prec,
          opacity: 0,
        }));
      }}
      onMouseEnter={() => {
        const width = ref.current.clientWidth;
        const height = ref.current.clientHeight;
        const left = ref.current.offsetLeft;

        setPosition({ left, width, height, opacity: 1 });
      }}
    >
      {link.name}
    </span>
  );
}
