import "./Histoire.css";
import Team from "../sections/Team"; // Importez le composant Team
import Footer from "../components/Footer";


export default function Histoire() {
  return (
    <div className="histoire-page">
      {/* Section de l'image principale */}
      <div className="histoire-header">
        <h1 className="histoire-title">HISTOIRE</h1>
        <h2 className="subtitle">PAGE DÉDIÉE À NOTRE HISTOIRE</h2>
      </div>

      {/* Contenu défilable */}
      <div className="histoire-content">
        {/* Section avec image à gauche et texte à droite */}
        <div className="histoire-section with-image">
          <img src="/5.png" alt="Image à gauche" className="histoire-image-left" />
          <div className="histoire-text-right">
            <p>
            JE SUIS TANIA VINGADASSALON. JEUNE, JE DESSINAIS DES ROBES, LISAIS ÉNORMÉMENT, COLLECTIONNAIS DES FIGURINES, DES BOUTEILLES DE PARFUMS MINIATURES, DES PIERROT DE LA LUNE EN PORCELAINE, DES AFFICHES PUBLICITAIRES D'ICÔNES DE MODE. J'AIMAIS LA CRÉATIVITÉ ET L’ESTHÉTIQUE !
            </p>
            <p>
            AU SEIN D’UNE COMPAGNIE AÉRIENNE DURANT 20 ANS, JE CÔTOIE L’EXCELLENCE DE SERVICE, ET LORS DE MES VOYAGES, À LA QUÊTE DU BEAU, DES ARTISANS, DU SAVOIR-FAIRE LOCAL, QUELLE RICHESSE ! MAIS JE VOLE DE MES PROPRES AILES EN 2021 POUR VIVRE ET PARTAGER MA PASSION PREMIÈRE !
            </p>
            <p>
            JE GARDE MON AMOUR POUR LA PLANÈTE, MON AMOUR POUR LA MATIÈRE, LES COULEURS, LE BEAU. JE ME FORME EN DESIGN D’INTÉRIEUR DANS DES ÉCOLES PARISIENNES RÉPUTÉES, JE CRÉE CHEYSSOI PARIS EN 2021. CHEYSSOI POUR UN ORTHOGRAPHE PLUS CHIC, PARIS CAR C’EST LÀ QUE PRENNENT FORME MES INSPIRATIONS ET ASPIRATIONS !!!
            </p>
            <p>
            FORTEMENT ENGAGÉE ENVERS DES VALEURS TELLES QUE L'ÉCO-RESPONSABILITÉ ET LA DURABILITÉ, LE SLOW DESIGN EST UNE RÉVÉLATION ET JE CRÉE MON STUDIO CONCEPTEUR D’INTÉRIEURS UTILISANT DES MATÉRIAUX SAINS POUR L’ENVIRONNEMENT ET POUR LES INDIVIDUS.
            </p>
            <p>
            DEPUIS 4 ANS, L’ÉQUIPE DE CHEYSSOI PARIS VOUS ACCOMPAGNE AVEC PLAISIR À CONCEVOIR DES INTÉRIEURS DURABLES ET ÉLÉGANTS EN COLLABORATION AVEC UN RÉSEAU D’ARTISANS LOCAUX ET ÉTHIQUES, FAVORISANT LES CIRCUITS COURTS ET UN IMPACT CARBONE RÉDUIT.
            </p>
            <p>
            NOUS PRIVILÉGIONS DES MATÉRIAUX ÉCOLOGIQUES, TOUT EN CRÉANT DES ENVIRONNEMENTS SAINS POUR VOTRE SANTÉ ET CELLE DE LA PLANÈTE. QUE VOUS SOYEZ PARTICULIER OU PROFESSIONNEL, EN FRANCE OU À L’ÉTRANGER, NOUS VOUS AIDONS À IMAGINER ET CONCRÉTISER UN INTÉRIEUR EN HARMONIE AVEC VOS VALEURS, VOS ENVIES ET VOTRE ENVIRONNEMENT !
            </p>
          </div>
        </div>
      </div>

       {/* Section footer */}
                  <div id="footer-section" className="footer-section">
                    <Footer /> {/* Affiche le contenu du composant Footer */}
                  </div>
                </div>
              );
            }
    
 