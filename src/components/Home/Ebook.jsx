import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Ebook() {
  const title = "Notre Ebook";

  const text = `"Créer un intérieur éco-responsable élégant" est un guide pour transformer votre espace de vie en un sanctuaire chic et respectueux de l'environnement.`;

  const href = `https://www.amazon.fr/CREER-INTERIEUR-ECO-RESPONSABLE-ELEGANT-ebook/dp/B0D73LSF6C/ref=sr_1_1?

__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31XJVAMSA9CSQ&dib=eyJ2IjoiMSJ9.A4z4bMsJWqTjD5P2uzG2Pk6BHSfM10a6b8b

VmdiYqxeEK-iTWVx-FosmOjkyjxlQtmgRclONO9W5RTWEiu7Ovs_Gubxw2-

FPy3ZpSn2H1oX94jx3n7QfeDeEt_fThcwl2t0qMa6tvFN1P6QjMFG7Ja7tLMwRm5pUeIYKBayW15LpxCB6Wu_npvC9nrqGmE9nEDlUTawFbx3ue1mz
cqx1wG_-3ywsVy2W5DKAo3ZXhTyPTe47YF9gnxfkqJg5oyp4EkpPHEq9Q2HccGUYdV2yu5oU4kazHDdD0WArpj3NBt0.8NQb37_3dkeeC5CROKbx
5qpH0FHw4JAwZ78VHYd4GCg&dib_tag=se&keywords=CREER+UN+INTERIEUR+ECO+RESPONSABLE&nsdOptOutParam=true&qid=173195137

4&sprefix=creer+un+interieur+eco+responsable%2Caps%2C137&sr=8-1`;
  return (
    <section id="ebook">
      <div className="container">
        <div className="title">
          {title.split(" ").map((word, i) => {
            return <h2 key={i}>{word}</h2>;
          })}
        </div>
        <div className="paragraph">
          <p>{text}</p>

          <Link to={href} target="_blank">
            Regarde Ici !
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}
