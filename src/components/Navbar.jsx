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

  // Vérifie si les autres onglets doivent être barrés
  const isBarred = pathname === "/histoire" || pathname === "/clubcheyssoi";

  return (
    <div className="menu">
      {/* À propos */}
      <a
        style={{
          pointerEvents: isBarred ? "none" : "auto", // Désactive si isBarred
          textDecoration: isBarred ? "line-through" : "none", // Barre si isBarred
        }}
        href="#apropos"
      >
        à propos
      </a>

      {/* Galerie */}
      <a
        style={{
          pointerEvents: isBarred ? "none" : "auto",
          textDecoration: isBarred ? "line-through" : "none",
        }}
        href="#galerie"
      >
        Galerie
      </a>

      {/* Démarrer mon projet */}
      <a
        style={{
          pointerEvents: isBarred ? "none" : "auto",
          textDecoration: isBarred ? "line-through" : "none",
        }}
        href="#demarrerprojet"
      >
        démarrer mon projet
      </a>

      {/* Le Club Cheyssoi */}
      <Link
        to="/clubcheyssoi"
        style={{
          textDecoration: pathname === "/clubcheyssoi" ? "none" : isBarred ? "line-through" : "none", // Actif si sur la page clubcheyssoi
          pointerEvents: pathname === "/clubcheyssoi" ? "auto" : isBarred ? "none" : "auto", // Actif uniquement pour clubcheyssoi
        }}
      >
        Le Club Cheyssoi
      </Link>

      {/* Histoire */}
      <Link
        to="/histoire"
        style={{
          textDecoration: pathname === "/histoire" ? "none" : isBarred ? "line-through" : "none", // Actif si sur la page histoire
          pointerEvents: pathname === "/histoire" ? "auto" : isBarred ? "none" : "auto", // Actif uniquement pour histoire
        }}
      >
        Histoire
      </Link>

      <Link to="notre-engagement" style={{ textDecoration: "none" }}>Notre Engagement</Link>



      {/* Ebook */}
      <a
        style={{
          pointerEvents: isBarred ? "none" : "auto",
          textDecoration: isBarred ? "line-through" : "none",
        }}
        href="#ebook"
      >
        Ebook
      </a>
    </div>
  );
}
