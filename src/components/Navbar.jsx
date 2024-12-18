import { Link, useLocation } from "react-router-dom";
import LogoCheyssoi from "/2.png";

import { motion as m } from "framer-motion";

export default function Navbar() {
  const revealNav = {
    initial: {
      transform: "translate(-50%,-105%) ",
      pointerEvents: "none",
    },
    animate: {
      pointerEvents: "all",
      transform: "translate(-50%,0%) ",
      transition: {
        duration: 1,
        delay: 2.7,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <m.nav initial="initial" animate="animate" variants={revealNav}>
      <Logo />
      <Menu />
    </m.nav>
  );
}

function Logo() {
  return (
    <Link to={"/"} className="LogoContainer">
      <img src={LogoCheyssoi} alt="LogoCheyssoi" />
    </Link>
  );
}

function Menu() {
  const links = [
    { name: "à propos", to: "#apropos" },
    { name: "galerie", to: "#galerie" },
    { name: "demarrer mon projet", to: "#demarrerprojet" },
    { name: "Ebook", to: "#ebook" },
  ];

  const { pathname } = useLocation();

  return (
    <>
      <div className="menu">
        <Link to="espacepro">espace pro</Link>
        {links.map((link, i) => {
          return (
            <a
              key={i}
              style={{
                pointerEvents: pathname !== "/" && "none",
              }}
              className={"link"}
              href={link.to}
            >
              <span
                className={`line-through ${pathname !== "/" && "active"}`}
              />
              {link.name}
            </a>
          );
        })}
      </div>
    </>
  );
}
