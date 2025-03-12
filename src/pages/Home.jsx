import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Galerie from "../sections/Galerie";
import BigTitle from "../components/BigTitle";
import Projet from "./Projet";
import Formules from "../sections/Formules";
import DemarrerProjet from "../sections/DemarrerProjet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // ✅ Ajout de la navbar
import Chatbot from "../components/Chatbot";


export default function Home() {
  const sections = ["video", "gallery", "formules", "demarrerProjet", "videoFinale", "footerSection"];
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling.current) return;
      event.preventDefault();
      isScrolling.current = true;

      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection]);

  useEffect(() => {
    console.log("Current Section:", currentSection);
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.zIndex = index === currentSection ? "3" : "1";
        ref.style.opacity = index === currentSection ? "1" : "0";
        ref.style.pointerEvents = index === currentSection ? "auto" : "none";
      }
    });
  }, [currentSection]);

  return (
    <>
      <Navbar setCurrentSection={setCurrentSection} /> {/* ✅ Ajout de la navbar sans erreur */}

      <main id="Home" style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
        {selectedProject ? (
          <Projet projectName={selectedProject} setProjectName={setSelectedProject} />
        ) : (
          <>
            {/* Section Vidéo */}
            <section
              ref={(el) => (sectionRefs.current[0] = el)}
              className="section fullpage-section"
              id="videoSection"
              style={{
                position: "absolute", top: 0, left: 0, width: "100%", minHeight: "100vh",
                transition: "opacity 0.8s ease-in-out", opacity: currentSection === 0 ? "1" : "0", zIndex: currentSection === 0 ? 3 : 1,
              }}
            >
              <video
                className="video-background"
                src="/VIDEOPREZ.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              />
              <BigTitle text="Cheyssoi Paris" undertitle="Designers d’intérieurs éthiques" />
            </section>

            {/* Section Galerie */}
            <section
              ref={(el) => (sectionRefs.current[1] = el)}
              className="section fullpage-section"
              id="gallerySection"
              style={{
                position: "absolute", top: 0, left: 0, width: "100%", minHeight: "100vh",
                transition: "opacity 0.8s ease-in-out", opacity: currentSection === 1 ? "1" : "0", zIndex: currentSection === 1 ? 3 : 1,
              }}
            >
              <Galerie setProjectName={setSelectedProject} hideNavbar={true} hideLogo={true} />
            </section>

            {/* Section Formules */}
            <section
              ref={(el) => (sectionRefs.current[2] = el)}
              className="section fullpage-section"
              id="formulesSection"
              style={{
                position: "absolute", top: 0, left: 0, width: "100%", minHeight: "100vh",
                transition: "opacity 0.8s ease-in-out", opacity: currentSection === 2 ? "1" : "0", zIndex: currentSection === 2 ? 3 : 1,
              }}
            >
              <Formules />
            </section>

            {/* Section Démarrer mon projet */}
            <section
              ref={(el) => (sectionRefs.current[3] = el)}
              className="section fullpage-section"
              id="demarrerProjetSection"
              style={{
                position: "absolute", top: 0, left: 0, width: "100%", minHeight: "100vh",
                transition: "opacity 0.8s ease-in-out", opacity: currentSection === 3 ? "1" : "0", zIndex: currentSection === 3 ? 3 : 1,
                display: "flex", justifyContent: "center", alignItems: "center", padding: "50px 0", overflowY: "auto"
              }}
            >
              <DemarrerProjet />
            </section>

            {/* Section Vidéo Finale */}
            <section
              ref={(el) => (sectionRefs.current[4] = el)}
              className="section fullpage-section"
              id="videoFinaleSection"
              style={{
                position: "absolute", top: 0, left: 0, width: "100%", minHeight: "100vh",
                transition: "opacity 0.8s ease-in-out", opacity: currentSection === 4 ? "1" : "0", zIndex: currentSection === 4 ? 3 : 1,
              }}
            >
              <video
                className="video-background"
                src="/videodernierepage.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              />
              <button className="video-button" onClick={() => setCurrentSection(3)} style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
                DÉMARRER MON PROJET
              </button>
            </section>

            {/* Section Footer avec les rubriques du bas */}
            <section
              ref={(el) => (sectionRefs.current[5] = el)}
              className="section fullpage-section"
              id="footerSection"
              style={{
                position: "absolute", top: 0, left: 0, width: "100%", minHeight: "100vh",
                transition: "opacity 0.8s ease-in-out", opacity: currentSection === 5 ? "1" : "0", 
                zIndex: currentSection === 5 ? 3 : 1, display: "flex", justifyContent: "center", alignItems: "center"
              }}
            >
               <div className="footer-links">
    <Link to="/témoignages-clients">TEMOIGNAGES CLIENTS</Link>
    <Link to="/conditions-generales">CONDITIONS GENERALES DE VENTE</Link>
    <Link to="/mentions-legales">MENTIONS LEGALES</Link>
    <Link to="/politique-confidentialite">POLITIQUE DE CONFIDENTIALITE</Link>
    <Link to="/newletters">S'INSCRIRE A LA NEWSLETTER</Link>
    <Link to="/contact">CONTACT</Link>
  </div>
            </section>
          </>
        )}

    <Chatbot />
   
      </main>
    </>
  );
}
