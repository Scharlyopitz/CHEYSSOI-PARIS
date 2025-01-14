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

const handleScrollToEngagement = (e, navigate) => {
  e.preventDefault(); // Empêche le comportement par défaut du lien

  const currentPath = window.location.pathname; // Chemin actuel de la page

  if (currentPath === "/histoire") {
    // Si déjà sur la page "Histoire", scroller directement
    const engagementSection = document.getElementById("notre-engagement");
    if (engagementSection) {
      engagementSection.scrollIntoView({ behavior: "smooth" });
      // Nettoyez l'URL pour éviter l'ajout du hash
      window.history.replaceState(null, "", "/histoire");
    }
  } else {
    // Si sur une autre page, redirigez vers "Histoire" avec le hash
    navigate("/histoire");
  }
};

const handleScrollToTeam = (e, navigate) => {
  e.preventDefault(); // Empêche le comportement par défaut du lien

  const currentPath = window.location.pathname; // Chemin actuel de la page

  if (currentPath === "/histoire") {
    // Si déjà sur la page "Histoire", scroller directement
    const teamSection = document.getElementById("team-section");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "/histoire"); // Nettoyez l'URL pour éviter le hash
    }
  } else if (currentPath === "/") {
    // Si sur la page Homepage, redirigez avec hash
    navigate("/histoire#team-section");
  } else {
    // Si sur une autre page quelconque, redirigez vers "Histoire" avec hash
    navigate("/histoire#team-section");
  }
};



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
      {/* À propos */}
      <a
        style={{
          pointerEvents: isBarred ? "none" : "auto",
          textDecoration: isBarred ? "line-through" : "none",
        }}
        href="#apropos"
      >
        Pour vous
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
          textDecoration: pathname === "/clubcheyssoi" ? "none" : isBarred ? "line-through" : "none",
          pointerEvents: pathname === "/clubcheyssoi" ? "auto" : isBarred ? "none" : "auto",
        }}
      >
        Le Club Cheyssoi
      </Link>

      {/* Histoire */}
      <Link
        to="/histoire"
        style={{
          textDecoration: pathname === "/histoire" ? "none" : isBarred ? "line-through" : "none",
          pointerEvents: pathname === "/histoire" ? "auto" : isBarred ? "none" : "auto",
        }}
      >
        Histoire
      </Link>

      <Link
  to="/histoire"
  onClick={(e) => handleScrollToEngagement(e, navigate)}
>
  Notre Engagement

  
     </Link>
     <Link
    to="histoire"
    onClick={(e) => handleScrollToTeam(e, navigate)}
     className="menu-item"
    >Equipe</Link>



      {/* Ebook */}
      <a
        style={{
          pointerEvents: isBarred ? "none" : "auto",
          textDecoration: isBarred ? "line-through" : "none",
        }}
        href="#ebook"
      >
        Notre Ebook
      </a>
    </div>
  );
}
