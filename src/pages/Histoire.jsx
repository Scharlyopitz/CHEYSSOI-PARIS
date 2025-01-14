import "./Histoire.css";
import Team from "../sections/Team"; // Importez le composant Team

export default function Histoire() {
  return (
    <div className="histoire-page">
      {/* Section de l'image principale */}
      <div className="histoire-header">
        <h1 className="histoire-title">HISTOIRE</h1>
        <p className="subtitle">PAGE DÉDIÉE À NOTRE HISTOIRE</p>
      </div>

      {/* Contenu défilable */}
      <div className="histoire-content">
        {/* Section avec image à gauche et texte à droite */}
        <div className="histoire-section with-image">
          <img src="/5.png" alt="Image à gauche" className="histoire-image-left" />
          <div className="histoire-text-right">
            <p>
              Je suis Tania Vingadassalon. Jeune, je dessinais des robes, lisais énormément, collectionnais des figurines, des bouteilles de parfums miniatures, des Pierrot de la Lune en porcelaine, des affiches publicitaires d'icônes de mode, j'aimais la créativité et l’esthétique !
            </p>
            <p>
              Au sein d’une compagnie aérienne durant 20 ans je côtoie l’excellence de service, et lors de mes voyages, à la quête du beau, des artisans, du savoir-faire local, quelle richesse ! Mais je vole de mes propres ailes en 2021 pour vivre et partager ma passion première !
            </p>
            <p>
              Je garde mon amour pour la planète, mon amour pour la matière, les couleurs, le beau. Je me forme en design d’intérieur dans des écoles parisiennes réputées, je crée Cheyssoi Paris en 2021. Cheyssoi pour un orthographe plus chic, Paris car c'est là que prennent forme mes inspirations et aspirations !!!
            </p>
            <p>
              Fortement engagée envers des valeurs telles que l'éco-responsabilité et la durabilité, le slow design est une révélation et je crée mon studio concepteur d’intérieurs utilisant des matériaux sains pour l’environnement et pour les individus.
            </p>
            <p>
              Depuis 4 ans, l’équipe de Cheyssoi Paris vous accompagne avec plaisir à concevoir des intérieurs durables et élégants en collaboration avec un réseau d’artisans locaux et éthiques, favorisant les circuits courts et un impact carbone réduit.
            </p>
            <p>
              Nous privilégions des matériaux écologiques, tout en créant des environnements sains pour votre santé et celle de la planète. Que vous soyez particulier ou professionnel, en France ou à l’étranger, nous vous aidons à imaginer et concrétiser un intérieur en harmonie avec vos valeurs, vos envies et votre environnement !
            </p>
          </div>
        </div>
      </div>

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
        
        {/* Section Équipe */}
        <div id="team-section" className="team-section">
          <Team />
        </div>
      </div>
    </div>
  );
}

 