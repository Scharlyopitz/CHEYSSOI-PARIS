import "./NotreEngagement.css"; // Assurez-vous que ce fichier CSS est bien dans le dossier et inclut les styles nécessaires.
import Footer from "../components/Footer";

export default function NotreEngagement() {
  return (
    <div className="notre-engagement-page">
      {/* Titre Notre Engagement */}
      <div id="notre-engagement" className="engagement-header">
        <h2 className="engagement-title">NOTRE ENGAGEMENT</h2>
        
      </div>

      {/* Section Notre Engagement */}
      <div className="engagement-section">
        {/* Ligne 1 : Image à gauche et texte à droite */}
        <div className="engagement-row">
          <img src="/3.png" alt="Image Engagement 1" className="engagement-image-left" />
          <div className="engagement-text-right">
            <p>
            NOUS NOUS ENGAGEONS À INTÉGRER DES PRATIQUES ÉTHIQUES ET DURABLES DANS CHACUN DE NOS PROJETS D’AMÉNAGEMENT ET DE DÉCORATION D’INTÉRIEUR. GUIDÉS PAR LES OBJECTIFS DE DÉVELOPPEMENT DURABLE, NOUS TRAVAILLONS POUR RÉPONDRE AUX ENJEUX SOCIAUX, ENVIRONNEMENTAUX ET ÉCONOMIQUES, TOUT EN VALORISANT L’ARTISANAT ET LE SAVOIR-FAIRE LOCAL.
            </p>
            <p>
              <strong>PAS DE PAUVRETÉ :</strong> DYNAMISATION ÉCONOMIQUE DES MÉTIERS ARTISANAUX ET DU TISSU ÉCONOMIQUE LOCAL. NOUS SOUTENONS ACTIVEMENT LES ARTISANS ET LES ENTREPRISES LOCALES EN COLLABORANT AVEC DES PROFESSIONNELS QUALIFIÉS ET PASSIONNÉS. EN VALORISANT LE SAVOIR-FAIRE TRADITIONNEL ET CONTEMPORAIN, NOUS CONTRIBUONS À LA CRÉATION D’EMPLOIS ET À LA PÉRENNISATION DE MÉTIERS ARTISANAUX, TOUT EN RENFORÇANT LE TISSU ÉCONOMIQUE LOCAL. NOTRE ENGAGEMENT EST AUSSI ÉCONOMIQUE QUE SOCIAL : PERMETTRE À CES ACTEURS DE PROSPÉRER DANS UN CADRE ÉQUITABLE ET RESPECTUEUX.
            </p>
            <p>
              <strong>BONNE SANTÉ ET BIEN-ÊTRE :</strong> LA SANTÉ ET LE BIEN-ÊTRE DE NOS CLIENTS ET DE LEURS ESPACES DE VIE SONT UNE PRIORITÉ.
NOUS SÉLECTIONNONS DES MATÉRIAUX ET DES SOLUTIONS D’AMÉNAGEMENT QUI RÉDUISENT L’EMPREINTE CARBONE ET MINIMISENT L’ÉMISSION DE COMPOSÉS ORGANIQUES VOLATILES (COV).
NOUS NOUS EFFORÇONS DE CONCEVOIR DES PROJETS RESPECTUEUX DE L’ENVIRONNEMENT, FAVORISANT UN CADRE DE VIE SAIN ET ÉCORESPONSABLE.
            </p>
          </div>
        </div>

        {/* Ligne 2 : Texte à gauche et image à droite */}
        <div className="engagement-row reverse">
          <div className="engagement-text-left">
            <p>
              <strong>VILLES ET COMMUNAUTÉS DURABLES :</strong> VERS UN HABITAT ÉQUIPÉ DE MANIÈRE DURABLE. NOUS ASPIRONS À RENDRE CHAQUE INTÉRIEUR DURABLE EN INTÉGRANT DES ÉQUIPEMENTS ET DES MATÉRIAUX CONÇUS POUR DURER DANS LE TEMPS.
            </p>
            <p>
              <strong>CONSOMMATION ET PRODUCTION RESPONSABLES :</strong> UNE PRODUCTION ÉCORESPONSABLE DES MATÉRIAUX. NOUS TRAVAILLONS MAIN DANS LA MAIN AVEC DES ARTISANS PARTAGEANT NOS VALEURS, EN PRIVILÉGIANT DES MATÉRIAUX PRODUITS DE MANIÈRE ÉTHIQUE ET ÉCORESPONSABLE.
              NOUS FAISONS LE CHOIX DE MATIÈRES LOCALES ET RENOUVELABLES, AFIN DE LIMITER L’IMPACT ÉCOLOGIQUE DE CHAQUE PROJET, TOUT EN CÉLÉBRANT LE TALENT ET LA CRÉATIVITÉ DES ARTISANS.
            </p>
            <p>
              <strong>RÉDUCTION DE NOTRE BILAN CARBONE :</strong> CHAQUE PROJET EST CONÇU POUR RÉDUIRE AU MAXIMUM SON IMPACT SUR L’ENVIRONNEMENT.
              DE LA CONCEPTION À LA RÉALISATION, NOS DÉMARCHES INCLUENT L’UTILISATION DE MATÉRIAUX À FAIBLE IMPACT, DES CHAÎNES D’APPROVISIONNEMENT COURTES ET UN EFFORT CONSTANT POUR SENSIBILISER NOS CLIENTS À DES CHOIX RESPONSABLES ET DURABLES.
            </p>
            <p>
            CHEZ CHEYSSOI PARIS, L’ÉTHIQUE ET LE DÉVELOPPEMENT DURABLE NE SONT PAS DES OPTIONS, MAIS DES ENGAGEMENTS PROFONDS.
            </p>
          </div>
          <img src="/4.png" alt="Image Engagement 2" className="engagement-image-right" />
        </div>
      </div>
      {/* Section footer */}
            <div id="footer-section" className="footer-section">
              <Footer /> {/* Affiche le contenu du composant Footer */}
            </div>
          </div>
        );
      }
      

    