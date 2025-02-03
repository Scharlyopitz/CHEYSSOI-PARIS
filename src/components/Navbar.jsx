import { Link, useLocation } from "react-router-dom";
import LogoCheyssoi from "/2.png";
import { motion as m } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  
  // Liste des pages où la navbar doit être cachée
  const hideNavbar = [
    "/histoire", 
    "/notre-engagement", 
    "/team-section", 
    "/clubcheyssoi",
    "/conditions-generales", 
    "/mentions-legales", 
    "/politique-confidentialite",
    "/ebook"
  ];

  if (hideNavbar.includes(location.pathname)) {
    return null; // Ne rien afficher sur ces pages
  }

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
    <div className="menu">
      {/* Notre Histoire */}
      <Link to="/histoire" style={{ textDecoration: pathname === "/histoire" ? "none" : "none" }}>
        NOTRE HISTOIRE
      </Link>

      {/* Notre Engagement */}
      <Link to="/notre-engagement" style={{ textDecoration: pathname === "/notre-engagement" ? "none" : "none" }}>
        NOTRE ENGAGEMENT
      </Link>

      {/* Équipe */}
      <Link to="/team-section" style={{ textDecoration: pathname === "/team-section" ? "none" : "none" }}>
        EQUIPE
      </Link>

      {/* Pour Vous */}
      <Link to="/pourvous" style={{ textDecoration: pathname === "/pourvous" ? "none" : "none" }}>
        POUR VOUS
      </Link>

      {/* Galerie (resté inchangé) */}
      <a href="#galerie">GALERIE</a>

      {/* Démarrer mon projet (resté inchangé) */}
      <a href="#demarrerprojet">DEMARRER MON PROJET</a>

      {/* Le Club Cheyssoi */}
      <Link to="/clubcheyssoi" style={{ textDecoration: pathname === "/clubcheyssoi" ? "none" : "none" }}>
        LE CLUB CHEYSSOI
      </Link>

      {/* Ebook */}
      <Link to="/ebook" style={{ textDecoration: pathname === "/ebook" ? "none" : "none" }}>
        NOTRE EBOOK
      </Link>
    </div>
  );
}
