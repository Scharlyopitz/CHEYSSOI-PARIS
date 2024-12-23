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
  const { pathname } = useLocation();

  return (
    <>
      <div className="menu">
        <a
          style={{
            pointerEvents: pathname !== "/" && "none",
          }}
          href="#apropos"
        >
          <span className={`line-through ${pathname !== "/" && "active"}`} />à
          propos
        </a>
        <a
          style={{
            pointerEvents: pathname !== "/" && "none",
          }}
          href="#galerie"
        >
          <span className={`line-through ${pathname !== "/" && "active"}`} />
          Galerie
        </a>
        <a
          style={{
            pointerEvents: pathname !== "/" && "none",
          }}
          href="#demarrerprojet"
        >
          <span className={`line-through ${pathname !== "/" && "active"}`} />
          demarrer mon projet
        </a>
        <Link to="espacepro">Club Cheyssoi</Link>
        <a
          style={{
            pointerEvents: pathname !== "/" && "none",
          }}
          href="#ebook"
        >
          <span className={`line-through ${pathname !== "/" && "active"}`} />
          Ebook
        </a>
      </div>
    </>
  );
}
