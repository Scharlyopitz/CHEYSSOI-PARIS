import "./Histoire.css";

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
            Je suis Tania Vingadassalon. Jeune, je dessinais des robes, lisais énormément,
  collectionnais des figurines, des bouteilles de parfums miniatures, des Pierrot de
  la Lune en porcelaine, des affiches publicitaires d'icônes de mode, j'aimais la
  créativité et l’esthétique !
</p>
<p>
  Au sein d’une compagnie aérienne durant 20 ans je côtoie l’excellence de service,
  et lors de mes voyages, à la quête du beau, des artisans, du savoir-faire local,
  quelle richesse ! Mais je vole de mes propres ailes en 2021 pour vivre et partager
  ma passion première !
</p>
<p>
  Je garde mon amour pour la planète, mon amour pour la matière, les couleurs, le
  beau. Je me forme en design d’intérieur dans des écoles parisiennes réputées, je
  crée Cheyssoi Paris en 2021. Cheyssoi pour un orthographe plus chic, Paris car
  c'est là que prennent forme mes inspirations et aspirations !!!
</p>
<p>
  Fortement engagée envers des valeurs telles que l'éco-responsabilité et la
  durabilité, le slow design est une révélation et je crée mon studio concepteur
  d’intérieurs utilisant des matériaux sains pour l’environnement et pour les
  individus.
</p>
<p>
  Depuis 4 ans, l’équipe de Cheyssoi Paris vous accompagne avec plaisir à concevoir
  des intérieurs durables et élégants en collaboration avec un réseau d’artisans
  locaux et éthiques, favorisant les circuits courts et un impact carbone réduit.
</p>
<p>
  Nous privilégions des matériaux écologiques, tout en créant des environnements
  sains pour votre santé et celle de la planète. Que vous soyez particulier ou
  professionnel, en France ou à l’étranger, nous vous aidons à imaginer et
  concrétiser un intérieur en harmonie avec vos valeurs, vos envies et votre
  environnement !
</p>
          </div>
        </div>
      </div>
    </div>
  );
}
