import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import LogoCheyssoi from "/Logo.png";
import { motion as m } from "framer-motion";

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <Menu />
    </nav>
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
      name: "Home",
      to: "#",
    },
    {
      name: "About",
      to: "#about",
    },
    {
      name: "Works",
      to: "#works",
    },
    {
      name: "Contact",
      to: "#contact",
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
