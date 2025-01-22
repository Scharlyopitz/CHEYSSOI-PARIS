import ImageReveal from "../components/ImageReveal";
import TextReveal from "../components/TextReveal";
import TitleReveal from "../components/TitleReveal";
import EbookImage from "/Ebook.webp";

import { Link } from "react-router-dom";

export default function Ebook() {
  const href = `https://www.amazon.fr/CREER-INTERIEUR-ECO-RESPONSABLE-ELEGANT-ebook/dp/B0D73LSF6C/ref=sr_1_1?

__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31XJVAMSA9CSQ&dib=eyJ2IjoiMSJ9.A4z4bMsJWqTjD5P2uzG2Pk6BHSfM10a6b8b

VmdiYqxeEK-iTWVx-FosmOjkyjxlQtmgRclONO9W5RTWEiu7Ovs_Gubxw2-

FPy3ZpSn2H1oX94jx3n7QfeDeEt_fThcwl2t0qMa6tvFN1P6QjMFG7Ja7tLMwRm5pUeIYKBayW15LpxCB6Wu_npvC9nrqGmE9nEDlUTawFbx3ue1mz
cqx1wG_-3ywsVy2W5DKAo3ZXhTyPTe47YF9gnxfkqJg5oyp4EkpPHEq9Q2HccGUYdV2yu5oU4kazHDdD0WArpj3NBt0.8NQb37_3dkeeC5CROKbx
5qpH0FHw4JAwZ78VHYd4GCg&dib_tag=se&keywords=CREER+UN+INTERIEUR+ECO+RESPONSABLE&nsdOptOutParam=true&qid=173195137

4&sprefix=creer+un+interieur+eco+responsable%2Caps%2C137&sr=8-1`;

  return (
    <section id="ebook">
      <TitleReveal words={["notre", "ebook"]} />
      <div className="container">
        <div className="paragraph">
          <TextReveal
            text={`CRÉER UN INTÉRIEUR ÉCO-RESPONSABLE ÉLÉGANT" EST UN GUIDE POUR TRANSFORMER VOTRE ESPACE DE VIE EN UN SANCTUAIRE CHIC ET RESPECTUEUX DE L'ENVIRONNEMENT.`}
          />

          <Link to={href} className="Button" target="_blank">
            COMMANDER MON EBOOK
          </Link>
        </div>
        <ImageReveal src={EbookImage} alt="image Ebook" />
      </div>
    </section>
  );
}
