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
              Nous nous engageons à intégrer des pratiques éthiques et durables dans chacun de nos projets d’aménagement et de décoration
              d’intérieur. Guidés par les objectifs de développement durable, nous travaillons pour répondre aux enjeux sociaux,
              environnementaux et économiques, tout en valorisant l’artisanat et le savoir-faire local.
            </p>
            <p>
              <strong>Pas de pauvreté :</strong> Dynamisation économique des métiers artisanaux et du tissu économique local. Nous soutenons
              activement les artisans et les entreprises locales en collaborant avec des professionnels qualifiés et passionnés. En valorisant le
              savoir-faire traditionnel et contemporain, nous contribuons à la création d’emplois et à la pérennisation de métiers artisanaux,
              tout en renforçant le tissu économique local. Notre engagement est aussi économique que social : permettre à ces acteurs de prospérer
              dans un cadre équitable et respectueux.
            </p>
            <p>
              <strong>Bonne santé et bien-être :</strong> La santé et le bien-être de nos clients et de leurs espaces de vie sont une priorité.
              Nous sélectionnons des matériaux et des solutions d’aménagement qui réduisent l’empreinte carbone et minimisent
              l’émission de composés organiques volatiles (COV). Nous nous efforçons de concevoir des projets respectueux de l’environnement,
              favorisant un cadre de vie sain et écoresponsable.
            </p>
          </div>
        </div>

        {/* Ligne 2 : Texte à gauche et image à droite */}
        <div className="engagement-row reverse">
          <div className="engagement-text-left">
            <p>
              <strong>Villes et communautés durables :</strong> Vers un habitat équipé de manière durable. Nous aspirons à rendre chaque intérieur
              durable en intégrant des équipements et des matériaux conçus pour durer dans le temps.
            </p>
            <p>
              <strong>Consommation et production responsables :</strong> Une production écoresponsable des matériaux. Nous travaillons main dans
              la main avec des artisans partageant nos valeurs, en privilégiant des matériaux produits de manière éthique et écoresponsable. Nous
              faisons le choix de matières locales et renouvelables, afin de limiter l’impact écologique de chaque projet, tout en célébrant le talent
              et la créativité des artisans.
            </p>
            <p>
              <strong>Réduction de notre bilan carbone :</strong> Chaque projet est conçu pour réduire au maximum son impact sur l’environnement.
              De la conception à la réalisation, nos démarches incluent l’utilisation de matériaux à faible impact, des chaînes d’approvisionnement
              courtes et un effort constant pour sensibiliser nos clients à des choix responsables et durables.
            </p>
            <p>
              Chez Cheyssoi Paris, l’éthique et le développement durable ne sont pas des options, mais des engagements profonds.
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
      

    