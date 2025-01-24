import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()

  const isBarred =
  pathname === "/clubcheyssoi" ||
  pathname === "/histoire" ||
  pathname === "/notre-engagement" ||
  pathname === "/equipe";




  return (
    <div className="menu">

      {/* Notre histoire */}
      <Link
        to="/histoire"
        style={{
          textDecoration: pathname === "/histoire" ? "none" : isBarred ? "line-through" : "none",
          pointerEvents: pathname === "/histoire" ? "auto" : isBarred ? "none" : "auto",
        }}
      >
        NOTRE HISTOIRE
      </Link>

      {/* Notre Engagement */}
      <Link
        to="/notre-engagement"
        style={{
          textDecoration: pathname === "/notre-engagement" ? "none" : isBarred ? "line-through" : "none",
          pointerEvents: pathname === "/notre-engagement" ? "auto" : isBarred ? "none" : "auto",
        }}
      >
        NOTRE ENGAGEMENT
      </Link>

      {/* Equipe */}
<Link
        to="/team-section"
        style={{
          textDecoration: pathname === "/team-section" ? "none" : isBarred ? "line-through" : "none",
          pointerEvents: pathname === "/team-section" ? "auto" : isBarred ? "none" : "auto",
        }}
      >
        EQUIPE
      </Link>


      <Link
  to="/pourvous"
  style={{
    textDecoration: pathname === "/pourvous" ? "none" : isBarred ? "line-through" : "none", // Barre si désactivé
    pointerEvents: pathname === "/pourvous" ? "auto" : isBarred ? "none" : "auto", // Gère les clics
  }}
>
  POUR VOUS
</Link>


{/* Galerie */}
<a
        style={{
          pointerEvents: isBarred ? "none" : "auto",
          textDecoration: isBarred ? "line-through" : "none",
        }}
        href="#galerie"
      >
        GALERIE
      </a>

{/* Demarrer mon projet*/}
<a
        style={{
          pointerEvents: isBarred ? "none" : "auto",
          textDecoration: isBarred ? "line-through" : "none",
        }}
        href="#demarrerprojet"
      >
        DEMARRER MON PROJET
      </a>

      {/* Le Club Cheyssoi */}
      <Link
        to="/clubcheyssoi"
        style={{
          textDecoration: pathname === "/clubcheyssoi" ? "none" : isBarred ? "line-through" : "none",
          pointerEvents: pathname === "/clubcheyssoi" ? "auto" : isBarred ? "none" : "auto",
        }}
      >
        LE CLUB CHEYSSOI
      </Link>

      <Link
  to="/ebook"
  style={{
    textDecoration: pathname === "/ebook" ? "none" : isBarred ? "line-through" : "none",
    pointerEvents: pathname === "/ebook" ? "auto" : isBarred ? "none" : "auto",
  }}
>
  NOTRE EBOOK
</Link>

    </div>
  );
}


