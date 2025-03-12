import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoCheyssoi from "/2.png";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Navbar({ setCurrentSection }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (sectionIndex) => {
    if (location.pathname !== "/") {
      // On navigue vers la page Home et on stocke l'index de la section à atteindre
      localStorage.setItem("scrollToSection", sectionIndex);
      navigate("/", { replace: true });
    } else {
      // Si on est déjà sur Home, on scrolle directement
      setCurrentSection(sectionIndex);
    }
  };

  // Après le retour à la Home, récupérer l'index de la section stocké et scroller
  useEffect(() => {
    const sectionToScroll = localStorage.getItem("scrollToSection");
    if (sectionToScroll !== null) {
      setCurrentSection(parseInt(sectionToScroll, 10));
      localStorage.removeItem("scrollToSection");
    }
  }, []);

  return (
    <m.nav>
      <Logo />
      <Menu handleNavigation={handleNavigation} />
    </m.nav>
  );
}

// ✅ Ajout de la fonction Logo
function Logo() {
  return (
    <Link to="/" className="LogoContainer">
      <img src={LogoCheyssoi} alt="LogoCheyssoi" />
    </Link>
  );
}

// ✅ Correction du menu
function Menu({ handleNavigation }) {
  return (
    <div className="menu">
      <Link to="/histoire">NOTRE HISTOIRE</Link>
      <Link to="/notre-engagement">NOTRE ENGAGEMENT</Link>
      <Link to="/team-section">EQUIPE</Link>
      <Link to="/pourvous">POUR VOUS</Link>

      <Link to="/" className="nav-link" onClick={(e) => { 
    e.preventDefault(); 
    handleNavigation(1); 
}}>
  GALERIE
</Link>

<Link to="/" className="nav-link" onClick={(e) => { 
    e.preventDefault(); 
    handleNavigation(3); 
}}>
  DÉMARRER MON PROJET
</Link>


      <Link to="/clubcheyssoi">LE CLUB CHEYSSOI</Link>
      <Link to="/ebook">NOTRE EBOOK</Link>
    </div>
  );
}
